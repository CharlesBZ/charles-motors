import React, { useState } from "react"
import {
  Button,
  TextField,
  Typography,
  InputAdornment,
  IconButton,
} from "@mui/material"
import styles from "./registerPage.module.css"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { registerUser } from "../../features/auth/authSlice"

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const status = useSelector((state) => state.auth.status)
  const error = useSelector((state) => state.auth.error)

  const handleClickShowPassword = () => setShowPassword((show) => !show)

  const handleMouseDownPassword = (event) => event.preventDefault()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  })

  // Submit handler
  const onSubmit = async (data) => {
    dispatch(registerUser(data)).then((response) => {
      if (!response.error) {
        navigate("/login")
      }
    })
  }

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <Typography
          sx={{ fontSize: "16px", marginBottom: "8px", fontWeight: 700 }}
        >
          Name
        </Typography>
        <TextField
          type="text"
          placeholder="Name"
          {...register("name", {
            required: "Name is required",
          })}
          error={isSubmitted && !!errors.name}
          helperText={isSubmitted && errors.name?.message}
          sx={{ width: "100%" }}
        />
        <br />
        <br />

        <Typography
          sx={{ fontSize: "16px", marginBottom: "8px", fontWeight: 700 }}
        >
          Email
        </Typography>
        <TextField
          type="email"
          placeholder="Email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Invalid email address",
            },
          })}
          error={isSubmitted && !!errors.email}
          helperText={isSubmitted && errors.email?.message}
          sx={{ width: "100%" }}
        />
        <br />
        <br />

        <Typography
          sx={{ fontSize: "16px", marginBottom: "8px", fontWeight: 700 }}
        >
          Password
        </Typography>
        <TextField
          placeholder="Password"
          type={showPassword ? "text" : "password"}
          {...register("password", {
            required: "Password is required",
          })}
          error={isSubmitted && !!errors.password}
          helperText={isSubmitted && errors.password?.message}
          sx={{ width: "100%" }}
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

        <Button
          type="submit"
          variant="contained"
          sx={{ marginTop: "16px", width: "100%" }}
          disabled={status === "loading"}
        >
          {status === "loading" ? "Registering..." : "Register"}
        </Button>

        <Button
          type="button"
          onClick={() => navigate("/login")}
          variant="contained"
          sx={{ marginTop: "16px", width: "100%" }}
        >
          Already have an account?
        </Button>
      </form>
      {error && <p>{error}</p>}
    </div>
  )
}

export default RegisterForm
