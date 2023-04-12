import { mongoose } from "mongoose"

const RoomSchema = mongoose.Schema({
  number: { type: Number, required: true, unique: true },
  capacity: { type: Number, required: true },
  //Idea : add an enum
  facilities: { type: [String], required: true },
})

export default RoomSchema
