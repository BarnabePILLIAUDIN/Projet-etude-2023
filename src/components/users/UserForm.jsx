import FormField from "./FormField"

const UserForm = (props) => {
  const { formData, action, buttonValue } = props

  return (
    <form
      action={action}
      method="post"
      className="max-w-md mx-auto my-20 p-10 text-center rounded-md border border-gray-300 bg-gradient-to-br from-white to-gray-200 min-h-[260px] relative overflow-hidden shadow-md"
    >
      {formData.map((user, key) => (
        <FormField user={user} key={key} class="mb-4"></FormField>
      ))}
      <div className="text-center">
        <button
          type="submit"
          className="bg-blue-700 hover:bg-blue-500 active:bg-blue-800 text-white py-2 px-4 rounded mb-5 mt-6 transition-colors duration-150"
        >
          {buttonValue}
        </button>
      </div>
    </form>
  )
}

export default UserForm
