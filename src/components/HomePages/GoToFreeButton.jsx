import React from "react"
import { ClipboardDocumentCheckIcon } from "@heroicons/react/24/solid"
import Link from "next/link"

const GoToFreeButton = () => {
  return (
    <div>
      <Link href="/free">
        <ClipboardDocumentCheckIcon className="h-32 w-32 text-white bg-black rounded-full p-5 right-10 bottom-10 hover:scale-110 hover:drop-shadow-hover duration-700 fixed" />
      </Link>
    </div>
  )
}

export default GoToFreeButton
