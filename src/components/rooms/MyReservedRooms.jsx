import axios from "axios"
import { useEffect, useState } from "react"
import ReservedRoomsCard from "./ReservedRoomsCard"

const MyReservedRooms = (props) => {
  const [rooms,setRooms] = useState([])
  const { name } = props
  console.log(name)
  useEffect(() => {
    axios.post("/api/getMyRooms", { name }).then(({ data: { data } }) => {
      setRooms(data)
      console.log(data) 
    })
  },[])

  return (
    <div>
      {
        rooms.map(({ roomNumber, capacity, facilities }, key) => {
          <ReservedRoomsCard roomNumber={roomNumber} capacity={capacity} facilities={facilities} key={ key} />
        })
      }
    </div>
  )
}

export default MyReservedRooms