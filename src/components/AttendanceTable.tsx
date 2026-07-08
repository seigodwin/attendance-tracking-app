
import type { GetAttendanceResponseDto } from "../dtos/AttendanceDtos/GetAttendanceDto";
import formatTo12Hour from "../utility/FormatTo12Hour";

type PaginationProps = {
  pageNumber: number;
  pageSize: number;
  onPageChange: (pageNumber: number) => void;
};

type AttendanceTableProps = {
  attendance: GetAttendanceResponseDto[] | null;
  getById: (id: number) => void;
  pagination: PaginationProps;
};
function AttendanceTable({ attendance, getById , pagination}: AttendanceTableProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-700/50 bg-slate-900/40 backdrop-blur-md shadow-2xl">
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-slate-800/70">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">Employee</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">Department</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">Check In</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">Check Out</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">Date</th>
            </tr>
          </thead>

          <tbody>
            {/* Check if attendance exists and has items */}
            {attendance && attendance.length > 0 ? (
              attendance.map((record) => (
                <tr
                  key={record.id}
                  className="border-t border-slate-700/50 transition hover:bg-slate-800/40"
                >
                  <td className="px-6 py-4">
                    <button
                      onClick={() => getById(record.employeeId)}
                      className="font-medium text-indigo-400 hover:text-indigo-300 hover:underline"
                    >
                      {record.employeeFirstName} {record.employeeLastName}
                    </button>
                  </td>

                  <td className="px-6 py-4 text-slate-300">{record.employeeDepartment}</td>
                  <td className="px-6 py-4 text-slate-300">{formatTo12Hour(record.checkInTime)}</td>
                  <td className="px-6 py-4 text-slate-300">{formatTo12Hour(record.checkOutTime)}</td>
                  <td className="px-6 py-4 text-slate-300">{record.attendanceDate}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="px-6 py-12 text-center text-slate-400 border-t border-slate-700/50">
                  <div className="flex flex-col items-center justify-center space-y-2">
                    <span className="text-base font-medium">No records found</span>
                    <span className="text-xs text-slate-500">There is no attendance data to display.</span>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>

        <div className="flex items-center justify-between border-t border-slate-700/50 bg-slate-900/60 px-6 py-4">
      <button
        disabled={pagination.pageNumber === 1}
        onClick={() => pagination.onPageChange(pagination.pageNumber - 1)}
        className="rounded-xl border border-slate-700 bg-slate-800 px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-40"
      >
        Previous
      </button>

      <div className="flex items-center gap-2 text-sm text-slate-300">
        <span>Page</span>

        <span className="rounded-lg bg-indigo-500 px-3 py-1 font-semibold text-white">
          {pagination.pageNumber}
        </span>

        <span>|</span>

        <span>{pagination.pageSize} per page</span>
      </div>

      <button
        onClick={() => pagination.onPageChange(pagination.pageNumber + 1)}
        className="rounded-xl bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-indigo-500"
      >
        Next
      </button>
    </div>
      </div>
    </div>
  );
}

export default AttendanceTable;