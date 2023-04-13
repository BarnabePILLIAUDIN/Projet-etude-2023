import mongoose from "mongoose"
import config from "../../../../config"
import UserModel from "@/api/db/models/UserModel"
import hashPassword from "@/api/utils/hashPassword"

const resetPassword = async (req, res) => {
  const id = req.query.id
  const { newPassword } = req.body
  await mongoose.connect(config.db.uri)

  try {
    const user = await UserModel.findById(id)
    const password = hashPassword(newPassword)
    user.password = password
    await user.save()
    await mongoose.disconnect()
    res.send({ newPassword, user })
  } catch (error) {
    res.send({ error })
  } finally {
    await mongoose.disconnect()
  }
}

export default resetPassword
