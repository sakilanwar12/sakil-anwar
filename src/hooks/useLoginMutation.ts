import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

interface LoginCredentials {
  email: string;
  password: string;
}

interface LoginResponse {
  success: boolean;
  error?: string;
}

export function useLoginMutation() {
  const router = useRouter();

  return useMutation({
    mutationFn: async (
      credentials: LoginCredentials,
    ): Promise<LoginResponse> => {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      });

      const result = await response.json();

      if (!result.success) {
        throw new Error(result.error || "Login failed");
      }

      return result;
    },
    onSuccess: () => {
      router.push("/admin/dashboard");
      router.refresh();
    },
  });
}
