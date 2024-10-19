import {
  Button,
  TextField,
  Typography,
  InputAdornment,
  IconButton,
} from "@mui/material"
import styles from "./signInPage.module.css"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { signInUser } from "../../features/userSlice/userSlice"

export default function SignInPage() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [showPassword, setShowPassword] = useState(false)

  const handleClickShowPassword = () => setShowPassword((show) => !show)

  const handleMouseDownPassword = (event) => event.preventDefault()

  const {
    control,
    setValue,
    register,
    formState: { errors, isSubmitted },
    handleSubmit,
    reset,
  } = useForm({
    defaultValues: {
      Password: "",
      Email: "",
    },
  })

  const onSubmit = async (data) => {
    dispatch(signInUser(data))
  }

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <Typography
          sx={{
            fontSize: "16px",
            marginBottom: "8px",
            fontWeight: 700,
          }}
        >
          {" "}
          Email{" "}
        </Typography>
        <TextField
          {...register("Email", {
            required: "Email is required",
          })}
          placeholder={"Email"}
          error={isSubmitted && !!errors.Email}
          helperText={isSubmitted && errors.Email?.message}
          sx={{
            width: "100%",
          }}
        />
        <br />
        <br />
        <Typography
          sx={{
            fontSize: "16px",
            marginBottom: "8px",
            fontWeight: 700,
          }}
        >
          {" "}
          Password
        </Typography>
        <TextField
          {...register("Password", {
            required: "Password is required",
          })}
          placeholder="Password"
          type={showPassword ? "text" : "password"}
          error={isSubmitted && !!errors.Password}
          helperText={isSubmitted && errors.Password?.message}
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
        <Button
          variant="contained"
          sx={{ marginTop: "16px", width: "100%" }}
          type="submit"
        >
          Sign In
        </Button>
        <Button
          variant="contained"
          type="button"
          sx={{ marginTop: "16px", width: "100%" }}
          onClick={() => navigate("/signup")}
        >
          Sign Up
        </Button>
      </form>
    </div>
  )
}
