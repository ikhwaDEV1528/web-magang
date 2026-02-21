'use client'

import { useRouter } from "next/navigation"


export function Selamat_datang(){

   const navigasi = useRouter()

    return(
         <div className="text-center mb-6">
      <h1 className="font-bold text-2xl sm:text-3xl text-gray-900 dark:text-white">
        Selamat Datang!
      </h1>

      <p className="font-semibold text-base sm:text-lg italic text-gray-600 dark:text-gray-300">
        Silahkan Login
      </p>

      <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
        Belum punya akun?
        <button
          onClick={() => navigasi.push('/page_registrasi')}
          className="ml-1 text-brown-500 font-bold hover:underline"
        >
          Daftar sekarang!
        </button>
      </p>
    </div>
    )
}
