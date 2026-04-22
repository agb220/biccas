"use client";
import { createContext, useContext, useEffect, useState } from "react";
import {
  User,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, googleProvider, db } from "@/lib/firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { plans } from "@/app/_components/_constants/constants";

type Plan = (typeof plans)[0];

interface AuthContextType {
  user: User | null;
  loading: boolean;
  loginWithEmail: (email: string, pass: string) => Promise<void>;
  signInWithGoogle: () => Promise<void>;
  logout: () => Promise<void>;
  selectedPlan: Plan | null;
  setPlan: (plan: Plan) => void;
  handlePlanSelection: (plan: Plan["id"]) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);
  const router = useRouter();

  const setPlan = (plan: Plan) => {
    setSelectedPlan(plan);
  };

  const syncUserToFirestore = async (firebaseUser: User) => {
    const docRef = doc(db, "users", firebaseUser.uid);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
      const planToSave = selectedPlan || plans.find((p) => p.id === "free");
      const startDate = new Date();
      const endDate = new Date();
      endDate.setDate(startDate.getDate() + 30);

      await setDoc(docRef, {
        uid: firebaseUser.uid,
        name: firebaseUser.displayName || "User",
        email: firebaseUser.email,
        subscription: {
          planId: planToSave?.id,
          planTitle: planToSave?.title,
          status: planToSave?.id === "free" ? "active" : "pending_payment",
          monthlyPrice: planToSave?.monthlyPrice,
          startDate: startDate.toISOString(),
          endDate: planToSave?.id === "free" ? null : endDate.toISOString(),
        },
        createdAt: new Date().toISOString(),
      });
      if (planToSave?.id !== "free") {
        router.push("/checkout");
      } else {
        router.push("/account");
      }
    } else {
      router.push("/account");
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const loginWithEmail = async (email: string, pass: string) => {
    await signInWithEmailAndPassword(auth, email, pass);
    router.push("/account");
  };

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      await syncUserToFirestore(result.user);
      router.push("/account");
    } catch (error) {
      console.error("Google Auth Error:", error);
    }
  };

  const logout = async () => {
    await signOut(auth);
    router.push("/");
  };

  const handlePlanSelection = (planId: string) => {
    const targetPlan = plans.find((p) => p.id === planId);
    if (!targetPlan) return;

    setPlan(targetPlan);

    if (user) {
      if (planId === "free") {
        router.push("/account");
      } else {
        router.push("/checkout");
      }
    } else {
      router.push("/sign-up");
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        loginWithEmail,
        signInWithGoogle,
        logout,
        selectedPlan,
        setPlan,
        handlePlanSelection,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};
