'use client'

import { LottiePlayer } from "@lottiefiles/lottie-player";
import { useRouter } from "next/navigation";
import { useState,useEffect } from "react";
import Lottie from "react-lottie-player";
import info from '@/gambar-project/info.json'

export function Button_info_berita(){

    const navigasi = useRouter()

    return(
        // <button onClick={()=> navigasi.push('/page_info&berita')} className="flex flex-col bg-slate-900 text-white rounded-md w-52 font-bold border-white border-2 ml-2 mt-4 ">
        //  Informasi & Berita Penting 
        // <p className="text-[11px] italic text-yellow-400">klik untuk lihat berita kasus terkini</p>
        // </button>
        <main onClick={()=> navigasi.push('/page_info&berita')} className="flex flex-col">
         <Lottie
           play 
           animationData={info}
           loop={true}
           className="w-15 absolute ml-75 mt-6"
        />
          <p className="absolute ml-75 mt-20 text-[12px] text-slate-900 italic">Berita & Info</p>
        </main>
        
    )
}