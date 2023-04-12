import axios from "axios"
import { useEffect, useState } from "react"

const Hello = () => {
  const [message, setMessage] = useState("")
  useEffect(() => {
    axios.get("/api/hello").then(({ data: { message } }) => {
      setMessage(message)
    })
  })

  return (
    <div>
      <h1 className="text-red-600 text-center">Hello this is a test component</h1>
      <h2>{message}</h2>
    </div>
  )
}

export default Hello