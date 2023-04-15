import AdminHeader from "@/components/HomePages/AdminHeader"
import Page from "@/components/Page"
import User from "@/components/users/User"
import UserForm from "@/components/users/UserForm"
import axios from "axios"
import jwt from "jsonwebtoken"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

const Users = () => {
  const [users, setUsers] = useState([])
  const [isAdmin, setIsAdmin] = useState(false)
  const router = useRouter()

  const formData = [
    {
      label: "First name",
      name: "first",
      placeholder: "User's first name",
      type: "text",
    },
    {
      label: "Last name",
      name: "last",
      placeholder: "User's last name",
      type: "text",
    },
    {
      label: "Password",
      name: "password",
      placeholder: "Default password",
      type: "password",
    },
  ]

  useEffect(() => {
    axios.get("api/getUsers").then(({ data: { data } }) => {
      setUsers(data)
    })
  }, [])

  useEffect(() => {
    const token = localStorage.getItem("easyRoomJWT")

    if (token) {
      const cleanToken = jwt.decode(token)
      setIsAdmin(cleanToken.isAdmin)

      return
    }

    router.push("/signin")
  }, [])

  return (
    <Page title="EasyRooms: Manage users">
      {isAdmin ? (
        <>
          <AdminHeader link="users" />
          <div className="">
            <div className="">
              <UserForm
                formData={formData}
                action="/api/signup"
                buttonValue="Create user"
              />
            </div>
            <div className="flex flex-col text-white gap-5 ml-5">
              <h2 className="block text-white text-4xl font-bold mt-5 mb-10 text-center">
                Users:
              </h2>
              {users.map((user, key) => (
                <User user={user} key={key} />
              ))}
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </Page>
  )
}

export default Users
