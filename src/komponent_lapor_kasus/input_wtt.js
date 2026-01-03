'use client'

import { useState,useEffect } from "react"

export function Input_wtt(){


   const kategoriKejadianPolisi = [
  "Pencurian",
  "Perampokan",
  "Penipuan",
  "Penganiayaan",
  "KDRT",
  "Pembunuhan",
  "Narkotika",
  "Pelanggaran Lalu Lintas",
  "Kecelakaan Lalu Lintas",
  "Perusakan Barang",
  "Penggelapan",
  "Pemerasan",
  "Perdagangan Orang",
  "Kejahatan Siber",
  "Terorisme",
  "Senjata Ilegal",
  "Kerusuhan",
  "Orang Hilang",
  "Lainnya"
];


    return(
        <main className="text-orange-400 flex flex-col gap-3 w-[50vw] ml-[50vw] mt-[-360px] p-6 h-90">
          <p className="font-semibold tracking-wide">Waktu</p>
            <input type="date" className="bg-slate-900 border border-slate-700 text-white px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"/>
            <p className="font-semibold tracking-wide">Tempat Kejadian</p>
            <input type="text" placeholder="Masukan Lokasi" className="bg-slate-900 border border-slate-700 text-white px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"/>
            <p className="font-semibold tracking-wide">Telepon</p>
            <input type="text" placeholder="Nomor telepon..." className="bg-slate-900 border border-slate-700 text-white px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 "/>
        </main>

    )
}