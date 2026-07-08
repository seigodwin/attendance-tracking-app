import { useEffect, useState } from "react";
import AttendanceTable from "../components/AttendanceTable";
import Navbar from "../components/Navbar";
import { getAll, getById } from "../services/AttendanceService/AttendanceService";
import type { GetAllQueryParameters } from "../dtos/AttendanceDtos/GetAllQueryParameters";
import type { GetAttendanceResponseDto } from "../dtos/AttendanceDtos/GetAttendanceDto";

    function AdminDashboard(){
    const[attendance , setAttendance] = useState<GetAttendanceResponseDto[] | null>([])
    const[queryParameters, setQueryParamters] = useState<GetAllQueryParameters | null>()
    const [pageNumber, setPageNumber] = useState(1);


    useEffect(()=>{
        async function fetchAttendance() {
            try{
                const attendance = await getAll(queryParameters , pageNumber)
                if(attendance.Success){
                    setAttendance(attendance.Data)
                }

                // if(attendance.StatusCode === 404){

                // }
            }

            catch(error){
                console.error(error)
            }
        }
        fetchAttendance();
    }, [pageNumber])

    async function getEmployeeById(Id: number) {
        await getById(Id);
    }

    function handlePageChange(page: number){
        setPageNumber(page);
        console.log(page);
    }

    return (
    <div className="min-h-screen 
    bg-[radial-gradient(circle_at_top_left,_rgba(79,70,229,0.22),_transparent_35%),linear-gradient(135deg,_#020617_0%,_#111827_100%)]
    text-slate-100">
      <Navbar />
      <AttendanceTable attendance={attendance} getById={getById} 
      pagination={
        { pageNumber,  pageSize: 10, onPageChange: handlePageChange, }  }
     />
    </div>
  );
}
export default AdminDashboard