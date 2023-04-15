import { useEffect, useState } from "react"
import { ClipboardDocumentCheckIcon } from "@heroicons/react/24/solid"
import jwt from "jsonwebtoken"
import Link from "next/link"
import { useRouter } from "next/router"
import Page from "@/components/Page"

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
    <Page title="EasyRoom: Manage my account">
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
          <div className="max-w-xl mx-auto my-20 p-10 text-center rounded-md border border-gray-300 bg-gradient-to-br from-white to-gray-200 min-h-[260px] relative overflow-hidden shadow-md">
            <form
              action={`api/resetPassword/${id}`}
              method="post"
              onSubmit={(e) => {
                handleReset(e)
              }}
              className="flex flex-col p-6"
            >
              <label
                htmlFor="newPassword"
                className="block text-gray-700 text-xl font-bold mb-1 text-center"
              >
                New Password
              </label>
              <input
                type="password"
                name="newPassword"
                id="newPassword"
                className="w-5/6 mx-auto border border-gray-300 rounded-md py-2 px-3 mt-5 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <label
                htmlFor="newPassword"
                className="block text-gray-700 text-xl font-bold mb-2 text-center mt-5"
              >
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                className="w-5/6 mx-auto border border-gray-300 rounded-md py-2 mt-4 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <div className="w-2/5 mx-auto bg-blue-700 hover:bg-blue-500 active:bg-blue-800 text-white py-2 px-6 rounded mb-5 mt-10 transition-colors duration-150">
                <input type="submit" value="Change password" />
              </div>
            </form>
          </div>
        </>
      ) : (
        <div className="text-center">
          <button
            onClick={() => {
              setReseting(true)
            }}
            className="bg-black hover:bg-slate-800 text-white py-2 px-8 rounded-sm font-bold"
          >
            Reset password
          </button>
        </div>
      )}
      <div className="text-center mt-8">
        <Link
          href="/logout"
          className="bg-red-600 hover:bg-red-500 active:bg-red-800 text-white py-2 px-8 rounded-sm mx-auto font-bold"
        >
          Logout
        </Link>
      </div>
      <div>
        <Link href="/">
          <ClipboardDocumentCheckIcon className="h-32 w-32 text-white bg-black rounded-full p-5 right-10 bottom-10 hover:scale-110 hover:drop-shadow-hover duration-700 fixed" />
        </Link>
      </div>
    </Page>
  )
}

export default MyAccount
