import axios from "axios"
import React, { useEffect, useState } from "react"
import UnreservedRoomsCard from "./UnreservedRoomsCard"

const UnreservedRooms = (props) => {
  const {userId} = props
  const [getRooms, setGetRooms] = useState([])
  const availableRooms = getRooms.filter(({isReserved})=>!isReserved)
  useEffect(() => {
    axios.get("/api/rooms/getAllRooms").then((res) => {
      setGetRooms(res.data)
    })
  }, [])

  if (availableRooms.length==0) {
    return (
      <div className="flex items-center h-screen justify-center absolute top-0 left-[50%] translate-x-[-50%]">
        <h2 className="text-slate-500 text-6xl font-semibold text-center">There are no rooms available </h2>
      </div>
    )
  }

  return (
    <div>
      {availableRooms.map((room) =>(
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
