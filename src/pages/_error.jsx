import { useEffect } from "react"

const { useRouter } = require("next/router")

const Error = () => {
  const router = useRouter()

  useEffect(() => {
    router.push("/")
  })

  return (
    <>
      <h2>You will be redirected soon</h2>
    </>
  )
}

export default Error