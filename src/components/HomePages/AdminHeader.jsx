import Link from "next/link"

const AdminHeader = (props) => {
  const { link } = props

  return (
    <div className="flex justify-around text-4xl bg-gray-900 pb-10 pt-10 ">
      {link == "home" ? (
        <>
          <Link
            href="/"
            className="text-purple-400 hover:text-purple-800 transition-colors duration-300"
          >
            Reserve
          </Link>
          <Link
            href="/createRoom"
            className="text-gray-200 hover:text-purple-800 transition-colors duration-300"
          >
            Rooms
          </Link>
          <Link
            href="/createFacility"
            className="text-gray-200 hover:text-purple-800 transition-colors duration-300"
          >
            Facilities
          </Link>
          <Link
            href="/users"
            className="text-gray-200 hover:text-purple-800 transition-colors duration-300"
          >
            Users
          </Link>
        </>
      ) : link == "rooms" ? (
        <>
          <Link
            href="/"
            className="text-gray-200 hover:text-purple-800 transition-colors duration-300"
          >
            Reserve
          </Link>
          <Link
            href="/createRoom"
            className="text-purple-400 hover:text-purple-800 transition-colors duration-300"
          >
            Rooms
          </Link>
          <Link
            href="/createFacility"
            className="text-gray-200 hover:text-purple-800 transition-colors duration-300"
          >
            Facilities
          </Link>
          <Link
            href="/users"
            className="text-gray-200 hover:text-purple-800 transition-colors duration-300"
          >
            Users
          </Link>
        </>
      ) : link == "facilities" ? (
        <>
          <Link
            href="/"
            className="text-gray-200 hover:text-purple-800 transition-colors duration-300"
          >
            Reserve
          </Link>
          <Link
            href="/createRoom"
            className="text-gray-200 hover:text-purple-800 transition-colors duration-300"
          >
            Rooms
          </Link>
          <Link
            href="/createFacility"
            className="text-purple-400 hover:text-purple-800 transition-colors duration-300"
          >
            Facilities
          </Link>
          <Link
            href="/users"
            className="text-gray-200 hover:text-purple-800 transition-colors duration-300"
          >
            Users
          </Link>
        </>
      ) : link == "users" ? (
        <>
          <Link
            href="/"
            className="text-gray-200 hover:text-purple-800 transition-colors duration-300"
          >
            Reserve
          </Link>
          <Link
            href="/createRoom"
            className="text-gray-200 hover:text-purple-800 transition-colors duration-300"
          >
            Rooms
          </Link>
          <Link
            href="/createFacility"
            className="text-gray-200 hover:text-purple-800 transition-colors duration-300"
          >
            Facilities
          </Link>
          <Link
            href="/users"
            className="text-purple-400 hover:text-purple-800 transition-colors duration-300"
          >
            Users
          </Link>
        </>
      ) : (
        <></>
      )}
    </div>
  )
}

export default AdminHeader
