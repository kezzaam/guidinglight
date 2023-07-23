import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (

          <>
            <Header />  
            <div>
              {children}
            </div>
            <Footer />
          </>
  )
}
