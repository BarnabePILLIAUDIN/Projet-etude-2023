import mongoose from "mongoose"
import config from "../../../config"
import UserModel from "../../api/db/models/UserModel"

const getUsers = async (req, res) => {
  await mongoose.connect(config.db.uri)

  try {
    const users = await UserModel.find()
    res.status(200)
    res.send({ status: 200, data: users })
  } catch (error) {
    res.status(500)
    res.send({ status: 500, error })
  } finally {
    await mongoose.disconnect()
  }
}

export default getUsers
