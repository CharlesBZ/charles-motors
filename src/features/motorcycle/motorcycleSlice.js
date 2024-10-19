import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

export const fetchMotorcycleData = createAsyncThunk(
  "explore/fetchIndustryPartnersData",
  async (token) => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/motorcycles",
        {
          params: { token },
        }
      )
      return response.data
    } catch (error) {
      console.error(error)
    }
  }
)

const initialState = {
  motorcycleData: [],
}

const motorcycleSlice = createSlice({
  name: "motorcycle",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // motorcycleData
      .addCase(fetchMotorcycleData.pending, (state) => {
        state.loading = true
      })

      .addCase(fetchMotorcycleData.fulfilled, (state, action) => {
        state.loading = false
        state.motorcycleData = action.payload
      })

      .addCase(fetchMotorcycleData.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
  },
})

export default motorcycleSlice.reducer
