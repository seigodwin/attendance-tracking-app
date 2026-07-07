import { Route, Routes } from "react-router-dom"
import "./css/App.css"
import Home from "./pages/Home"
import Login from "./pages/Login"
import AdminDashboard from "./pages/AdminDashboard"

function App() {
  return ( 
    <>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<AdminDashboard />} />
     </Routes>
    </>
  )
}

export default App
