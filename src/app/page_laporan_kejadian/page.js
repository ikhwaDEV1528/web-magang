'use client'

import { useState , useEffect } from "react"
import { Value_Global } from "@/nilai_global/global";
import { Header_Dashboard } from "@/komponent_dashboard/header-dashboard";
import { useContext } from "react";
import { Input_tkp } from "@/komponent_lapor_kasus/input_tkp";
import { Input_wtt } from "@/komponent_lapor_kasus/input_wtt";
import { Deskripsi_laporan } from "@/komponent_lapor_kasus/deskripsi_laporan";
import { Deskripsi } from "@/komponent_deskripsi/deskripsi";
import ShinyText from '@/React_bits/shiny/ShinyText'
export default function Laporan_kejadian(){

    const {isTriger_header_color , set_isTriger_header_color} = useContext(Value_Global)
    
    
     useEffect(()=>{
       const salinan = [...isTriger_header_color];
       salinan[0] = salinan[0] = 0
       salinan[1] = salinan[1] = 0
       salinan[2] = salinan[2] = 1
       set_isTriger_header_color(salinan)
     },[]);
    

    return(
        <main className="animasi-laporan">
            <Header_Dashboard/>
            <ShinyText
            delay={2}
            color="#0f0835ff"
            shineColor="#fdfd03ff"
            text={'Laporan Kejadian'}
            className="text-lapor  text-[20px] ml-6 mt-4"
            />
            <Input_tkp/>
            <Input_wtt/>
            <Deskripsi_laporan/>
            <Deskripsi/>
        </main>
    )
}