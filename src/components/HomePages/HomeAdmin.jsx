import HomeUser from "./HomeUser"
import AdminHeader from "./AdminHeader"

const HomeAdmin = (props) => {
  const { id } = props
  
  return (
    <>
      <AdminHeader link="home" />
      <HomeUser id={id} />
    </>
  )
}

export default HomeAdmin
