import AdminLoginForm from "./AdminLoginForm";

export default function AdminLoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-sm">
        <h2 className="mb-6 text-2xl font-bold">Admin Login</h2>
        <AdminLoginForm />
      </div>
    </div>
  );
}
