import Page from "@/components/Page"
import UserForm from "@/components/UserForm"
import { useEffect, useState } from "react"
import jwt from "jsonwebtoken"

const createUser = () => {
    const formData = [
    {
      label: "First name",
      name: "first",
      placeholder :"User's first name",
      type:"text"
    },
    {
      label: "Last name",
      name: "last",
      placeholder: "User's last name",
      type: "text"
    },
    {
      label: "Password",
      name: "password",
      placeholder: "Default password",
      type:"password"
    },
    ]
  
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

export default createUser