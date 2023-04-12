import Page from "@/components/Page"
import UserForm from "@/components/UserForm"

const signin = () => {
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
      <UserForm formData={formData} action={"/api/signin"}></UserForm>
    </Page>
  )
}

export default signin