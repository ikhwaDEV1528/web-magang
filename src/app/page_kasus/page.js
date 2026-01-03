'use client'
import { Header_Dashboard } from "@/komponent_dashboard/header-dashboard"
import { Deskripsi } from "@/komponent_deskripsi/deskripsi"
import { CariandFilter } from "@/komponent_kasus/cariANDfilter"
import { Panel_tambah_kasus } from "@/komponent_kasus/panel_tambah_kasus"
import { Tabel_kasus } from "@/komponent_kasus/tabel"
import { Title } from "@/komponent_kasus/title"
import { Value_Global } from "@/nilai_global/global"
import { useState , useEffect, useContext } from "react"


export default function Page_kasus(){

    const {isTriger_header_color , set_isTriger_header_color} = useContext(Value_Global);

    useEffect(()=> {
        const salinan = [...isTriger_header_color];
        salinan[0] = salinan[0] = 0
        salinan[1] = salinan[1] = 1
        salinan[2] = salinan[2] = 0
        
        set_isTriger_header_color(salinan)
    },[]);

    return(
        <main className="animasi-kasus">
            <Header_Dashboard/>
            <Title/>
            <CariandFilter/>
            <Tabel_kasus/>
            <Panel_tambah_kasus/>

            <div className="mt-100 ">
                 <Deskripsi/>
            </div>
          
        </main>
    )
}