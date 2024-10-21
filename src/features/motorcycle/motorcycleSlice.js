import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const fetchMotorcycleData = createAsyncThunk(
  "motorcycle/fetchMotorcycleData",
  async (_, { getState, rejectWithValue }) => {
    const token = getState().auth.token

    try {
      const response = await axios.get(
        "http://localhost:5000/api/motorcycles",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      return response.data
    } catch (error) {
      if (error.response && error.response.status === 401) {
        return rejectWithValue("Unauthorized: Please check your credentials")
      }
      return rejectWithValue(error.message)
    }
  }
)

const motorcycleSlice = createSlice({
  name: "motorcycle",
  initialState: {
    motorcyclesData: null,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMotorcycleData.pending, (state) => {
        state.status = "loading"
      })
      .addCase(fetchMotorcycleData.fulfilled, (state, action) => {
        state.status = "succeeded"
        state.motorcyclesData = action.payload
      })
      .addCase(fetchMotorcycleData.rejected, (state, action) => {
        state.status = "failed"
        state.error = action.error.message
      })
  },
})

export default motorcycleSlice.reducer
