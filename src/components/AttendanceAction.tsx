import { useState } from "react";
import { checkInAsync, checkOutAsync } from "../services/AttendanceService/AttendanceService";

function AttendanceAction() {
  const [email, setEmail] = useState<string>("");
  const [staffID, setStaffID] = useState<string>("");

  type CheckInOutDto = {
    Email: string;
    StaffID: string;
  };

  type CheckInOutProps = {
    checkInOutDto: CheckInOutDto;
  };

  async function handleCheckIn({ checkInOutDto }: CheckInOutProps) {
    if (!checkInOutDto.Email || !checkInOutDto.StaffID) {
      alert("Please fill in both Email and Staff ID fields.");
      return;
    }

    const response = await checkInAsync(checkInOutDto);

    if (!response.Success) {
      alert(`Check-in failed: ${response.Message}`);
      return;
    }

    alert(`Check-in successful: ${response.Message}`);
  }

  async function handleCheckOut({ checkInOutDto }: CheckInOutProps) {
    if (!checkInOutDto.Email || !checkInOutDto.StaffID) {
      alert("Please fill in both Email and Staff ID fields.");
      return;
    }

    const response = await checkOutAsync(checkInOutDto);

    if (!response.Success) {
      alert(`Check-out failed: ${response.Message}`);
      return;
    }

    alert(`Check-out successful: ${response.Message}`);
  }

  return (
    <section className="flex min-h-[calc(100vh-80px)] items-center justify-center px-4 py-10 sm:px-6 lg:px-8">
      <div className="w-full max-w-md rounded-[28px] border border-indigo-500/20 bg-slate-900/80 p-6 shadow-xl shadow-indigo-950/30 sm:p-8">
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-white">Record Attendance</h3>
          <p className="mt-2 text-sm text-slate-400">Enter your details to check in or out.</p>
        </div>

        <form className="mt-8 space-y-5">
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
            <label htmlFor="staffID" className="mb-2 block text-sm font-medium text-slate-200">
              Staff ID
            </label>
            <input
              id="staffID"
              name="staffID"
              type="text"
              required
              autoComplete="staff-id"
              value={staffID}
              onChange={(e) => setStaffID(e.target.value)}
              className="block w-full rounded-2xl border border-white/10 bg-slate-800/80 px-4 py-3 text-base text-white placeholder:text-slate-500 outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/30"
              placeholder="Enter staff ID"
            />
          </div>

          <div className="grid gap-3 pt-2 sm:grid-cols-2">
            <button
              type="button"
              onClick={() => handleCheckIn({ checkInOutDto: { Email: email, StaffID: staffID } })}
              className="flex w-full justify-center rounded-2xl bg-indigo-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-indigo-400"
            >
              Check in
            </button>

            <button
              type="button"
              onClick={() => handleCheckOut({ checkInOutDto: { Email: email, StaffID: staffID } })}
              className="flex w-full justify-center rounded-2xl bg-amber-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-amber-400"
            >
              Check out
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default AttendanceAction;
