import React from "react"
import { ClipboardDocumentListIcon } from "@heroicons/react/24/solid"
import Link from "next/link"

const BackHomeButton = () => {
  return (
    <div>
      <Link href="/">
        <ClipboardDocumentListIcon className="h-32 w-32 text-white bg-black rounded-full p-5 right-10 bottom-10 hover:scale-110 hover:drop-shadow-hover duration-700 fixed" />
      </Link>
    </div>
  )
}

export default BackHomeButton