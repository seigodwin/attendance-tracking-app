import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PopupMessage from "./PopupMessage";
import Login from "../services/AuthServices/AuthService";
import type { LoginRequestDto } from "../dtos/AuthDtos/LoginRequestDto";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";


function LoginForm() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [popup, setPopup] = useState<{ message: string; type: "error" | "success" } | null>(null);
  const {login} = useAuth();

  async function handleLogin(email: string , password: string) {
    if (!email || !password) {
      setPopup({ message: "Please fill in both Email and Password fields.", type: "error" });
      return
    }

    const dto:LoginRequestDto = {
      Email: email,
      Password: password
    }

    const response = await Login(dto);

    if(response.Success){

        login();
        setPopup({ message: "Login successful", type: "success" });
        
        const navigate = useNavigate();
        navigate("/dashboard");
    }

    setPopup({ message: response.Message ?? "Login failed ", type: "error" });
  }

  async function handleForgotPassword(email: string) {
    if (!email) {
      setPopup({ message: "Please enter your email address to reset your password.", type: "error" });
      return;
    }

    setPopup({ message: "Password reset instructions will be sent to your email.", type: "success" });
  }

  useEffect(() => {
    if (!popup) return;

    const timer = window.setTimeout(() => {
      setPopup(null);
    }, 5000);

    return () => window.clearTimeout(timer);
  }, [popup]);

  return (
    <section className="flex min-h-[calc(100vh-80px)] items-center justify-center px-4 py-10 sm:px-6 lg:px-8">
      <div className="w-full max-w-md rounded-[28px] border border-indigo-500/20 bg-slate-900/80 p-6 shadow-xl shadow-indigo-950/30 sm:p-8">
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-white">Admin Login</h3>
        </div>

        {popup && <PopupMessage message={popup.message} type={popup.type} />}

        <form
          className="mt-8 space-y-5"
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin(email , password);
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

          <div className="-mt-2 flex justify-end">
            <button
              type="button"
              onClick={() => handleForgotPassword(email)}
              className="text-sm font-medium text-indigo-300 transition hover:text-indigo-200"
            >
              Forgot password?
            </button>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="flex w-full justify-center rounded-2xl bg-indigo-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-indigo-400"
            >
              Login
            </button>

            <Link
              to="/"
              className="mt-3 flex items-center justify-center text-sm font-medium text-slate-400 transition hover:text-white"
            >
              Go back to home page
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
}

export default LoginForm;
