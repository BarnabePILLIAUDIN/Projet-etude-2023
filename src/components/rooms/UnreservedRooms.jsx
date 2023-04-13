import axios from "axios"
import React, { useEffect, useState } from "react"
import UnreservedRoomsCard from "./UnreservedRoomsCard"

const UnreservedRooms = (props) => {
  const {userId} = props
  const [getRooms, setGetRooms] = useState([])

  useEffect(() => {
    axios.get("/api/rooms/getAllRooms").then(async (res) => {
      await setGetRooms(res.data)
    })
  }, [])

  return (
    <div>
      {getRooms.map((room) =>
        room.isReserved ? (
          <></>
        ) : (
          <UnreservedRoomsCard
            roomNumber={room.roomNumber}
            capacity={room.capacity}
            facilities={room.facilities}
            isReserved={room.isReserved}
            key={room._id}
            userId={userId}  
          />
        )
      )}
    </div>
  )
}

export default UnreservedRooms
