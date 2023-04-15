const FormFacilities = () => {
  return (
    <div className="max-w-md mx-auto my-20 p-10 text-center rounded-md border border-gray-300 bg-gradient-to-br from-white to-gray-200 min-h-[260px] relative overflow-hidden shadow-md">
      <form
        action="/api/facilities/postFacilities"
        method="post"
        className="flex flex-col p-6"
      >
        <label
          htmlFor="name"
          className="block text-gray-700 text-3xl font-bold mt-5 mb-10 text-center"
        >
          Add a New Facility
        </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Facility's name"
          className="border border-gray-300 rounded-md py-2 px-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <div>
          <button
            type="submit"
            className="bg-blue-700 hover:bg-blue-500 active:bg-blue-800 text-white py-2 px-4 rounded mb-5 mt-6 transition-colors duration-150"
          >
            Validate
          </button>
        </div>
      </form>
    </div>
  )
}

export default FormFacilities
