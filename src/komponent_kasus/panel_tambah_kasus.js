'use client'

import { Value_Global } from "@/nilai_global/global";
import { useState,useEffect, useContext } from "react";
import './komponent_kasus.css'






export function Panel_tambah_kasus(){

  const {isClose , set_isClose , set_daftar} = useContext(Value_Global);

  const [input_jenis_kejahatan , set_input_jenis_kejahatan] = useState('');
  const [input_nama_pelapor , set_input_nama_pelapor] = useState('')
  const [input_status_kasus , set_input_status_kasus] = useState('')
  const [input_penyidik , set_input_penyidik] = useState('')
 

  function close_panel_tambah_kasus(){
      set_isClose(false)
  }


  function tambah_kasus(){
     set_daftar(prev => [...prev,{LP:Math.random() * 7 , jenis:input_jenis_kejahatan,pelapor:input_nama_pelapor,status:input_status_kasus,penyidik:input_penyidik}])
     set_input_jenis_kejahatan('')
     set_input_nama_pelapor('')
     set_input_status_kasus('')
     set_input_penyidik('')

  }


  return(
    <div style={{display:isClose ? 'block':'none'}}>
      <main className="border border-gray-300 rounded-md p-6 bg-white shadow-sm w-full max-w-md mx-auto space-y-4">
       <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">Tambah Data Kasus</h2>
       <button className="text-red-600" onClick={()=> close_panel_tambah_kasus()}>X Tutup</button>

       <div className="flex flex-col gap-3">
         <input value={input_jenis_kejahatan} onChange={(e)=> set_input_jenis_kejahatan(e.target.value)} type="text" placeholder="Jenis Kejahatan" className="border border-gray-300 rounded-md p-2 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none"/>
         <input value={input_nama_pelapor} onChange={(e)=> set_input_nama_pelapor(e.target.value)} type="text" placeholder="Nama Pelapor" className="border border-gray-300 rounded-md p-2 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none"/>
         <input value={input_status_kasus} onChange={(e)=> set_input_status_kasus(e.target.value)} type="text" placeholder="Status Kasus" className="border border-gray-300 rounded-md p-2 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none"/>
         <input value={input_penyidik} onChange={(e)=> set_input_penyidik(e.target.value)} type="text" placeholder="Penyidik" className="border border-gray-300 rounded-md p-2 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none"/>
       </div>

       <button onClick={()=> tambah_kasus()} className="bt-add-kasus w-full text-white py-2 rounded-md font-medium hover:bg-blue-800 transition">Tambahkan Kasus</button>
      </main>
   </div>

  )
}