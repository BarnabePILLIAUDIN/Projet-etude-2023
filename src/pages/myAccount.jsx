import { useEffect, useState } from "react"
import jwt  from "jsonwebtoken"

const myAccount = () => {
  const [isLoged,setIsLoged] = useState(false)
  const [first, setFirst] = useState("")
  const [last, setLast] = useState("")
  const [id, setId] = useState("")
  const [isAdmin,setIsAdmin] = useState(false)
  
  
  useEffect(() => {
    const token = localStorage.getItem("easyRoomJWT")
    
    if (token) {
      setIsLoged(true)
      const cleanToken = jwt.decode(token)
      setFirst(cleanToken.first)
      setLast(cleanToken.last)
      setIsAdmin(cleanToken.isAdmin)
      setId(cleanToken.id)
    }
  }, [])
  
  return (
    <div>
      {
        isLoged ? <>
          <h2>{first} {last} {isAdmin ? "est admin" : "n'est pas admin"}</h2>
          <h3>Son id est { id}</h3>
        </> : <>
        </>
      }
    </div>
  )
}

export default myAccount