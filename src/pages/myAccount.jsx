import { useEffect, useState } from "react"
import jwt  from "jsonwebtoken"

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
        isLoged ? <>
          <h2>{first} {last} {isAdmin ? "est admin" : "n'est pas admin"}</h2>
          <h3>Son id est { id}</h3>
        </> : <>
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
    </div>
  )
}

export default MyAccount