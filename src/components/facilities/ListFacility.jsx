import { useEffect, useState } from "react"
import axios from "axios"
import Facility from "./Facility"

const ListFacility = () => {
  const [getFacilities, setGetFacilities] = useState([])

  useEffect(() => {
    axios.get("/api/facilities/getAllFacilities").then(async (res) => {
      await setGetFacilities(res.data)
    })
  }, [])

  return (
    <div>
      {getFacilities.map((facility) => (
        <Facility name={facility.name} id={facility._id} key={facility._id} />
      ))}
    </div>
  )
}

export default ListFacility
