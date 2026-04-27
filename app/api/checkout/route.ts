import { stripe } from "@/lib/stripe";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { planTitle, monthlyPrice, userId, email, planId } = await req.json();

    const product = await stripe.products.create({
      name: planTitle,
    });

    const price = await stripe.prices.create({
      unit_amount: monthlyPrice * 100,
      currency: "usd",
      recurring: { interval: "month" },
      product: product.id,
    });

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [{ price: price.id, quantity: 1 }],
      mode: "subscription",
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/account?success=true`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/checkout?canceled=true`,

      metadata: {
        userId,
        planId,
        planTitle,
        monthlyPrice: monthlyPrice.toString(),
      },

      subscription_data: {
        metadata: {
          userId,
        },
      },

      customer_email: email,
    });

    return NextResponse.json({ url: session.url });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
