import { useEffect } from "react"

const logout = () => {
  useEffect(() => {
    localStorage.removeItem("easyRoomJWT")
  })

  return (
    <div>
      
    </div>
  )
}

export default logout