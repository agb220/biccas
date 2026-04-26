"use client";
import { useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const { user, loading, selectedPlan } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (loading) return;
    if (!user) {
      router.replace("/sign-up");
      return;
    }
    if (!selectedPlan) {
      router.replace("/");
      return;
    }

    const redirectToStripe = async () => {
      try {
        const response = await fetch("/api/checkout", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            planTitle: selectedPlan.title,
            monthlyPrice: selectedPlan.monthlyPrice,
            userId: user.uid,
            email: user.email,
          }),
        });

        const data = await response.json();

        if (data.url) {
          window.location.href = data.url;
        } else {
          console.error("No URL returned from checkout");
        }
      } catch (err) {
        console.error("Stripe redirect failed:", err);
      }
    };

    redirectToStripe();
  }, [user, loading, selectedPlan, router]);

  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center">
      <div className="w-12 h-12 border-4 border-[#54BD95] border-t-transparent rounded-full animate-spin mb-4"></div>
      <h2 className="text-[#061A1F] text-xl font-medium animate-pulse">
        Preparing secure checkout...
      </h2>
      <p className="text-[#061A1F]/60 mt-2">
        You are being redirected to a secure payment page.
      </p>
    </main>
  );
}
