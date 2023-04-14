import Page from "@/components/Page"
import UserForm from "@/components/users/UserForm"
import { useEffect, useState } from "react"
import jwt from "jsonwebtoken"

const Signup = () => {
  const [isAdmin,setIsAdmin] = useState(false)
  
  
  useEffect(() => {
    const token = localStorage.getItem("easyRoomJWT")
    
    if (token) {
      const cleanToken = jwt.decode(token)

      if (cleanToken.isAdmin) {
        setIsAdmin(cleanToken.isAdmin)
      }
    }
  }, [])

  return (
    <Page title="EasyRoom: Create a new user">
      {isAdmin 
        ? <UserForm formData={formData} action={"/api/signup"}></UserForm>
        : <h2>You need to be admin to add user!</h2>
    }
    </Page>
  )
}

export default Signup