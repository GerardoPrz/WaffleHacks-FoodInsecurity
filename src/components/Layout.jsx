import Head from "next/head"

const DEFAULT_TITLE = "Nourish"
const DEFAULT_DESCRIPTION =
  "Prevent food insecurity in students by allowing them to easily find food resources on campus and their home."

export function Layout({ title, description, children }) {
  return (
    <>
      <Head>
        <title>{title ?? DEFAULT_TITLE}</title>
        <meta name="description" content={description ?? DEFAULT_DESCRIPTION} />
        <link rel="icon" href="/favicon.png" />
      </Head>
      {children}
    </>
  )
}
