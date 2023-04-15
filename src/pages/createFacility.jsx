import AdminHeader from "@/components/HomePages/AdminHeader"
import Page from "@/components/Page"
import FormFacilities from "@/components/facilities/FormFacilities"
import GoToMyAccount from "@/components/HomePages/GoToMyAccount"
import { ClipboardDocumentCheckIcon } from "@heroicons/react/24/solid"
import Link from "next/link"

const createFacility = () => {
  return (
    <Page title="EasyRoom: Add a new room">
      <AdminHeader link="facilities" />
      <FormFacilities />
      <div>
        <Link href="/manageFacilities">
          <ClipboardDocumentCheckIcon className="h-32 w-32 text-white bg-black rounded-full p-5 right-10 bottom-10 hover:scale-110 hover:drop-shadow-hover duration-700 fixed" />
        </Link>
      </div>
      <GoToMyAccount />
    </Page>
  )
}

export default createFacility
