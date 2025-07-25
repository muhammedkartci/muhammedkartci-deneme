import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Seni Çok Seviyorum ',
  description: 'Mamiş <3 İrmik',
  openGraph: {
    title: "Seni Çok Seviyorum",
    description: "Mamiş <3 İrmik",
    url: "https://irmak.muhammedkartci.com",
    siteName: "Mamiş <3 İrmik",
    images: [
      {
        url: "https://irmak.muhammedkartci.com/images/mamis-irmik-(3).jpeg", // ✅ Mutlak URL
        width: 300,
        height: 1200,
      },
    ],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
