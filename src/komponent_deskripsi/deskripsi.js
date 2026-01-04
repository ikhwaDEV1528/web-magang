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
   <main className="deskripsi text-white py-10 px-5 sm:px-10 mt-10 min-h-100 flex flex-col justify-between">

 
  <section className="space-y-1">
    <h1 className="text-2xl font-extrabold tracking-wide italic">POLRES BANGLI</h1>
    <p className="text-sm sm:text-base">Email: ikhwanmarditya123@gmail.com</p>
    <p className="text-sm sm:text-base">No: 0888-8888-8888</p>

    <button
      onClick={scrollToTop}
      className="bg-white text-black font-bold rounded-md px-4 py-2 shadow-lg hover:bg-gray-200 transition w-fit mt-6"
    >
      KEMBALI KE ATAS
    </button>
  </section>


  <div className="space-y-2 mt-6">
    <hr className="border-gray-600 border-3" />
    <hr className="border-gray-600 border-3" />
    <hr className="border-gray-600 border-3" />
    <hr className="border-gray-600 border-3" />
    <hr className="border-gray-600 border-3" />
  </div>
</main>

  )
}
