import { stripe } from "@/lib/stripe";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { adminDb } from "@/lib/firebase-admin";

const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

export async function POST(req: Request) {
  const body = await req.text();
  const sig = (await headers()).get("stripe-signature");

  let event;

  try {
    event = stripe.webhooks.constructEvent(body, sig!, endpointSecret!);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as any;

    const userId = session.metadata?.userId;
    const planTitle = session.metadata?.planTitle || "Premium";
    const monthlyPrice = session.metadata?.monthlyPrice || 0;

    if (userId) {
      try {
        const endDate = new Date();
        endDate.setDate(endDate.getDate() + 30);

        await adminDb
          .collection("users")
          .doc(userId)
          .update({
            "subscription.status": "active",
            "subscription.planTitle": planTitle,
            "subscription.monthlyPrice": Number(monthlyPrice),
            "subscription.stripeSessionId": session.id,
            "subscription.endDate": endDate.toISOString(),
            "subscription.updatedAt": new Date().toISOString(),
          });
        console.log(`✅ Plan ${planTitle} active for: ${userId}`);
      } catch (error: any) {
        console.error("❌ Error update Firebase Admin:", error.message);
        return NextResponse.json({ error: error.message }, { status: 500 });
      }
    } else {
      console.warn("⚠️ No userId found in metadata!");
    }
  }

  return NextResponse.json({ received: true });
}
