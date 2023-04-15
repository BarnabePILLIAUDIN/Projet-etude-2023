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
      <div className="max-w-xl mx-auto my-20 p-10 text-center rounded-md border border-gray-300 bg-gradient-to-br from-white to-gray-200 min-h-[260px] relative overflow-hidden shadow-md">
        <form className="flex flex-col p-6">
          <label
            htmlFor="roomNumber"
            className="block text-gray-700 text-[2.75rem] font-bold mt-5 mb-10 text-center"
          >
            Add a New Room
          </label>
          <input
            type="number"
            name="roomNumber"
            id="roomNumber"
            placeholder="Room's number"
            onChange={(e) => setRoomNumber(e.target.value)}
            className="w-5/6 mx-auto border border-gray-300 rounded-md py-2 px-3 mt-4 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <input
            type="number"
            name="capacity"
            id="capacity"
            placeholder="Room's capacity"
            onChange={(e) => setCapacity(e.target.value)}
            className="w-5/6 mx-auto border border-gray-300 rounded-md py-2 px-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <select
            className="w-3/5 mx-auto mt-4 mb-2 border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            name="facilities"
            id="facilites"
            onChange={(e) => {
              selected(e.target.value)
            }}
          >
            <option value="default">Select the facilities</option>
            {getFacilities.map((facility, key) => (
              <option value={facility.name} key={`${facility.name}${key}`}>
                {facility.name}
              </option>
            ))}
          </select>
          <Link href="/createFacility" className="text-blue-500">
            Click here to create a new facility
          </Link>
          <div>
            <button
              type="submit"
              onClick={(e) => handleForm(e)}
              className="bg-blue-700 hover:bg-blue-500 active:bg-blue-800 text-white py-2 px-6 rounded mb-5 mt-10 transition-colors duration-150"
            >
              Validate
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default FormRooms
