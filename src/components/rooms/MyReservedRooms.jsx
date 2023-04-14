import axios from "axios"
import { useEffect, useState } from "react"
import ReservedRoomsCard from "./ReservedRoomsCard"
import BackHomeButton from "../HomePages/BackHomeButton"

const MyReservedRooms = (props) => {
  const [rooms,setRooms] = useState([])
  const { name } = props

  useEffect(() => {
    axios.get(`/api/getMyRooms/${name}`).then(({ data: { data } }) => {
      setRooms(data)
    })
  },[])

  useEffect(() => {
  },[rooms])

  return (
    <div>
      {
        rooms.map(({ roomNumber, capacity, facilities }, key) => {
          return(
            <ReservedRoomsCard roomNumber={roomNumber} capacity={capacity} facilities={facilities} key={key} />
          )
        })
      }
      <BackHomeButton/>
    </div>
  )
}

export default MyReservedRooms