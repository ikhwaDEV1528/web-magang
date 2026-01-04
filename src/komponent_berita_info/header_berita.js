'use client'

import { useRouter } from "next/navigation"



export function Header_berita(){

    const navigasi = useRouter()

    return(
        <main>
            <button onClick={()=> navigasi.push('/page_dashboard')} className="text-[30px] ml-2 mt-1"><i class="bi bi-box-arrow-left"></i></button>
            <h1 className="font-bold bg-white text-slate-900 pl-2 border-2 border-yellow-400">BERITA & INFROMASI POLRES BANGLI</h1>
        </main>
    )
}