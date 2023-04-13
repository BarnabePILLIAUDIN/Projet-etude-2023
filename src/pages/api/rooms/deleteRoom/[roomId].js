import mongoose from "mongoose"
import config from "../../../../../config"
import RoomsModel from "@/api/db/models/RoomsModel"

const deleteRoom = async (req, res) => {
  const { roomId } = req.query
  await mongoose.connect(config.db.uri)

  try {
    await RoomsModel.findByIdAndDelete(roomId)
  } finally {
    await mongoose.disconnect()
  }

  res.redirect("/")
}

export default deleteRoom
