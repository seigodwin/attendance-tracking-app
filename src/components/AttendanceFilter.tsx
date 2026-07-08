import { useState } from "react";
import type { GetAllQueryParameters } from "../dtos/AttendanceDtos/GetAllQueryParameters";

type AttendanceFilterProps = {
  onSearch: (params: GetAllQueryParameters) => void;
};

function AttendanceFilter({ onSearch }: AttendanceFilterProps) {

  const [filters, setFilters] = useState<GetAllQueryParameters>({
    DepartmentName: "",
    Date: undefined,
    StartDate: undefined,
    EndDate: undefined
  });


  function handleChange(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    const { name, value } = e.target;

    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  }


  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    onSearch(filters);
  }


  return (
    <div
      className="
        mx-6 mt-6 mb-4
        rounded-xl
        bg-slate-900/70
        border border-slate-700
        p-5
        shadow-lg
      "
    >

      <h2 className="text-lg font-semibold mb-5">
        Filter Attendance Records
      </h2>


      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-4 gap-5"
      >

        {/* Department */}
        <div className="flex flex-col gap-1">
          <label className="text-sm text-slate-300">
            Department
          </label>

          <input
            type="text"
            name="DepartmentName"
            placeholder="Enter department name"
            value={filters.DepartmentName}
            onChange={handleChange}
            className="
              rounded-lg
              bg-slate-800
              border border-slate-600
              px-4 py-2
              outline-none
              focus:border-indigo-500
            "
          />

          <span className="text-xs text-slate-400">
            Search attendance records by department
          </span>
        </div>


        {/* Specific Date */}
        <div className="flex flex-col gap-1">
          <label className="text-sm text-slate-300">
            Specific Date
          </label>

          <input
            type="date"
            name="Date"
            onChange={handleChange}
            className="
              rounded-lg
              bg-slate-800
              border border-slate-600
              px-4 py-2
              outline-none
              focus:border-indigo-500
            "
          />

          <span className="text-xs text-slate-400">
            View attendance for a particular day
          </span>
        </div>


        {/* Start Date */}
        <div className="flex flex-col gap-1">
          <label className="text-sm text-slate-300">
            Start Date
          </label>

          <input
            type="date"
            name="StartDate"
            onChange={handleChange}
            className="
              rounded-lg
              bg-slate-800
              border border-slate-600
              px-4 py-2
              outline-none
              focus:border-indigo-500
            "
          />

          <span className="text-xs text-slate-400">
            Show records starting from this date
          </span>
        </div>


        {/* End Date */}
        <div className="flex flex-col gap-1">
          <label className="text-sm text-slate-300">
            End Date
          </label>

          <input
            type="date"
            name="EndDate"
            onChange={handleChange}
            className="
              rounded-lg
              bg-slate-800
              border border-slate-600
              px-4 py-2
              outline-none
              focus:border-indigo-500
            "
          />

          <span className="text-xs text-slate-400">
            Show records up to this date
          </span>
        </div>

            <div className="md:col-span-4 flex justify-center">
            <button
                type="submit"
                className="
                bg-orange-500
                hover:bg-orange-600
                rounded-lg
                py-2
                px-8
                w-1/2
                font-semibold
                transition
                shadow-md
                "
            >
                Search Attendance
            </button>
            </div>

      </form>

    </div>
  );
}

export default AttendanceFilter;