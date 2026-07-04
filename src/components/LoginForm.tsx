import { useState } from "react";

function LoginForm() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [popup, setPopup] = useState<{ message: string; type: "error" | "success" } | null>(null);

  async function handleLogin() {
    if (!email || !password) {
      setPopup({ message: "Please fill in both Email and Password fields.", type: "error" });
      return;
    }

    setPopup({ message: "Login successful. This is a placeholder for your authentication flow.", type: "success" });
  }

  async function handleForgotPassword() {
    if (!email) {
      setPopup({ message: "Please enter your email address to reset your password.", type: "error" });
      return;
    }

    setPopup({ message: "Password reset instructions will be sent to your email.", type: "success" });
  }

  return (
    <section className="flex min-h-[calc(100vh-80px)] items-center justify-center px-4 py-10 sm:px-6 lg:px-8">
      <div className="w-full max-w-md rounded-[28px] border border-indigo-500/20 bg-slate-900/80 p-6 shadow-xl shadow-indigo-950/30 sm:p-8">
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-white">Admin Login</h3>
          <p className="mt-2 text-sm text-slate-400">Sign in with your email and password.</p>
        </div>

        {popup && (
          <div
            className={`mt-6 rounded-2xl border px-4 py-3 text-sm ${
              popup.type === "error"
                ? "border-red-400/30 bg-red-500/10 text-red-200"
                : "border-emerald-400/30 bg-emerald-500/10 text-emerald-200"
            }`}
          >
            {popup.message}
          </div>
        )}

        <form
          className="mt-8 space-y-5"
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin();
          }}
        >
          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-200">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full rounded-2xl border border-white/10 bg-slate-800/80 px-4 py-3 text-base text-white placeholder:text-slate-500 outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/30"
              placeholder="name@company.com"
            />
          </div>

          <div>
            <label htmlFor="password" className="mb-2 block text-sm font-medium text-slate-200">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="block w-full rounded-2xl border border-white/10 bg-slate-800/80 px-4 py-3 text-base text-white placeholder:text-slate-500 outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/30"
              placeholder="Enter your password"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="flex w-full justify-center rounded-2xl bg-indigo-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-indigo-400"
            >
              Login
            </button>

            <button
              type="button"
              onClick={handleForgotPassword}
              className="mt-3 text-sm font-medium text-indigo-300 transition hover:text-indigo-200"
            >
              Forgot password?
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default LoginForm;
