import { Routes, Route, Navigate } from "react-router-dom"
import Home from "../pages/Home"
import About from "../pages/About"
import MotorcycleListing from "../pages/MotorcycleListing"
import MotorcycleDetails from "../pages/MotorcycleDetails"
import MotorcylclesPage from "../pages/MotorcycleContent/MotorcyclesPage.jsx"
import Blog from "../pages/Blog.jsx"
import BlogDetails from "../pages/BlogDetails"
import Counter from "../features/counter/Counter.js"
import NotFound from "../pages/NotFound"
import Contact from "../pages/Contact"
import SignInPage from "../pages/signInPage/signInPage.jsx"
import SignUpPage from "../pages/signUpPage/signUpPage.jsx"

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/signin" element={<SignInPage />}></Route>
      <Route path="/signup" element={<SignUpPage />}></Route>
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/motorcycles" element={<MotorcycleListing />} />
      <Route path="/motorcycles/:slug" element={<MotorcycleDetails />} />
      <Route path="/motorcyclesPage" element={<MotorcylclesPage />} />
      <Route path="/blogs" element={<Blog />} />
      <Route path="/blogs/:slug" element={<BlogDetails />} />
      <Route path="/counter" element={<Counter />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
      {/* Authentication Routes */}
    </Routes>
  )
}

export default Routers
