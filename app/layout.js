import './globals.css'
import { Inter } from 'next/font/google'
import localFont from '@next/font/local'

// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'MEHR',
  description: 'Mehr Portfolio',
}


const poppins = localFont({
  src: [
    {
      path: '../public/fonts/Garet-Book.ttf',
      weight: '500'
    },
    {
      path: '../public/fonts/Garet-Heavy.ttf',
      weight: '700'
    }
  ],
  variable: '--font-poppins'
})

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={poppins.className}>
        {children}
      </body>
    </html>
  )
}
