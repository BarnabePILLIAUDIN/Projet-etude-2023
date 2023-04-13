import { useRouter } from "next/router"
import { useEffect } from "react"

export async function getServerSideProps({ query: { token } }) {
  return {
    props: {
      token,
    },
  }
}

const setJWT = (props) => {
  const { token } = props
  const router = useRouter()

  useEffect(() => {
    localStorage.setItem("easyRoomJWT", token)
    router.push("/myAccount")
  }, [])
  
  return <h2>You will be redirected shortly</h2>
}


export default setJWT
