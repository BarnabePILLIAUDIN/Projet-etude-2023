import axios from "axios"
import { useRouter } from "next/router"

const ReservedRoomsCard = (props) => {
  const { roomNumber, capacity, facilities, reservedBy } = props
  const router = useRouter()

  const handleFree = () => {
    axios.get(`/api/free/${roomNumber}`).then(() => {
      router.push("/")
    })
  }

  return (
    <div className="mx-auto m-10 p-10 text-center rounded-md border border-gray-300 bg-gradient-to-br from-white to-gray-200 max-w-2xl min-h-[260px] relative overflow-hidden shadow-md">
      <h2 className="block text-gray-700 text-4xl font-bold mt-5 mb-10 text-center">
        Room N° {roomNumber}
      </h2>
      <h3 className="text-lg text-gray-500 pb-3">Capacity : {capacity}</h3>
      {reservedBy ? (
        <h3 className="text-lg text-gray-500 pb-3">{`Reserved by:  ${reservedBy}`}</h3>
      ) : (
        <></>
      )}

      <ul className="flex justify-center gap-2 pb-3">
        {facilities.map((facility) => (
          <li
            key={facility}
            className="bg-purple-500 text-white py-1 px-2 rounded-md shadow-md"
          >
            {facility}
          </li>
        ))}
      </ul>
      <button
        onClick={handleFree}
        className="bg-blue-700 hover:bg-blue-500 active:bg-blue-800 text-white py-2 px-7 rounded mb-5 mt-10 transition-colors duration-150"
      >
        Free
      </button>
    </div>
  )
}

export default ReservedRoomsCard
