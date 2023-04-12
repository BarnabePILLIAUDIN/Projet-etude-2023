import { useEffect } from "react"

export async function getServerSideProps({ query: { token } }) {
  console.log(token)

  return {
    props: {
      token,
    },
  }
}

const setJWT = (props) => {
  const { token } = props

  useEffect(() => {
    localStorage.setItem("easyRoomJWT",token)},[])
  return <div></div>
}

export default setJWT
