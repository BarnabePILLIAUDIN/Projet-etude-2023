import mongoose from "mongoose"
import config from "../../../../config"
import FacilitiesModel from "@/api/db/models/FacilitiesModel"

const getAllFacilities = async (req, res) => {
  await mongoose.connect(config.db.uri)

  try {
    const facilities = await FacilitiesModel.find()
    res.status(200).json(facilities)
  } finally {
    await mongoose.disconnect()
  }
}

export default getAllFacilities
