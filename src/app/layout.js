import "@/app/globals.css"
import Footer from "@/components/Footer"
import Menu from "@/components/Menu"



export const metadata = {
  title: 'Dondon',
  description: 'Compre tudo que você precisa de A á Y',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>

          < Menu />         
          {children}
          < Footer/>
          


      </body>
    </html>
  )
}
