import AdminHeader from "@/components/HomePages/AdminHeader"
import Page from "@/components/Page"
import FormRooms from "@/components/rooms/FormRooms"
import { ClipboardDocumentCheckIcon } from "@heroicons/react/24/solid"
import GoToMyAccount from "@/components/HomePages/GoToMyAccount"
import Link from "next/link"

const CreateRoom = () => {
  return (
    <Page title="EasyRoom: Add a new room">
      <AdminHeader link="rooms" />
      <FormRooms />
      <div>
        <Link href="/manageRooms">
          <ClipboardDocumentCheckIcon className="h-32 w-32 text-white bg-black rounded-full p-5 right-10 bottom-10 hover:scale-110 hover:drop-shadow-hover duration-700 fixed" />
        </Link>
      </div>
      <GoToMyAccount />
    </Page>
  )
}

export default CreateRoom
