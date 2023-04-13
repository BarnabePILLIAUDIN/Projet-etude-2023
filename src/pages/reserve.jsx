import Page from "@/components/Page"
import UnreservedRooms from "@/components/rooms/UnreservedRooms"
import jwt from "jsonwebtoken"
import Link from "next/link"
import  { useEffect, useState } from "react"

const Reserve = () => { 
  const [isLoged,setIsLoged] = useState(false)
  const [id, setId] = useState("")

  useEffect(() => {
    const token = localStorage.getItem("easyRoomJWT")
    
    if (token) {
      setIsLoged(true)
      const cleanToken = jwt.decode(token)
      setId(cleanToken.id)
    }
  }, [])
  

  return (
    <Page title="EasyRoom: reserve a room">
      {
        isLoged ? <>
             <h2>Reserve a Room</h2>
          <UnreservedRooms userId={ id} />
          </> :
          <>
            <h2>You need to be loged to reserve a room <Link href={"/signin"}>Login</Link></h2>
          </>
      }
   
   </Page> 
  )
}

export default Reserve
