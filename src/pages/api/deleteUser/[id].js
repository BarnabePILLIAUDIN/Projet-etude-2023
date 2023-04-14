import mongoose from "mongoose"
import config from "../../../../config"
import UserModel from "@/api/db/models/UserModel"

const resetPassword = async (req, res) => {
  const id = req.query.id
  await mongoose.connect(config.db.uri)

  try {
    await UserModel.findByIdAndDelete(id)
    res.status(200)
    res.redirect("/")
  } catch (error) {
    res.send({ error })
  } finally {
    await mongoose.disconnect()
  }
}

export default resetPassword
