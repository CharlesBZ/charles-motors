import { Typography } from "@mui/material"
import styles from "./MotorcycleContent.module.scss"
import { useSelector } from "react-redux"

export default function MotorcycleContent() {
  const motorcyclesSelector = useSelector(
    (state) => state.motorcycle.motorcyclesData
  )

  // Check if motorcyclesSelector is defined
  if (!motorcyclesSelector) {
    return <Typography variant="h4">Loading...</Typography>
  }

  console.log("I am here the selector!" + motorcyclesSelector)

  return (
    <div className={styles.parent}>
      <Typography variant="h4">{motorcyclesSelector.make}</Typography>
      <Typography variant="h4">{motorcyclesSelector.model}</Typography>
      <div className={styles.motorcycleContent}>
        <div className={styles.MotorcycleLeft}>
          <Typography variant="h5">{motorcyclesSelector.year}</Typography>
          <Typography variant="h6">{motorcyclesSelector.price}</Typography>
          <Typography variant="body1">
            Type: {motorcyclesSelector.type}
          </Typography>
          <Typography variant="body1">
            Engine Capacity: {motorcyclesSelector.engineCapacity}
          </Typography>
          <Typography variant="h6">
            Available:{" "}
            {motorcyclesSelector.status
              ? motorcyclesSelector.status
              : "Not Available"}
          </Typography>
        </div>

        <Typography variant="h5">Motorcycle Description:</Typography>
        <hr />
        <div className={styles.MotorcycleDetails}>
          {motorcyclesSelector.motorcycleDescription ? (
            <Typography>{motorcyclesSelector.motorcycleDescription}</Typography>
          ) : (
            <Typography>No motorcycle description available</Typography>
          )}
        </div>
      </div>
    </div>
  )
}
