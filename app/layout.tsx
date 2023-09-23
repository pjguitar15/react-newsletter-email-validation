import './globals.css'
import type { Metadata } from 'next'
import { Oswald } from 'next/font/google'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false

const poppins = Oswald({ weight: '400', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Newsletter Email Validation Project',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
