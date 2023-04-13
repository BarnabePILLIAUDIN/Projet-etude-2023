import mongoose from "mongoose"
import FacilitiesSchema from "../schema/FacilitiesSchema"

const FacilitiesModel = mongoose.modelNames().includes("facilities")
  ? mongoose.model("facilities")
  : mongoose.model("facilities", FacilitiesSchema)

export default FacilitiesModel
