import "@/styles/globals.css"
import { Layout, Header } from "@/components"
import { Open_Sans } from "next/font/google"

const openSans = Open_Sans({ subsets: ["latin", "latin-ext"] })

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <div
        className={`bg-light min-h-screen container max-w-sm  ${openSans.className}`}
      >
        <Header />
        <main className="flex flex-col py-6 px-4 gap-5">
          <Component {...pageProps} />
        </main>
      </div>
    </Layout>
  )
}
