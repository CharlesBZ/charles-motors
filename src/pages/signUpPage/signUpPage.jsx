import {
  Button,
  TextField,
  Typography,
  InputAdornment,
  IconButton,
} from "@mui/material"
import styles from "./signUpPage.module.css"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { registerCertUser } from "../../features/userSlice/userSlice"

export default function SignUpPage() {
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
      FirstName: "",
      LastName: "",
    },
  })

  const onSubmit = async (data) => {
    dispatch(registerCertUser(data)).then(function (data) {
      if (!data.error) navigate("/signIn")
    })
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
          First Name{" "}
        </Typography>
        <TextField
          {...register("FirstName", {
            required: "First Name is required",
          })}
          placeholder={"First Name"}
          error={isSubmitted && !!errors.FirstName}
          helperText={isSubmitted && errors.FirstName?.message}
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
          Last Name{" "}
        </Typography>
        <TextField
          {...register("LastName", {
            required: "Last Name is required",
          })}
          placeholder={"Last Name"}
          error={isSubmitted && !!errors.LastName}
          helperText={isSubmitted && errors.LastName?.message}
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
          type="submit"
          variant="contained"
          sx={{ marginTop: "16px", width: "100%" }}
        >
          {" "}
          Sign Up{" "}
        </Button>
        <Button
          type="button"
          onClick={() => navigate("/signin")}
          variant="contained"
          sx={{ marginTop: "16px", width: "100%" }}
        >
          {" "}
          Already have an account?{" "}
        </Button>
      </form>
    </div>
  )
}
