import AdminLoginForm from "./AdminLoginForm";

export default function AdminLoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-sm">
        <h2 className="mb-3 text-2xl font-bold">Admin Login</h2>
        <p className="text-sm mb-5">
          Enter your email and password to login.
        </p>
        <AdminLoginForm />
      </div>
    </div>
  );
}
