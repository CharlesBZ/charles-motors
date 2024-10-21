import React from "react"
import { useSelector } from "react-redux"

const Profile = () => {
  const token = useSelector((state) => state.auth.token)

  if (!token) {
    return <div>Please log in to view your profile.</div>
  }

  return <div>Welcome! You are logged in with token: {token}</div>
}

export default Profile
