import Page from "@/components/Page"
import ListRooms from "@/components/rooms/ListRooms"
import { ClipboardDocumentListIcon } from "@heroicons/react/24/solid"
import Link from "next/link"
import { useRouter } from "next/router"
import React, { useEffect, useState } from "react"
import jwt from "jsonwebtoken"

const ManageRooms = () => {
  const [isLoged, setIsLoged] = useState(false) //eslint-disable-line
  const [isAdmin, setIsAdmin] = useState(false)
  const router = useRouter("/")

  useEffect(() => {
    const token = localStorage.getItem("easyRoomJWT")

    if (token) {
      setIsLoged(true)
      const cleanToken = jwt.decode(token)
      setIsAdmin(cleanToken.isAdmin)

      return
    }

    router.push("/signin")
  }, [])

  return (
    <Page title="EasyRooms: Manage rooms">
      {isAdmin ? (
        <>
          <ListRooms />
          <Link href="/createRoom">
            <ClipboardDocumentListIcon className="h-32 w-32 text-white bg-black rounded-full p-5 right-10 bottom-10 hover:scale-110 hover:drop-shadow-hover duration-700 fixed" />
          </Link>
        </>
      ) : (
        <></>
      )}
    </Page>
  )
}

export default ManageRooms
