import "./App.css";
import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import RegisterUser from "./pages/User/Register";
import LoginUser from "./pages/User/Login";
import RegisterAdmin from "./pages/Admin/Register";
import LoginAdmin from "./pages/Admin/Login";
import Tandon from "./Hostels/Tandon"
import Tilak from "./Hostels/Tilak"
import Malviya from "./Hostels/Malviya"
import Patel from "./Hostels/Patel"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup-student" element={<RegisterUser />} />
        <Route path="/login-student" element={<LoginUser />} />
        <Route path="/signup-admin" element={<RegisterAdmin />} />
        <Route path="/login-admin" element={<LoginAdmin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/tandon" element={<Tandon />} />
        <Route path="/dashboard/tilak" element={<Tilak />} />
        <Route path="/dashboard/malviya" element={<Malviya />} />
        <Route path="/dashboard/patel" element={<Patel />} />
      </Routes>
    </>
  );
}

export default App;
