import Head from "next/head"
import { Header } from "./Header"
import { Open_Sans } from "next/font/google"

const openSans = Open_Sans({ subsets: ["latin", "latin-ext"] })

const DEFAULT_TITLE = "Nourish"

export function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>{title ?? DEFAULT_TITLE}</title>
        <meta
          name="description"
          content="Prevent food insecurity in students by allowing them to easily find food resources on campus and their home."
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div
        className={`bg-light min-h-screen container max-w-sm  ${openSans.className}`}
      >
        <Header />
        <main className="flex flex-col py-6 px-4 gap-5">{children}</main>
      </div>
    </>
  )
}
