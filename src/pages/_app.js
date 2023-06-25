import "@/styles/globals.css"
import Head from "next/head"

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Nourish</title>
        <meta
          name="description"
          content="Prevent food insecurity in students by allowing them to easily find food resources on campus and their home."
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="bg-gray-800">
        <Component {...pageProps} />
      </div>
    </>
  )
}
