import Page from "@/components/Page"
import UnreservedRooms from "@/components/rooms/UnreservedRooms"
import jwt from "jsonwebtoken"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

const Reserve = () => {
  const [isLoged, setIsLoged] = useState(false)
  const [id, setId] = useState("")
  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem("easyRoomJWT")

    if (token) {
      setIsLoged(true)
      const cleanToken = jwt.decode(token)
      setId(cleanToken.id)

      return
    }

    router.push("/signin")
  }, [])

  return (
    <Page title="EasyRoom: reserve a room">
      {isLoged ? (
        <>
          <h2>Reserve a Room</h2>
          <UnreservedRooms userId={id} />
        </>
      ) : (
        <></>
      )}
    </Page>
  )
}

export default Reserve
