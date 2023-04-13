import mongoose from "mongoose"
import config from "../../../../config"
import RoomsModel from "@/api/db/models/RoomsModel"

const postRoom = async (req, res) => {
  const { roomNumber, capacity, facilities } = req.body

  await mongoose.connect(config.db.uri)

  try {
    await RoomsModel.create({
      roomNumber,
      capacity,
      facilities,
      reservedBy: "nobody",
      isReserved: false,
    })
  } finally {
    await mongoose.disconnect()
    res.redirect("/")
  }
}

export default postRoom
