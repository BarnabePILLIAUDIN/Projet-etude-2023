import Page from "@/components/Page"
import ListFacility from "@/components/facilities/ListFacility"
import { ClipboardDocumentListIcon } from "@heroicons/react/24/solid"
import Link from "next/link"
import React from "react"

const ManageFacilities = () => {
  return (
    <Page>
      <ListFacility />
      <Link href="/createFacility">
        <ClipboardDocumentListIcon className="h-32 w-32 text-white bg-black rounded-full p-5 right-10 bottom-10 hover:scale-110 hover:drop-shadow-hover duration-700 fixed" />
      </Link>
    </Page>
  )
}

export default ManageFacilities
