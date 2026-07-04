import AttendanceAction from "../components/AttendanceAction";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <div className="min-h-screen 
    bg-[radial-gradient(circle_at_top_left,_rgba(79,70,229,0.22),_transparent_35%),linear-gradient(135deg,_#020617_0%,_#111827_100%)]
    text-slate-100">
      <Navbar />
      <AttendanceAction />
    </div>
  );
}


export default Home