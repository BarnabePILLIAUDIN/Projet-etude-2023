import mongoose from "mongoose"
import ReservationSchema from "../schema/RerservationSchema"

const ReservationModel = mongoose.modelNames().includes("reservation")
  ? mongoose.model("reservation")
  : mongoose.model("reservation", ReservationSchema)

export default ReservationModel
