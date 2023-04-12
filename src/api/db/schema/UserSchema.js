import mongoose from "mongoose"

const userSchema = mongoose.Schema({
  first: { type: String, required: true },
  last: { type: String, required: true },
  login: { type: String, require: true, unique: true },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, required: true, default: false },
})

export default userSchema
