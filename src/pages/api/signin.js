import hashPassword from "@/api/utils/hashPassword"
import mongoose from "mongoose"
import config from "../../../config"
import UserModel from "@/api/db/models/UserModel"
import jwt from "jsonwebtoken"

const signin = async (req, res) => {
  const { login, password } = req.body

  if (!login || !password) {
    res.satus(400)
    res.send({ error: "Missing either password, login, or both " })

    return
  }

  const hashedPassword = hashPassword(password)

  await mongoose.connect(config.db.uri)

  try {
    const result = await UserModel.find({ login, password: hashedPassword })
    await mongoose.disconnect()

    if (result.length == 0) {
      res.status(404)
      res.send({ status: 404, error: "User not found" })

      return
    }

    if (result.length > 1) {
      res.status(500)
      res.send({ status: 500, error: "Too many user found" })

      return
    }

    const user = result[0]
    const payload = {
      first: user.first,
      last: user.last,
      id: user._id,
      isAdmin: user.isAdmin,
    }
    const token = jwt.sign(payload, config.security.jwt.key)
    res.status(200)
    res.redirect(`/setJWT/${token}`)
  } catch (err) {
    console.error(err) //eslint-disable-line
  }
}

export default signin
