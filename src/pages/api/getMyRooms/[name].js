import mongoose from "mongoose"
import config from "../../../../config"
import RoomsModel from "@/api/db/models/RoomsModel"

const getMyRooms = async (req, res) => {
  const { name } = req.query

  try {
    await mongoose.connect(config.db.uri)
    const result = await RoomsModel.find({ reservedBy: name }).sort({
      roomNumber: 1,
    })
    res.status(200)
    res.send({ status: 200, data: result })
    await mongoose.disconnect()
    await mongoose.disconnect()
  } catch (error) {
    res.status(500)
    res.send({ status: 500, error })
  }
}

export default getMyRooms
