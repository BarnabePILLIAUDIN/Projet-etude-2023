import { useRouter } from "next/router"
import { useEffect } from "react"

const Logout = () => {
  const router = useRouter()
  useEffect(() => {
    localStorage.removeItem("easyRoomJWT")
    router.push("/")
  })

  return (
    <div>
      <h2>You will be redirected</h2>
    </div>
    )
}

export default Logout