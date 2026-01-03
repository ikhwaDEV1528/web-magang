'use client'

import { useState, useEffect } from "react";


export function Table(){
 
 const [input_cari , set_input_cari] = useState('')

 const [trenKasusNasional , set_trenKasusNasional] =  useState([
  {
    id: 1,
    wilayah: "DKI Jakarta",
    totalKasus: 1542,
    kasusSelesai: 987,
    kasusBelumSelesai: 555,
  },
  {
    id: 2,
    wilayah: "Jawa Barat",
    totalKasus: 2104,
    kasusSelesai: 1420,
    kasusBelumSelesai: 684,
  },
  {
    id: 3,
    wilayah: "Jawa Tengah",
    totalKasus: 1899,
    kasusSelesai: 1104,
    kasusBelumSelesai: 795,
  },
  {
    id: 4,
    wilayah: "Jawa Timur",
    totalKasus: 2340,
    kasusSelesai: 1566,
    kasusBelumSelesai: 774,
  },
  {
    id: 5,
    wilayah: "Bali",
    totalKasus: 760,
    kasusSelesai: 520,
    kasusBelumSelesai: 240,
  },
  {
    id: 6,
    wilayah: "Bali kl",
    totalKasus: 760,
    kasusSelesai: 520,
    kasusBelumSelesai: 240,
  },
  {
    id: 7,
    wilayah: "Bali s",
    totalKasus: 760,
    kasusSelesai: 520,
    kasusBelumSelesai: 240,
  },
  {
    id: 8,
    wilayah: "Balis",
    totalKasus: 760,
    kasusSelesai: 520,
    kasusBelumSelesai: 240,
  },
  {
    id: 9,
    wilayah: "Bali ssd",
    totalKasus: 760,
    kasusSelesai: 520,
    kasusBelumSelesai: 240,
  },
  {
    id: 10,
    wilayah: "Bali asa",
    totalKasus: 760,
    kasusSelesai: 520,
    kasusBelumSelesai: 240,
  },
  {
    id: 11,
    wilayah: "Baliqq q",
    totalKasus: 760,
    kasusSelesai: 520,
    kasusBelumSelesai: 240,
  },
  {
    id: 12,
    wilayah: "Baliq qd",
    totalKasus: 760,
    kasusSelesai: 520,
    kasusBelumSelesai: 240,
  },
  {
    id: 13,
    wilayah: "Baliq sq",
    totalKasus: 760,
    kasusSelesai: 520,
    kasusBelumSelesai: 240,
  },
  
]);



 const [trenKasusNasional1 , set_trenKasusNasional1] =  useState([
  {
    id: 1,
    wilayah: "DKI Jakarta",
    totalKasus: 1542,
    kasusSelesai: 987,
    kasusBelumSelesai: 555,
  },
  {
    id: 2,
    wilayah: "Jawa Barat",
    totalKasus: 2104,
    kasusSelesai: 1420,
    kasusBelumSelesai: 684,
  },
  {
    id: 3,
    wilayah: "Jawa Tengah",
    totalKasus: 1899,
    kasusSelesai: 1104,
    kasusBelumSelesai: 795,
  },
  {
    id: 4,
    wilayah: "Jawa Timur",
    totalKasus: 2340,
    kasusSelesai: 1566,
    kasusBelumSelesai: 774,
  },
  {
    id: 5,
    wilayah: "Bali",
    totalKasus: 760,
    kasusSelesai: 520,
    kasusBelumSelesai: 240,
  },
  {
    id: 6,
    wilayah: "Bali kl",
    totalKasus: 760,
    kasusSelesai: 520,
    kasusBelumSelesai: 240,
  },
  {
    id: 7,
    wilayah: "Bali s",
    totalKasus: 760,
    kasusSelesai: 520,
    kasusBelumSelesai: 240,
  },
  {
    id: 8,
    wilayah: "Balis",
    totalKasus: 760,
    kasusSelesai: 520,
    kasusBelumSelesai: 240,
  },
  {
    id: 9,
    wilayah: "Bali ssd",
    totalKasus: 760,
    kasusSelesai: 520,
    kasusBelumSelesai: 240,
  },
  {
    id: 10,
    wilayah: "Bali asa",
    totalKasus: 760,
    kasusSelesai: 520,
    kasusBelumSelesai: 240,
  },
  {
    id: 11,
    wilayah: "Baliqq q",
    totalKasus: 760,
    kasusSelesai: 520,
    kasusBelumSelesai: 240,
  },
  {
    id: 12,
    wilayah: "Baliq qd",
    totalKasus: 760,
    kasusSelesai: 520,
    kasusBelumSelesai: 240,
  },
  {
    id: 13,
    wilayah: "Baliq sq",
    totalKasus: 760,
    kasusSelesai: 520,
    kasusBelumSelesai: 240,
  },
  
]);



useEffect(()=> {
   const salinan = [...trenKasusNasional1]
   if(input_cari == ""){
     set_trenKasusNasional(salinan)
   }
   else{
   const lower = input_cari.toLowerCase()
   const filter = salinan.filter(item => item.wilayah?.toLowerCase().includes(lower));
   set_trenKasusNasional(filter)
   }
   
},[input_cari])




return(
<main className="mt-9 px-6 ml-[-16px]">
  <div className="flex flex-col w-64 mt-5">
  <input
    type="text"
    onChange={(e) => set_input_cari(e.target.value)}
    placeholder='CARI WILAYAH...'
    className="
      w-full
      h-10
      px-3
      rounded-2xl
      border
      border-slate-700
      bg-slate-900
      text-yellow-400
      placeholder-yellow-300/70
      focus:outline-none
      focus:ring-2
      focus:ring-yellow-400
      transition
    "
  />
  <p className="text-yellow-400/80 italic text-xs mt-1">
    Cari berdasarkan wilayah!
  </p>
</div>

  <div className="container-table mt-5 ml-0.5 h-110 w-[95vw] overflow-auto">
  
  <table className="w-full border-separate border-spacing-0 text-sm ">
    <thead className="sticky top-0 z-10">
      <tr className="bg-gray-800 text-white">
        <th className="border-2 border-gray-600 px-4 py-2 text-left">ID</th>
        <th className="border-2 border-gray-600 px-4 py-2 text-left">Wilayah</th>
        <th className="border-2 border-gray-600 px-4 py-2 text-right">Total Kasus</th>
        <th className="border-2 border-gray-600 px-4 py-2 text-right">Kasus Selesai</th>
        <th className="border-2 border-gray-600 px-4 py-2 text-right">Kasus Belum Selesai</th>
      </tr>
    </thead>

    <tbody>
      {trenKasusNasional.length == 0 ? <p className="
  font-bold
  absolute
  left-1/2
  mt-10
  -translate-x-1/2
  -translate-y-1/2
  text-yellow-400
  text-lg
  bg-slate-900/80
  px-4
  py-2
  rounded-md
  border border-yellow-500
  shadow-lg
  text-center
">
  TIDAK ADA DATA
</p>
 :trenKasusNasional.map((item, index) => (
        <tr
          key={index}
          className={`${
            index % 2 === 0 ? "bg-white" : "bg-gray-100"
          } hover:bg-yellow-100 transition`}
        >
          <td className="border-2 border-gray-400 px-4 py-1 font-medium">
            {item.id}
          </td>
          <td className="border-2 border-gray-400 px-4 py-1">
            {item.wilayah}
          </td>
          <td className="border-2 border-gray-400 px-4 py-1 text-right">
            {item.totalKasus}
          </td>
          <td className="border-2 border-gray-400 px-4 py-1 text-right text-green-600 font-semibold">
            {item.kasusSelesai}
          </td>
          <td className="border-2 border-gray-400 px-4 py-1 text-right text-red-600 font-semibold">
            {item.kasusBelumSelesai}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
  </div>
</main>

    )
}