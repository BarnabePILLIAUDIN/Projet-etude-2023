import mongoose from "mongoose"

const RoomsSchema = mongoose.Schema({
  roomNumber: { type: Number, required: true, unique: true },
  capacity: { type: Number, required: true },
  facilities: { type: [String], required: true },
  reservedBy: { type: String, required: true },
  isReserved: { type: Boolean, required: true, default: false },
})

export default RoomsSchema
