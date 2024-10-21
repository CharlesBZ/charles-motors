import { useEffect } from "react"
import { Typography, Card, CardContent } from "@mui/material"
import styles from "./MotorcycleContent.module.scss"
import { useSelector, useDispatch } from "react-redux"
import { fetchMotorcycleData } from "../../features/motorcycle/motorcycleSlice"

export default function MotorcycleContent() {
  const dispatch = useDispatch()
  const motorcyclesSelector = useSelector(
    (state) => state.motorcycle.motorcyclesData
  )
  const status = useSelector((state) => state.motorcycle.status)
  const error = useSelector((state) => state.motorcycle.error)

  useEffect(() => {
    dispatch(fetchMotorcycleData())
  }, [dispatch])

  if (status === "loading") {
    return <Typography variant="h4">Loading...</Typography>
  }

  if (status === "failed") {
    return <Typography variant="h4">{error}</Typography>
  }

  if (!motorcyclesSelector || motorcyclesSelector.length === 0) {
    return <Typography variant="h4">No data available</Typography>
  }

  return (
    <div className={styles.cardContainer}>
      {motorcyclesSelector.map((motorcycle) => (
        <Card className={styles.motorcycleCard} key={motorcycle.id}>
          <CardContent>
            <Typography variant="h5">{motorcycle.make}</Typography>
            <Typography variant="h6">{motorcycle.model}</Typography>
            <div className={styles.motorcycleDetails}>
              <Typography variant="body1">Year: {motorcycle.year}</Typography>
              <Typography variant="body1">Price: {motorcycle.price}</Typography>
              <Typography variant="body1">Type: {motorcycle.type}</Typography>
              <Typography variant="body1">
                Engine Capacity: {motorcycle.engineCapacity}
              </Typography>
              <Typography variant="body1">
                Available:{" "}
                {motorcycle.status ? motorcycle.status : "Not Available"}
              </Typography>
              <hr />
              <Typography variant="body1">
                Description:{" "}
                {motorcycle.motorcycleDescription || "No description available"}
              </Typography>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
