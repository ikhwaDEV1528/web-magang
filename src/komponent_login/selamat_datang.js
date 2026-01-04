'use client'

import { useRouter } from "next/navigation"


export function Selamat_datang(){

   const navigasi = useRouter()

    return(
        <main>
            <div className="text-center mt-5  sm:ml-[-1vw] sm:mt-[0vh] xl:mt-[30vh] xl:ml-[-15vw] 2xl:ml-[-45vw]">
                <h1 className="font-bold text-[32px] sm:text-[40px]">Selamat Datang!</h1>
                <p className="font-bold text-[20px] sm:text-[25px] italic">Silahkan Login</p>

                <p className="pt-4 flex justify-center sm:ml-[30vh] sm:justify-start xl:pl-[33vw] 2xl:pl-[55vw] md:pl-[15vw]">
                    Belum Punya Akun?
                    <button onClick={()=> navigasi.push('/page_registrasi')} className="daftar  pl-2">Daftar sekarang!</button>
                </p>
            </div>
        </main>
    )
}
