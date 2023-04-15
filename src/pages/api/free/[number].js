import mongoose from "mongoose"
import config from "../../../../config"
import RoomsModel from "@/api/db/models/RoomsModel"

const reserve = async (req, res) => {
  const { number } = req.query

  await mongoose.connect(config.db.uri)

  try {
    const result = await RoomsModel.find({ roomNumber: number })

    if (result.length > 1) {
      res.status(500)
      res.send({ status: 500, error: "Too much rooms with this id!" })
      await mongoose.disconnect()

      return
    }

    if (result.length === 0) {
      res.status(404)
      res.send({ status: 404, error: "Room not found!" })
    }

    const room = result[0]
    room.isReserved = false
    room.reservedBy = "nobody"
    await room.save()
    res.status(200)
    res.redirect("/")
  } catch (error) {
    console.log(error) //eslint-disable-line
    res.status(500)
    res.send({ status: 500, error })
  } finally {
    await mongoose.disconnect()
  }
}

export default reserve
