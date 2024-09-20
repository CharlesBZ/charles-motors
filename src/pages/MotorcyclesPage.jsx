// src/components/MotorcyclesPage.js
import React, { useState, useEffect } from "react"
import axios from "axios"

const MotorcyclesPage = () => {
  const [motorcycles, setMotorcycles] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchMotorcycles = async () => {
      try {
        console.log("Sending request to API...")
        const response = await axios.get(
          "http://localhost:5000/api/motorcycles",
        )
        console.log("Response data:", response.data)
        setMotorcycles(response.data)
        setLoading(false)
      } catch (err) {
        console.error("Error fetching motorcycles:", err)
        setError(err.message)
        setLoading(false)
      }
    }

    fetchMotorcycles()
  }, [])

  if (loading) {
    return <p>Loading motorcycles...</p>
  }

  if (error) {
    return <p>Error: {error}</p>
  }

  return (
    <div>
      <h1>Motorcycles</h1>
      <ul>
        {motorcycles.map((motorcycle) => (
          <li key={motorcycle._id}>
            <strong>
              {motorcycle.make} {motorcycle.model}
            </strong>{" "}
            - {motorcycle.year} - ${motorcycle.price}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MotorcyclesPage
