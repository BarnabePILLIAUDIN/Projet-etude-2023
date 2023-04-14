import AdminHeader from "@/components/HomePages/AdminHeader"
import Page from "@/components/Page"
import User from "@/components/users/User"
import UserForm from "@/components/users/UserForm"
import axios from "axios"
import jwt from "jsonwebtoken"
import { useEffect, useState } from "react"

const Users = () => {
  const [users, setUsers] = useState([])
  const [isAdmin, setIsAdmin] = useState(false)

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
  
  useEffect(() => {
    axios.get("api/getUsers").then(({ data :{data}}) => {
      setUsers(data)
    })
  }, []
  )

   useEffect(() => {     
    const token = localStorage.getItem("easyRoomJWT")
    
    if (token) {
      const cleanToken = jwt.decode(token)
      setIsAdmin(cleanToken.isAdmin)
    }
  }, [])


  return (
    <Page>
      <AdminHeader link="users" />
      {
        isAdmin
        ?
        <>
        <UserForm formData={formData} action="/api/signup" buttonValue="Create user"/>
        <div className="mt-7 flex flex-col gap-5">
        <h2>Users:</h2>
          {
            users.map((user,key) => (
              <User user={user} key={key}></User>
            ))
          }
        </div>
        </>   
        :
        <>
          <h2>You need to be an admin to see this page</h2>  
        </>
          
      }
    </Page>
  )
}

export default Users