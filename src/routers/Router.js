import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
// import About from "../pages/About";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  )
}

export default Routers;