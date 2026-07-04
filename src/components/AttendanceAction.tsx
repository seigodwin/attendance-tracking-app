import { useState } from "react";
import { checkInAsync, checkOutAsync } from "../services/AttendanceService/AttendanceService";

function AttendanceAction() {

const[email, setEmail] = useState<string>("");
const[staffID, setStaffID] = useState<string>("");

type CheckInOutDto = {
    Email: string;
    StaffID: string;
}

type CheckInOutProps = {
    checkInOutDto: CheckInOutDto;
}

 async function handleCheckIn({checkInOutDto}: CheckInOutProps) {
    if(!checkInOutDto.Email || !checkInOutDto.StaffID) {
        alert("Please fill in both Email and Staff ID fields.");
        return;
    }

    let response = await checkInAsync(checkInOutDto);

    if(!response.Success) {
        alert(`Check-in failed: ${response.Message}`);
    }

    alert(`Check-in successful: ${response.Message}`);
 }

 async function handleCheckOut({checkInOutDto}: CheckInOutProps) {
    if(!checkInOutDto.Email || !checkInOutDto.StaffID) {
        alert("Please fill in both Email and Staff ID fields.");
        return;
    }

    let response = await checkOutAsync(checkInOutDto);
    if(!response.Success) {
        alert(`Check-out failed: ${response.Message}`);
    }

    alert(`Check-out successful: ${response.Message}`);
 }


  return (
    <>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-white">Welcome to Early Work</h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" method="POST" className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm/6 font-medium text-gray-100">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label className="block text-sm/6 font-medium text-gray-100">
                  Staff ID
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="staffID"
                  name="staffID"
                  type="text"
                  required
                  autoComplete="staff-id"
                  value={staffID}
                  onChange={(e) => setStaffID(e.target.value)}
                  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                onClick={() => handleCheckIn({checkInOutDto: {Email: email, StaffID: staffID}})}
                className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Check in
              </button>

              <button
                type="submit"
                onClick={() => handleCheckOut({checkInOutDto: {Email: email, StaffID: staffID}})}
                className="flex w-full justify-center rounded-md bg-yellow-500 px-3 py-1.5 mt-4 text-sm/6 font-semibold text-white hover:bg-yellow-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Check Out
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default AttendanceAction
