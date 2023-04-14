import Head from "next/head"

const Page = (props) => {
  const { title,children } = props
  
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
        <meta content="text/html;charset=UTF-8" />
      </Head>
      <main>
        {children}
      </main>
    </>
  )
}

export default Page