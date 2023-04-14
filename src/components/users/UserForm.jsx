import FormField from "./FormField"

const UserForm = (props) => {
  const {formData,action,buttonValue}=props

  return (
    <form action={action} method="post">
      {
        formData.map((user,key) => (
          <FormField user={user} key={key}></FormField>
        ))
      }
      <div className="text-center">
        <button type="submit" className="bg-blue-700 hover:bg-blue-500 active:bg-blue-800 text-white font-bold py-2 px-4 rounded mb-5 mt-6 transition-colors duration-150">{ buttonValue}</button>
      </div>
    </form>
  )
}

export default UserForm