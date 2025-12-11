import Header from '@/ui/header'
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import React from 'react'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'SHEIN - Mode, Style & Tendances',
  description: 'Découvrez les dernières tendances mode avec SHEIN. Des vêtements tendance à prix imbattables.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: Readonly<React.ReactNode>
}>) {
  return (
    <html lang="fr">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  )
}
