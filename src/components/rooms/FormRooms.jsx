import axios from "axios"
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

const FormRooms = () => {
  const [getFacilities, setGetFacilities] = useState([])
  const [selectedFacilities, setSelectedFacilities] = useState([])
  const [roomNumber, setRoomNumber] = useState(0)
  const [capacity, setCapacity] = useState(0)

  const router = useRouter()

  const selected = (e) => {
    const newArray = selectedFacilities

    if (e == "default") {
      return
    }

    if (selectedFacilities.includes(e)) {
      if (window.confirm(`Voulez vous supprimer ${e} ?`)) {
        newArray.splice(selectedFacilities.indexOf(e), 1)
        setSelectedFacilities(newArray)
        // eslint-disable-next-line no-console
        console.log(selectedFacilities)
      }

      return
    }

    if (window.confirm(`Voulez vous ajouter ${e} ?`)) {
      newArray.push(e)
      setSelectedFacilities(newArray)
      // eslint-disable-next-line no-console
      console.log(selectedFacilities)
    }
  }

  const handleForm = (e) => {
    e.preventDefault()
    axios
      .post("/api/rooms/postRoom", {
        roomNumber: roomNumber,
        capacity: capacity,
        facilities: selectedFacilities,
      })
      .then(() => {
        router.push("/")
      })
  }

  useEffect(() => {
    axios.get("/api/facilities/getAllFacilities").then((res) => {
      setGetFacilities(res.data)
    })
  }, [])

  return (
    <>
      <div>
        <form className="flex flex-col">
          <label htmlFor="roomNumber">Room number</label>
          <input
            type="number"
            name="roomNumber"
            id="roomNumber"
            onChange={(e) => setRoomNumber(e.target.value)}
            className="border border-black"
          />
          <label htmlFor="capacity">Capacity</label>
          <input
            type="number"
            name="capacity"
            id="capacity"
            className="border border-black"
            onChange={(e) => setCapacity(e.target.value)}
          />
          <select
            className="mt-8"
            name="facilities"
            id="facilites"
            onChange={(e) => {
              selected(e.target.value)
            }}
          >
            <optgroup label="Facilities">
              <option value="default">Select Facility</option>
              {getFacilities.map((facility, key) => (
                <option value={facility.name} key={`${facility.name}${key}`}>
                  {facility.name}
                </option>
              ))}
            </optgroup>
          </select>
          <h2>
            Create one
            <Link href="/createFacility" className="text-blue-500">
              clicker here
            </Link>
          </h2>
          <button
            type="submit"
            onClick={(e) => handleForm(e)}
            className="bg-black text-white py-4 px-2 mt-5"
          >
            add
          </button>
        </form>
      </div>
    </>
  )
}

export default FormRooms
