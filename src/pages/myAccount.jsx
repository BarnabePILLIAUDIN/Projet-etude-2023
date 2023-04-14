import { useEffect, useState } from "react"
import { ClipboardDocumentCheckIcon } from "@heroicons/react/24/solid"
import jwt  from "jsonwebtoken"
import Link from "next/link"

const MyAccount = () => {
  const [isLoged,setIsLoged] = useState(false)
  const [first, setFirst] = useState("")
  const [last, setLast] = useState("")
  const [id, setId] = useState("")
  const [isAdmin, setIsAdmin] = useState(false)
  const [reseting,setReseting] = useState(false) 

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
    }
  }, [])
  
  return (
    <div>
      {
        isLoged ? <div className="m-[100px] p-[20px] text-center rounded-sm bg-blue-100 min-w-[50px] min-h-[50px] relative grid overflow-hidden">
          <h2 className="text-3xl bg-blue-300/25 rounded-sm ml-[500px] mr-[500px] py-4">{`${first} ${last}`}</h2>
          <h3 className="bg-blue-700 rounded-full p-[5px] text-white pl-[10px] pr-[10px] m-auto mt-[10px] py-2">{isAdmin ? "Admin" : "User"}</h3>
        </div> : <>
        </>
      }
      {
        reseting ? <>
          <form action={`api/resetPassword/${id}`} method="post" onSubmit={(e) => { handleReset(e) }} className="flex flex-col">
            <label htmlFor="newPassword">New password</label>
            <input type="password" name="newPassword" id="newPassword" className="border border-black" />
            <label htmlFor="newPassword">ConfirmPassword</label>
            <input type="password" name="confirmPassword" id="confirmPassword" className="border border-black" />
            <input type="submit" value="Change password" />
          </form>
        </>
        : <> <button onClick={() => { setReseting(true) }}>Reset password</button>
      </>
      }
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