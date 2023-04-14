import axios from "axios"
import React, { useEffect, useState } from "react"
import UnreservedRoomsCard from "./UnreservedRoomsCard"

const UnreservedRooms = (props) => {
  const {userId} = props
  const [rooms, setRooms] = useState([])
  const [facilities, setFacilities] = useState([])
  const [selectedFacility, setSelectedFacility] = useState("")
  const [availableRooms,setAvailableRooms] = useState([])  


  useEffect(() => {
  axios.get("/api/getRoomsAndFacilities").then(({data:{data:{rooms,facilities}}}) => {
    setRooms(rooms)
    setFacilities(facilities)
  })
  }, [])
  

  useEffect(() => {
    const newArray = rooms.filter(({ facilities }) => facilities.includes(selectedFacility))

    const facilitiesName = facilities.map(({ name }) => name) 
    
    if (facilitiesName.includes(selectedFacility)) {
      setAvailableRooms(newArray)

      return
    }

    setAvailableRooms(rooms)
  },[selectedFacility,rooms,facilities])

  if (rooms.length==0) {
    return (
      <div className="flex items-center h-screen justify-center absolute top-0 left-[50%] translate-x-[-50%]">
        <h2 className="text-slate-500 text-6xl font-semibold text-center">There are no rooms available </h2>
      </div>
    )
  }

  return (
    <div>
      <div>
          <select
            className="mt-8"
            name="facilities"
            id="facilites"
            onChange={(e) => {setSelectedFacility(e.target.value)}}
          >
            <optgroup label="Facilities">
              <option value="default">Select Facility</option>
              {facilities.map((facility,key) => (
                <option value={facility.name} key={`${facility.name}${key}`}>
                  {facility.name}
                </option>
              ))}
            </optgroup>
          </select>
      </div>
      <div>
        {availableRooms.length > 0 ? <></> : <h2 className="text-red-500 text-5xl font-semibold text-center absolute bottom-[50%] translate-y-[50%] left-[50%] translate-x-[-50%]">There are no rooms available with this criteria</h2>}
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
    </div>
  )
}

export default UnreservedRooms
