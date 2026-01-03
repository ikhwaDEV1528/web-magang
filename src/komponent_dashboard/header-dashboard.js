'use client'

import { Global, Value_Global } from "@/nilai_global/global";
import { useRouter } from "next/navigation";
import { useState,useEffect, useEffectEvent } from "react"
import { useContext } from "react";

export function Header_Dashboard(){

const NAV_ITEMS = ['Dashboard', 'kasus', 'Laporan Kejadian'];
const navigasi = useRouter()
const {isTriger_header_color , set_isTriger_header_color} = useContext(Value_Global)


 useEffect(()=>{
   const salinan = [...isTriger_header_color];
   salinan[0] = salinan[0] = 1
   salinan[1] = salinan[1] = 0
   salinan[2] = salinan[2] = 0
   set_isTriger_header_color(salinan)
 },[]);


//  const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;

// if (isDarkMode) {
//   alert("Dark mode ON");
// } else {
//   alert("Dark mode OFF");
// }


 function navigasi_page(rute){
    const alamat = `/${rute}`
    navigasi.push(alamat)
 }

  return (
    <nav className=" bg-[#0e1b33] text-yellow-300 shadow-md ">
      <button onClick={()=> navigasi.push('/page_profile')} className="absolute mt-1.5 ml-2 text-white text-[30px] hover:scale-110 transition hover:text-gray-300"><i class="bi bi-box-arrow-in-left"></i></button>
      <main className="flex gap-3 h-14 items-center justify-center pl-13 xl:ml-[-200px]">
        {NAV_ITEMS.map((item, index) => (
          <button onClick={()=> navigasi_page(item == 'kasus' ? 'page_kasus':item == 'Dashboard' ? 'page_dashboard':'page_laporan_kejadian')} style={{background:isTriger_header_color[index] == 1 ? 'white':'',color:isTriger_header_color[index] == 1 ? 'red':''}}
            key={index}
            className="
              text-brown font-semibold 
              px-4 py-2 rounded-md 
              transition-all duration-200
              hover:scale-105
              hover:text-yellow-600 
              active:scale-95
              text-[12px]
            "
          >
            {item}
          </button>
        
        ))}
      </main>
  
    </nav>
  );

}