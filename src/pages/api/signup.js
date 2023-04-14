import mongoose from "mongoose"
import config from "../../../config"
import UserModel from "@/api/db/models/UserModel"
import hashPassword from "@/api/utils/hashPassword"

const createUser = async (req, res) => {
  const { first, last, password } = req.body
  const hashedPassword = hashPassword(password)
  const login = `${first}.${last}`
  await mongoose.connect(config.db.uri)

  if (!first || !last || !password) {
    res.status(400)
    res.send({ status: 400, error: "Bad request" })

    return
  }

  try {
    const user = await UserModel({
      first,
      last,
      login,
      password: hashedPassword,
      isAdmin: false,
    })
    await user.save()
  } catch (err) {
    console.error(err) // eslint-disable-line
    res.status(500)
    res.send({
      satus: 500,
      error:
        "Internal error your user have not been created! Your user probably exist already",
    })
    await mongoose.disconnect()

    return
  }

  await mongoose.disconnect()
  res.status(200)
  res.redirect("/users")
}

export default createUser
