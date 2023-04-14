import HomeAdmin from "@/components/HomePages/HomeAdmin"
import HomeUser from "@/components/HomePages/HomeUser"
import { UserCircleIcon } from "@heroicons/react/24/solid"
import Page from "@/components/Page"
import { useEffect, useState } from "react"
import jwt from "jsonwebtoken"
import Link from "next/link"
import { useRouter } from "next/router"

export default function Home() {
  const [isLoged, setIsLoged] = useState(false)
  const [id, setId] = useState("")
  const [isAdmin, setIsAdmin] = useState(false)
  const router = useRouter()

    useEffect(() => {
    const token = localStorage.getItem("easyRoomJWT")
    
    if (token) {
      setIsLoged(true)
      const cleanToken = jwt.decode(token)
      setId(cleanToken.id)
      setIsAdmin(cleanToken.isAdmin)

      return
    }
      
    router.push("/signin")
  }, [])
  
  if (!isLoged) {
    return (
      <Page title="EasyRoom: please login">
        <h2>You need to be loged to use EasyRoom!<Link href={"signin"}>Signin</Link></h2>
      </Page>
    )
  }

  return (
    <Page>
      {
        isAdmin
          ? <>
            <HomeAdmin id={id} />
            <div>
              <Link href="/myAccount">
                <UserCircleIcon className="h-32 w-32 text-white bg-black rounded-full p-5 left-10 bottom-10 hover:scale-110 hover:drop-shadow-hover duration-700 fixed" />
              </Link>
            </div>
          </>
          : <>
            <h2 className="text-5xl bg-emerald-500 pb-10 pt-10 text-center text-white">Welcome to EasyRoom!</h2>
            <HomeUser id={id} />
            <div>
              <Link href="/myAccount">
                <UserCircleIcon className="h-32 w-32 text-white bg-black rounded-full p-5 left-10 bottom-10 hover:scale-110 hover:drop-shadow-hover duration-700 fixed" />
              </Link>
            </div>
          </>
      }
    </Page>
  )
}
