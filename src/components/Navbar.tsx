import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="sticky top-0 z-20 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-cyan-400 font-semibold text-white shadow-lg shadow-indigo-500/20">
            EW
          </div>
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-slate-400">
              Workforce
            </p>
            <h1 className="text-lg font-semibold text-white">Early Work</h1>
          </div>
        </div>

        <nav className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 p-1 md:flex">
          <Link
            to="/"
            className="rounded-full px-4 py-2 text-sm font-medium text-slate-200 transition hover:bg-white/10 hover:text-white"
          >
            Attendance
          </Link>
          <Link
            to="/login"
            className="rounded-full px-4 py-2 text-sm font-medium text-slate-400 transition hover:bg-white/10 hover:text-white"

          >
            Dashboard
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;