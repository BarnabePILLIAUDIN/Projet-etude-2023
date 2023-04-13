import mongoose from "mongoose"
import config from "../../../../config"
import RoomsModel from "@/api/db/models/RoomsModel"

const getAllRooms = async (req, res) => {
  await mongoose.connect(config.db.uri)

  try {
    const rooms = await RoomsModel.find()
    res.status(200).json(rooms)
  } finally {
    await mongoose.disconnect()
  }
}

export default getAllRooms
