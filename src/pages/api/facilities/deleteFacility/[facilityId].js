import mongoose from "mongoose"
import config from "../../../../../config"
import FacilitiesModel from "@/api/db/models/FacilitiesModel"

const deleteFacility = async (req, res) => {
  const { facilityId } = req.query
  await mongoose.connect(config.db.uri)

  try {
    await FacilitiesModel.findByIdAndDelete(facilityId)
  } finally {
    await mongoose.disconnect()
  }

  res.redirect("/")
}

export default deleteFacility
