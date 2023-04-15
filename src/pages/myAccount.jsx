import { useEffect, useState } from "react"
import { ClipboardDocumentCheckIcon } from "@heroicons/react/24/solid"
import jwt from "jsonwebtoken"
import Link from "next/link"
import { useRouter } from "next/router"

const MyAccount = () => {
  const [isLoged, setIsLoged] = useState(false)
  const [first, setFirst] = useState("")
  const [last, setLast] = useState("")
  const [id, setId] = useState("")
  const [isAdmin, setIsAdmin] = useState(false)
  const [reseting, setReseting] = useState(false)
  const router = useRouter("/")

  const handleReset = (e) => {
    e.preventDefault()
    const newPasswordInput = document.getElementById("newPassword")
    const confirmPasswordInput = document.getElementById("confirmPassword")

    if (newPasswordInput.value == confirmPasswordInput.value) {
      e.target.submit()

      return
    }

    alert("Passwords are not the same")
  }

  useEffect(() => {
    const token = localStorage.getItem("easyRoomJWT")

    if (token) {
      setIsLoged(true)
      const cleanToken = jwt.decode(token)
      setFirst(cleanToken.first)
      setLast(cleanToken.last)
      setIsAdmin(cleanToken.isAdmin)
      setId(cleanToken.id)

      return
    }

    router.push("/signin")
  }, [])

  return (
    <div>
      {isLoged ? (
        <div className="mx-auto m-10 p-10 text-center rounded-md border border-gray-300 bg-gradient-to-br from-white to-gray-200 max-w-2xl min-h-[260px] relative overflow-hidden shadow-md">
          <h2 className="block text-gray-700 text-4xl font-bold mt-5 mb-10 text-center">{`${first} ${last}`}</h2>
          <h3 className="bg-slate-500 text-white py-1 px-2 rounded-md shadow-md mb-9 w-32 mx-auto">
            {isAdmin ? "Admin" : "User"}
          </h3>
        </div>
      ) : (
        <></>
      )}
      {reseting ? (
        <>
          <form
            action={`api/resetPassword/${id}`}
            method="post"
            onSubmit={(e) => {
              handleReset(e)
            }}
            className="flex flex-col"
          >
            <label htmlFor="newPassword">New password</label>
            <input
              type="password"
              name="newPassword"
              id="newPassword"
              className="border border-black"
            />
            <label htmlFor="newPassword">ConfirmPassword</label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              className="border border-black"
            />
            <input type="submit" value="Change password" />
          </form>
        </>
      ) : (
        <>
          <button
            onClick={() => {
              setReseting(true)
            }}
          >
            Reset password
          </button>
        </>
      )}
      <Link href="/logout">Logout</Link>
      <div>
        <Link href="/">
          <ClipboardDocumentCheckIcon className="h-32 w-32 text-white bg-black rounded-full p-5 right-10 bottom-10 hover:scale-110 hover:drop-shadow-hover duration-700 fixed" />
        </Link>
      </div>
    </div>
  )
}

export default MyAccount
