import { Routes, Route, Navigate, Link } from "react-router-dom"
import Home from "../pages/Home"
import About from "../pages/About"
import MotorcycleListing from "../pages/MotorcycleListing"
import MotorcycleDetails from "../pages/MotorcycleDetails"
import MotorcycleContent from "../components/MotorcycleContent/MotorcycleContent.jsx"
import Blog from "../pages/Blog.jsx"
import BlogDetails from "../pages/BlogDetails"
import Counter from "../features/counter/Counter.js"
import NotFound from "../pages/NotFound"
import Contact from "../pages/Contact"
import LoginForm from "../components/forms/LoginForm.jsx"
import RegisterForm from "../components/forms/RegisterForm.jsx"
import Profile from "../components/profile/Profile.jsx"

const Routers = () => {
  return (
    <>
      {/* <nav>
        <Link to="/login">Login</Link> | <Link to="/register">Register</Link>
      </nav> */}
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<About />} />
        <Route path="/motorcycles" element={<MotorcycleListing />} />
        <Route path="/motorcycles/:slug" element={<MotorcycleDetails />} />
        <Route path="/motorcycleContent" element={<MotorcycleContent />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/blogs/:slug" element={<BlogDetails />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
        {/* Authentication Routes */}
      </Routes>
    </>
  )
}

export default Routers
