"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema, SignUpValues } from "@/lib/validations/auth";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "@/lib/firebase";
import { useRouter } from "next/navigation";
import Input from "../_components/shared/Input";
import Button from "../_components/shared/Button";
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";

export default function SignUpPage() {
  const [serverError, setServerError] = useState("");
  const router = useRouter();
  const { loginWithEmail, signInWithGoogle } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignUpValues>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = async (data: SignUpValues) => {
    try {
      setServerError("");
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      await updateProfile(userCredential.user, { displayName: data.name });

      await setDoc(doc(db, "users", userCredential.user.uid), {
        uid: userCredential.user.uid,
        name: data.name,
        email: data.email,
        subscription: {
          plan: "free",
          status: "inactive",
          startDate: null,
          endDate: null,
        },
        createdAt: new Date().toISOString(),
      });

      router.push("/account");
    } catch (err: any) {
      console.error("Firebase error details:", err.code, err.message);

      if (err.code === "auth/email-already-in-use") {
        setServerError("This email address is already taken");
      } else if (err.code === "auth/invalid-email") {
        setServerError("Invalid email format");
      } else if (err.code === "auth/weak-password") {
        setServerError("Password is too weak");
      } else {
        setServerError(err.message);
      }
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center  pt-20 px-4">
      <div className="p-8 rounded-3xl w-full max-w-md border border-white/10 shadow-2xl bg-[#061A1F]">
        <h1 className="text-3xl text-white mb-8 font-bold">Registration</h1>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-6 mb-10"
        >
          <div>
            <Input
              label="Name"
              placeholder="Enter name"
              {...register("name")}
            />
            {errors.name && (
              <p className="text-red-400 text-xs mt-1 ml-1">
                {errors.name.message}
              </p>
            )}
          </div>

          <div>
            <Input
              label="Email"
              type="email"
              placeholder="example@mail.com"
              {...register("email")}
            />
            {errors.email && (
              <p className="text-red-400 text-xs mt-1 ml-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <Input
              label="Password"
              type="password"
              placeholder="••••••••"
              {...register("password")}
            />
            {errors.password && (
              <p className="text-red-400 text-xs mt-1 ml-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <div>
            <Input
              label="Confirm Password"
              type="password"
              placeholder="••••••••"
              {...register("confirmPassword")}
            />
            {errors.confirmPassword && (
              <p className="text-red-400 text-xs mt-1 ml-1">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          {serverError && (
            <p className="text-red-500 text-center text-sm bg-red-500/10 py-2 rounded-lg mt-2">
              {serverError}
            </p>
          )}

          <Button type="submit" className="mt-6 h-14" disabled={isSubmitting}>
            {isSubmitting ? "Creating a profile..." : "Sign up"}
          </Button>
        </form>
        <button
          onClick={signInWithGoogle}
          className="google-btn text-white text-center w-full hover:text-[#54BD95] duration-500 transition-colors"
        >
          Continue with Google
        </button>
      </div>
    </main>
  );
}
