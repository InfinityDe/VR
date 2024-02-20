"use client"
import { Introduction } from '@/components/Introduction'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'VR',
  description: 'VR',
}


export default function Home() {
  return (
    <main className='bg-black'>
      <Introduction />
    </main>
  )
}
