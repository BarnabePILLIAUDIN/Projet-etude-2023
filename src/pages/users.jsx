import Page from "@/components/Page"
import User from "@/components/users/User"
import axios from "axios"
import { useEffect, useState } from "react"

const Users = () => {
  const [users, setUsers] = useState([])
  
  useEffect(() => {
    axios.get("api/getUsers").then(({ data :{data}}) => {
      setUsers(data)
    })
  },[])


  return (
    <Page>
      <h1>Users</h1>
      <div className="mt-7 flex flex-col gap-5">
        {
          users.map((user,key) => (
            <User user={user} key={key}></User>
          ))
        }
      </div>
    </Page>
  )
}

export default Users