import mongoose from "mongoose"

const ReservationSchema = mongoose.Schema({
  roomId: {
    type: mongoose.Types.ObjectId,
    ref: "room",
    required: true,
  },
  userId: {
    type: mongoose.Types.ObjectId,
    ref: "user",
    required: true,
  },
  startsAt: {
    type: Date,
    required: true,
  },
  endsAt: {
    type: Date,
    required: true,
  },
})

export default ReservationSchema
