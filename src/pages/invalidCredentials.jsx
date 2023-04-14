import Page from "@/components/Page"

const Handle404 = () => {
  return (
    <Page title="invalid credentials">
      <h1 className="bg-[#0a1d42] text-white text-center font-semibold py-8 text-4xl">OOOOPSS! I THINK WE HAVE A PROBLEM</h1>
      <h2 className="text-center text-[#0a1d42] font-semibold text-4xl mt-8">Your credentials are not valid</h2>
    </Page>
  )
}


export default Handle404