import mongoose from "mongoose"
import config from "../../../../config"
import FacilitiesModel from "@/api/db/models/FacilitiesModel"

const postFacilities = async (req, res) => {
  const { name } = req.body

  await mongoose.connect(config.db.uri)

  try {
    await FacilitiesModel.create({
      name,
    })
  } finally {
    await mongoose.disconnect()
    res.redirect("/createRoom")
  }
}

export default postFacilities
