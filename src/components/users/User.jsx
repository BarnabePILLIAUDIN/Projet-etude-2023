const User = (props) => {
  const { first, last, isAdmin, _id } = props.user

  return (
    <div className="mx-auto m-10 p-10 text-center rounded-md border border-gray-300 bg-gradient-to-br from-white to-gray-200 max-w-2xl min-h-[260px] relative overflow-hidden shadow-md">
      <h2 className="block text-gray-700 text-4xl font-bold mt-5 mb-10 text-center">
        {first} {last}
      </h2>
      {isAdmin ? (
        <h3 className="bg-slate-500 text-white py-1 px-2 rounded-md shadow-md mb-9 w-32 mx-auto">
          Admin
        </h3>
      ) : (
        <h3 className="bg-slate-500 text-white py-1 px-2 rounded-md shadow-md mb-9 w-32 mx-auto">
          User
        </h3>
      )}
      <a
        href={`/api/deleteUser/${_id}`}
        className="bg-red-700 hover:bg-red-600 active:bg-red-800 text-white py-2 px-7 rounded mb-5 transition-colors duration-150 "
      >
        Delete
      </a>
    </div>
  )
}

export default User
