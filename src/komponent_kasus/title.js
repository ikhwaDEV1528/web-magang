'use client'

import { Value_Global } from "@/nilai_global/global";
import { useState , useEffect, useContext } from "react";
import ShinyText from "@/React_bits/shiny/ShinyText";

export function Title(){

   const {set_isClose} = useContext(Value_Global)

   function open_panel_tambah_kasus(){
    set_isClose(true)
   }
    return(
        <main className="mt-5 ">
            <ShinyText
            delay={2}
            color="#0f0835ff"
            shineColor="#f8f804ff"
            text={'Data Kasus / Manajemen Perkara'}
            className="text-lapor absolute text-[20px] ml-5 mt-[-5px]"
            />
            <button onClick={()=> open_panel_tambah_kasus()} className="bt-add-kasus text-white p-2 rounded-md mt-10 absolute ml-5 font-bold">+ Tambah Kasus</button>
        </main>
    )
}