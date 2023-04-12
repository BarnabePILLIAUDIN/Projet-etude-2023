import mongoose from "mongoose"
import userSchema from "../schema/UserSchema"

const UserModel = mongoose.modelNames().includes("user")
  ? mongoose.model("user")
  : mongoose.model("user", userSchema)

export default UserModel
