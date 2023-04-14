import mongoose from "mongoose"
import config from "../../../config"
import RoomsModel from "@/api/db/models/RoomsModel"
import FacilitiesModel from "@/api/db/models/FacilitiesModel"

const getRoomsAndFacilities = async (req, res) => {
  const data = {}
  await mongoose.connect(config.db.uri)

  try {
    data.rooms = await RoomsModel.find({ isReserved: false }).sort({
      roomNumber: 1,
    })
    data.facilities = await FacilitiesModel.find({})
    res.status(200)
    res.send({ status: 200, data })
  } catch (error) {
    res.status(500)
    res.send({ status: 500, error })
  } finally {
    await mongoose.disconnect()
  }
}

export default getRoomsAndFacilities
