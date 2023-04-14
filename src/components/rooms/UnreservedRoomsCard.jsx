import axios from "axios"
import { useRouter } from "next/router"

const UnreservedRoomsCard = (props) => {
  const { roomNumber, capacity, facilities, userId } = props
  const router = useRouter()

  const handleReserve = () => {
    axios.post(`/api/reserve/${roomNumber}`, { userId }).then(() => {
      router.push("/free")
    })
  }

  return (
    <div className="m-[100px] p-[20px] text-center rounded-sm bg-blue-100 min-w-[350px] min-h-[260px] relative grid overflow-hidden">
      <h2 className="text-5xl bg-blue-300/25 rounded-sm ml-[500px] mr-[500px]">
        Room N° {roomNumber}
      </h2>
      <h3 className="text-3xl mt-[5px]">Capacity : {capacity}</h3>
      <ul className="flex m-auto gap-3 text-1xl">
        {facilities.map((facility) => (
          <li
            key={facility}
            className="bg-blue-700 rounded-full p-[5px] text-white pl-[10px] pr-[10px]"
          >
            {facility}
          </li>
        ))}
      </ul>
      <button
        onClick={handleReserve}
        className="mt-[10px] text-3xl bg-gray-500/50 ml-[600px] mr-[600px] rounded-md pb-[7px]"
      >
        Reserve
      </button>
    </div>
  )
}

export default UnreservedRoomsCard