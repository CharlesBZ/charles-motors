import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

export const registerCertUser = createAsyncThunk(
  "auth/registerCertUser",
  async (certUser, thunkAPI) => {
    try {
      let data = {
        certUser: certUser,
      }
      let endpoint = "http://localhost:5000/api/users"

      const response = await axios.post(endpoint, data)
      return response.data
    } catch (error) {
      if (error.status === 409)
        alert(
          "Email already registered to an account, please use a different one."
        )
      return thunkAPI.rejectWithValue({ error: error.message })
    }
  }
)

export const signInUser = createAsyncThunk(
  "auth/signInUser",
  async (credentials, thunkAPI) => {
    try {
      let endpoint = "http://localhost:5000/api/auth"

      const response = await axios.post(endpoint, credentials)
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message })
    }
  }
)

const initialState = {
  user: null,
  token: null,
  error: null,
  loading: false,
}
const loginSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.user = action.payload
    },
    logoutUser: (state) => {
      state.user = null
      state.token = null
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signInUser.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(signInUser.fulfilled, (state, action) => {
        state.loading = false
        state.user = action.payload.user
        state.token = action.payload.token
      })
      .addCase(signInUser.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload.message
      })
      .addCase(registerCertUser.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(registerCertUser.fulfilled, (state, action) => {
        state.loading = false
      })
      .addCase(registerCertUser.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload.message
      })
  },
})

export const { loginUser, logoutUser } = loginSlice.actions
export default loginSlice.reducer
