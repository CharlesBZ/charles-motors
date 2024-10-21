import React from "react"
import { useDispatch } from "react-redux"
import { logout } from "../../features/auth/authSlice"
import { useNavigate } from "react-router-dom"
import Button from "@mui/material/Button"

const LogoutButton = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout = () => {
    dispatch(logout())

    localStorage.removeItem("token")

    navigate("/login")
  }

  return (
    <Button color="" onClick={handleLogout}>
      Logout
    </Button>
  )
}

export default LogoutButton
