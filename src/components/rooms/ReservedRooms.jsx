import axios from "axios"
import { useEffect, useState } from "react"
import ReservedRoomsCard from "./ReservedRoomsCard"

const ReservedRooms = () => {
  const [getRooms, setGetRooms] = useState([])

  useEffect(() => {
    axios.get("/api/rooms/getAllRooms").then((res) => {
      setGetRooms(res.data)
    })
  }, [])

  return (
    <div>
      {getRooms.map((room) =>
        room.isReserved ? (
          <ReservedRoomsCard
            roomNumber={room.roomNumber}
            capacity={room.capacity}
            facilities={room.facilities}
            isReserved={room.isReserved}
            reservedBy={room.reservedBy}
            key={room._id}
          />
        ) : (
          <></>
        )
      )}
    </div>
  )
}

export default ReservedRooms
