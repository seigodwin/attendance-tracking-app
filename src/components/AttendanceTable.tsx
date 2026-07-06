import { GetAttendanceResponseDto } from "../dtos/GetAttendanceResponseDto";

type AttendanceTableProps = {
  attendance: GetAttendanceResponseDto[];
  getById: (id: number) => void;
};

function AttendanceTable({
  attendance,
  getById,
}: AttendanceTableProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-700/50 bg-slate-900/40 backdrop-blur-md shadow-2xl">
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-slate-800/70">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">
                Employee
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">
                Department
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">
                Check In
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">
                Check Out
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">
                Date
              </th>
            </tr>
          </thead>

          <tbody>
            {attendance.map((record) => (
              <tr
                key={record.Id}
                className="border-t border-slate-700/50 transition hover:bg-slate-800/40"
              >
                <td className="px-6 py-4">
                  <button
                    onClick={() => getById(record.EmployeeId)}
                    className="font-medium text-indigo-400 hover:text-indigo-300 hover:underline"
                  >
                    {record.EmployeeFirstName} {record.EmployeeLastName}
                  </button>
                </td>

                <td className="px-6 py-4 text-slate-300">
                  {record.EmployeeDepartment}
                </td>

                <td className="px-6 py-4 text-slate-300">
                  {record.CheckInTime ?? "--"}
                </td>

                <td className="px-6 py-4 text-slate-300">
                  {record.CheckOutTime ?? "--"}
                </td>

                <td className="px-6 py-4 text-slate-300">
                  {record.AttendanceDate}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AttendanceTable;