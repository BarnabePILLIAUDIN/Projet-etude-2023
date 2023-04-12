import { mongoose } from "mongoose"
import RoomSchema from "../schema/RoomSchema"

const RoomModel = mongoose.modelsame().includes("room")
  ? mongoose.model("room")
  : mongoose.model("room", RoomSchema)

export default RoomModel
