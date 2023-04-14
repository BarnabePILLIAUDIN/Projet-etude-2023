import Link from "next/link"
import React from "react"

const AdminHeader = (props) => {
  const { link } = props

  return (
    <div className="flex justify-around text-5xl bg-emerald-500 pb-10 pt-10">
      {link == "home" ? (
        <>
          <Link href="/" className="place-items-center text-red-600">
            Reserve
          </Link>
          <Link href="/createRoom">Rooms</Link>
          <Link href="/createFacility">Facilities</Link>
          <Link href="/users">Users</Link>
        </>
      ) : link == "rooms" ? (
        <>
          <Link href="/" className="place-items-center">
            Reserve
          </Link>
          <Link href="/createRoom" className="text-red-600">
            Rooms
          </Link>
          <Link href="/createFacility">Facilities</Link>
          <Link href="/users">Users</Link>
        </>
      ) : link == "facilities" ? (
        <>
          <Link href="/" className="place-items-center">
            Reserve
          </Link>
          <Link href="/createRoom">Rooms</Link>
          <Link href="/createFacility" className="text-red-600">
            Facilities
          </Link>
          <Link href="/users">Users</Link>
        </>
      ) : link == "users" ? (
        <>
          <Link href="/" className="place-items-center">
            Reserve
          </Link>
          <Link href="/createRoom">Rooms</Link>
          <Link href="/createFacility">Facilities</Link>
          <Link href="/users" className="text-red-600">
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
