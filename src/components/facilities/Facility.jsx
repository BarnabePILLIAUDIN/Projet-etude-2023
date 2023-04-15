const Facility = (props) => {
  const { name, id } = props

  return (
    <div className="mx-auto m-10 p-10 text-center rounded-md border border-gray-300 bg-gradient-to-br from-white to-gray-200 max-w-2xl min-h-[260px] relative overflow-hidden shadow-md">
      <h2 className="block text-gray-700 text-4xl font-bold mt-5 mb-10 text-center">
        {name}
      </h2>
      <a
        href={`/api/facilities/deleteFacility/${id}`}
        className="bg-red-700 hover:bg-red-500 active:bg-red-800 text-white py-2 px-7 rounded mb-5 mt-10 transition-colors duration-150"
      >
        Delete
      </a>
    </div>
  )
}

export default Facility
