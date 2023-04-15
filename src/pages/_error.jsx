import { useRouter } from "next/router"
import { useEffect } from "react"

const Error = () => {
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      router.push("/")
    }, 500)
  })

  return (
    <>
      <h2>You will be redirected soon</h2>
    </>
  )
}

export default Error
