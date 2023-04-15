const Room = (props) => {
  const { roomNumber, capacity, facilities, id } = props

  return (
    <div className="mx-auto m-10 p-10 text-center rounded-md border border-gray-300 bg-gradient-to-br from-white to-gray-200 max-w-2xl min-h-[260px] relative overflow-hidden shadow-md">
      <h2 className="block text-gray-700 text-4xl font-bold mt-5 mb-10 text-center">{`Salle N° ${roomNumber}`}</h2>
      <h3 className="text-lg text-gray-500 pb-3">{`Capacité : ${capacity}`}</h3>
      <ul className="flex justify-center gap-2 pb-3">
        {facilities.map((facility) => (
          <li
            key={facility}
            className="bg-purple-500 text-white py-1 px-2 rounded-md shadow-md mb-3"
          >
            {facility}
          </li>
        ))}
      </ul>
      <a
        href={`/api/rooms/deleteRoom/${id}`}
        className="bg-red-700 hover:bg-red-500 active:bg-red-800 text-white py-2 px-7 rounded mb-5 transition-colors duration-150"
      >
        Delete
      </a>
    </div>
  )
}

export default Room
