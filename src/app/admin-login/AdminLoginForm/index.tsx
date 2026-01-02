"use client";

import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import toast from "react-hot-toast";
import { useLoginMutation } from "@/hooks/useLoginMutation";
import Loader from "@/components/loaders/Loader";

function AdminLoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const {
    mutate: login,
    isPending,
    isError,
    error,
    isSuccess,
  } = useLoginMutation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(formData);
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Login successful!");
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isError) {
      toast.error(error?.message || "An error occurred");
    }
  }, [isError, error]);
  if (isPending) {
    return <Loader />;
  }
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        id="email"
        type="email"
        placeholder="Enter Your Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        required
        disabled={isPending}
        variant="underline"
      />

      <Input
        id="password"
        type="password"
        placeholder="Enter your password"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        required
        disabled={isPending}
        variant="underline"
      />

      <Button
        type="submit"
        className="hover:text-primary w-fit cursor-pointer p-0 hover:bg-transparent hover:underline"
        disabled={isPending}
      >
        Sign In
      </Button>
    </form>
  );
}

export default AdminLoginForm;
