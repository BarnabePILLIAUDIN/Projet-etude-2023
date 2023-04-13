import mongoose from "mongoose"

const FacilitiesSchema = mongoose.Schema({
  name: { type: String, required: true, unique: true },
})

export default FacilitiesSchema
