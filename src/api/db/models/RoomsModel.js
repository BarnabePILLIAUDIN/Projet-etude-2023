import mongoose from "mongoose"
import RoomsSchema from "../schema/RoomsSchema"

const RoomsModel = mongoose.modelNames().includes("rooms")
  ? mongoose.model("rooms")
  : mongoose.model("rooms", RoomsSchema)

export default RoomsModel
