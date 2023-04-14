import hashPassword from "@/api/utils/hashPassword"
import mongoose from "mongoose"
import config from "../../../config"
import UserModel from "@/api/db/models/UserModel"
import jwt from "jsonwebtoken"

const signin = async (req, res) => {
  const { login, password } = req.body

  if (!login || !password) {
    res.status(400)
    res.send({ error: "Missing either password, login, or both " })

    return
  }

  const hashedPassword = hashPassword(password)

  await mongoose.connect(config.db.uri)

  try {
    const result = await UserModel.find({ login, password: hashedPassword })
    await mongoose.disconnect()

    if (result.length == 0) {
      if (config.defaultAdmin.enabled) {
        if (
          login == config.defaultAdmin.name &&
          password == config.defaultAdmin.password
        ) {
          const payload = {
            first: config.defaultAdmin.name,
            isAdmin: true,
          }
          const token = jwt.sign(payload, config.security.jwt.key)

          res.status(200)
          res.redirect(`/setJWT/${token}`)

          return
        }
      }

      res.status(404)
      res.redirect("/invalidCredentials")

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
