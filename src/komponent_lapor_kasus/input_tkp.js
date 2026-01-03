'use client'

import { useState,useEffect } from "react"

export function Input_tkp(){


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
        <main className="text-orange-400 flex flex-col gap-3 font-bold w-[50vw] p-6 h-90">
           <p className="font-semibold tracking-wide">Tanggal</p>
           <input placeholder="masukan tanggal" type="date" className="bg-slate-900 border border-slate-700 text-white px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 font-bold"/>
           <p className="font-semibold tracking-wide">Kategori Kejadian</p>
           <select className="bg-slate-900 border border-slate-700 text-white px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400">
             {kategoriKejadianPolisi.map((item, index) => (
               <option key={index} className="bg-slate-900 text-white">{item}</option>
             ))}
           </select>

           <p className="font-semibold tracking-wide">Pelapor</p>
           <input type="text" placeholder="Nama pelapor..." className="bg-slate-900 border border-slate-700 text-white px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"/>
       </main>

    )
}