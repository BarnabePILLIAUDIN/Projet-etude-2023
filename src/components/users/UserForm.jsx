import FormField from "./FormField"

const UserForm = (props) => {
  const {formData,action}=props

  return (
    <form action={action} method="post">
      {
        formData.map((user,key) => (
          <FormField user={user} key={key}></FormField>
        ))
      }
      <button type="submit">Add user</button>
    </form>
  )
}

export default UserForm