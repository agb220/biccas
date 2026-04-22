"use client";
import { useState } from "react";
import Button from "../shared/Button";
import Input from "./Input";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

const LoginForm = ({ onSuccess }: { onSuccess: () => void }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { loginWithEmail } = useAuth();
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setError("");
      await loginWithEmail(email, password);

      router.push("/account");
      router.refresh();
      onSuccess();
    } catch (err: any) {
      console.error(err);
      setError("Invalid email or password");
    }
  };

  return (
    <form onSubmit={handleLogin} className="flex flex-col gap-8">
      <Input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e: any) => setEmail(e.target.value)}
        required
      />
      <Input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e: any) => setPassword(e.target.value)}
        required
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <Button type="submit">Sign in</Button>
    </form>
  );
};

export default LoginForm;
