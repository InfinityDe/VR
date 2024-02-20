"use client"
import { Navbar } from '@/components/Navbar'
import './global.css'
import { Alata } from 'next/font/google'
import { I18nextProvider } from "react-i18next"
import i18next from 'i18next'


import home_es from "../locales/es/Home.json"
import home_en from "../locales/en/Home.json"

import nav_es from "../locales/es/Nav.json"
import nav_en from "../locales/en/Nav.json"

i18next.init({
  interpolation: { escapeValue: false },
  lng: "en",
  resources: {
    es: {
      home: home_es,
      nav: nav_es
    },
    en: {
      home: home_en,
      nav: nav_en
    },
  },
});

const ALT = Alata({ subsets: ['latin'], weight: "400" })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <I18nextProvider i18n = {i18next}>
      <body className={ALT.className}>
        <Navbar />
        {children}
      </body>
      </I18nextProvider>
    </html>
  )
}
