import mongoose from "mongoose"
import config from "../../../config"
import RoomsModel from "@/api/db/models/RoomsModel"

const getMyRooms = async (req, res) => {
  const { name } = req.body

  await mongoose.connect(config.db.uri)

  try {
    const result = await RoomsModel.find({ reservedBy: name })
    res.status(200)
    res.send({ status: 200, data: result })
    await mongoose.disconnect()
  } catch (error) {
    res.status(500)
    res.send({ status: 500, error })
    await mongoose.disconnect()
  }
}

export default getMyRooms
