'use client'

import { useRouter } from "next/navigation";
import { useState,useEffect } from "react";

export function Button_info_berita(){

    const navigasi = useRouter()

    return(
        <button onClick={()=> navigasi.push('/page_info&berita')} className="flex flex-col bg-blue-500 text-white rounded-md w-52 font-bold border-white border-2 ml-2 mt-4 shadow-md shadow-slate-900">
         Informasi & Berita Penting 
        <p className="text-[11px] italic text-yellow-400">klik untuk lihat berita kasus terkini</p>
        </button>
    )
}