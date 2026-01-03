'use client'
export const dynamic = 'force-dynamic'


import { Fill_berita_info } from "@/komponent_berita_info/fill_berita_info";
import { Header_berita } from "@/komponent_berita_info/header_berita";
import { useState, useEffect } from "react";

export default function Info_Berita(){
   

    return(
        <main className="bg-diagonal min-h-screen text-white">
            <Header_berita/>
            <Fill_berita_info/>
        </main>
    )
}