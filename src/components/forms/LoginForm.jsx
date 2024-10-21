import React, { useState, useEffect } from "react"
import {
  Button,
  TextField,
  Typography,
  InputAdornment,
  IconButton,
} from "@mui/material"
import styles from "./loginPage.module.css"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { loginUser } from "../../features/auth/authSlice"

const LoginForm = () => {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)
  const dispatch = useDispatch()
  const authStatus = useSelector((state) => state.auth.status)
  const error = useSelector((state) => state.auth.error)

  const handleClickShowPassword = () => setShowPassword((show) => !show)

  const handleMouseDownPassword = (event) => event.preventDefault()

  const {
    register,
    formState: { errors, isSubmitted },
    handleSubmit,
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  })

  // Submit handler without e.preventDefault
  const onSubmit = (data) => {
    dispatch(loginUser(data)) // data contains { email, password }
  }

  // Navigate after successful login
  useEffect(() => {
    if (authStatus === "succeeded") {
      navigate("/home")
    }
  }, [authStatus, navigate])

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        {/* Email Input */}
        <Typography
          sx={{
            fontSize: "16px",
            marginBottom: "8px",
            fontWeight: 700,
          }}
        >
          Email
        </Typography>
        <TextField
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Invalid email address",
            },
          })}
          placeholder="Email"
          error={isSubmitted && !!errors.email}
          helperText={isSubmitted && errors.email?.message}
          sx={{
            width: "100%",
          }}
        />
        <br />
        <br />

        {/* Password Input */}
        <Typography
          sx={{
            fontSize: "16px",
            marginBottom: "8px",
            fontWeight: 700,
          }}
        >
          Password
        </Typography>
        <TextField
          {...register("password", {
            required: "Password is required",
          })}
          placeholder="Password"
          type={showPassword ? "text" : "password"}
          error={isSubmitted && !!errors.password}
          helperText={isSubmitted && errors.password?.message}
          sx={{
            width: "100%",
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? (
                    <i className="fa-solid fa-eye"></i>
                  ) : (
                    <i className="fa-solid fa-eye-slash"></i>
                  )}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <br />
        <br />

        {/* Login Button */}
        <Button
          variant="contained"
          sx={{ marginTop: "16px", width: "100%" }}
          type="submit"
          disabled={authStatus === "loading"}
        >
          {authStatus === "loading" ? "Logging in..." : "Login"}
        </Button>

        {/* Sign Up Button */}
        <Button
          variant="contained"
          type="button"
          sx={{ marginTop: "16px", width: "100%" }}
          onClick={() => navigate("/register")}
        >
          Sign Up
        </Button>
      </form>

      {/* Display error if any */}
      {error && <p>{error}</p>}
    </div>
  )
}

export default LoginForm
