import Page from "@/components/Page"
import MyReservedRooms from "@/components/rooms/MyReservedRooms"
import ReservedRooms from "@/components/rooms/ReservedRooms"
import Link from "next/link"
import jwt from "jsonwebtoken"
import { useEffect, useState } from "react"
import BackHomeButton from "@/components/HomePages/BackHomeButton"

const Reserve = () => {
  const [isLoged,setIsLoged] = useState(false)
  const [first, setFirst] = useState("")
  const [last, setLast] = useState("")
  const [isAdmin, setIsAdmin] = useState(false)

   useEffect(() => {
    const token = localStorage.getItem("easyRoomJWT")
    
    if (token) {
      setIsLoged(true)
      const cleanToken = jwt.decode(token)
      setFirst(cleanToken.first)
      setLast(cleanToken.last)
      setIsAdmin(cleanToken.isAdmin)
    }
   }, [])
  
  return (
    <Page title="EasyRoom: reserve a room">
      <h2>Free a room</h2>
      {
        isLoged
          ? <>
            {isAdmin
              ? <>
                <ReservedRooms />
                <BackHomeButton/>
              </>
              : <MyReservedRooms name={`${first}${last}`}
              />}
            </>
          : <>
              <h2>You need to be loged to see your reservations <Link href={"/signin"}>Sign in</Link></h2>
            </>  
      }
   </Page> 
  )
}

export default Reserve
