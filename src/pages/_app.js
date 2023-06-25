import "@/styles/globals.css"
import { Layout, Header, MobileNavbar } from "@/components"
import { Open_Sans } from "next/font/google"
import { QueryClient, QueryClientProvider } from "react-query"

const openSans = Open_Sans({ subsets: ["latin", "latin-ext"] })

// Create a client
const queryClient = new QueryClient()

export default function App({ Component, pageProps }) {
  return (
    // Provide the client to your App
    <QueryClientProvider client={queryClient}>
      <Layout>
        <div
          className={`bg-light min-h-screen container w-full max-w-sm flex flex-col ${openSans.className}`}
        >
          <Header />
          <main className="flex flex-col py-6 px-4 gap-5">
            <Component {...pageProps} />
          </main>
          <MobileNavbar />
        </div>
      </Layout>
    </QueryClientProvider>
  )
}
