import { useEffect, useState } from "react"
import axios from "axios"
import Room from "./Room"

const ListRooms = () => {
  const [getRooms, setGetRooms] = useState([])

  useEffect(() => {
    axios.get("/api/rooms/getAllRooms").then(async (res) => {
      await setGetRooms(res.data)
    })
  }, [])

  return (
    <div>
      {getRooms.map((room) => (
        <Room
          roomNumber={room.roomNumber}
          capacity={room.capacity}
          facilities={room.facilities}
          id={room._id}
          key={room._id}
        />
      ))}
    </div>
  )
}

export default ListRooms
