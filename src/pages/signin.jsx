import Page from "@/components/Page"
import UserForm from "@/components/users/UserForm"

const Signin = () => {
    const formData = [
    {
      label: "Login",
      name: "login",
      placeholder :"Your login",
      type:"text"
    },
    {
      label: "Password",
      name: "password",
      placeholder: "Your password",
      type:"Password"
    },
    ]
  
  return (
    <Page title="EasyRoom: Login">
      <div className="flex items-center justify-center min-h-screen bg-[#0a1d42]">
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 flex flex-col items-center mt-5">
          <h1 className="text-3xl text-gray-800 font-semibold mb-5 mt-5">
            Sign In
          </h1>
          <UserForm formData={formData} action={"/api/signin"} buttonValue="connect"></UserForm>
        </div>
      </div>
    </Page>
  )
}

export default Signin