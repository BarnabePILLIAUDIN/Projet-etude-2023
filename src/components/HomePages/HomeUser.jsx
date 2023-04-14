import UnreservedRooms from "@/components/rooms/UnreservedRooms"
import GoToFreeButton from "./GoToFreeButton"

const HomeUser = (props) => {
  const {id}=props
  
  return (
    <>
      <UnreservedRooms userId={id} />
      <GoToFreeButton />
    </>
    )
}

export default HomeUser
