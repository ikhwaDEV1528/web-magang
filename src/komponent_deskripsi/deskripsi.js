'use client'

import './deskripsi.css'
import logo from '@/gambar-project/logo.png'
import Image from 'next/image'
import CircularText from '@/React_bits/cilcular_text/CirculatText.js'

export function Deskripsi() {

  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <main className="bg-[#0A0A0A] text-white py-10 px-5 sm:px-10 mt-10 space-y-6">

      <section className="space-y-1">
        <h1 className="text-2xl font-extrabold tracking-wide">POLRES BANGLI</h1>
        <p className="text-sm sm:text-base">Email: ikhwanmarditya123@gmail.com</p>
        <p className="text-sm sm:text-base">No: 0888-8888-8888</p>

        <button
          onClick={scrollToTop}
          className="bg-white text-black font-bold rounded-md px-4 py-2 sticky bottom-4 shadow-lg hover:bg-gray-200 transition w-fit"
        >
          KEMBALI KE ATAS
        </button>
      </section>

      <hr className="border-gray-600" />
      <hr className="border-gray-600" />
      <hr className="border-gray-600" />
      <hr className="border-gray-600" />
    </main>
  )
}
