'use client'

import { useState, useEffect } from "react";


export function Table(){
 
 const trenKasusNasional = [
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
    wilayah: "Bali",
    totalKasus: 760,
    kasusSelesai: 520,
    kasusBelumSelesai: 240,
  },
  {
    id: 7,
    wilayah: "Bali",
    totalKasus: 760,
    kasusSelesai: 520,
    kasusBelumSelesai: 240,
  },
  {
    id: 8,
    wilayah: "Bali",
    totalKasus: 760,
    kasusSelesai: 520,
    kasusBelumSelesai: 240,
  },
  {
    id: 9,
    wilayah: "Bali",
    totalKasus: 760,
    kasusSelesai: 520,
    kasusBelumSelesai: 240,
  },
  {
    id: 10,
    wilayah: "Bali",
    totalKasus: 760,
    kasusSelesai: 520,
    kasusBelumSelesai: 240,
  },
  {
    id: 11,
    wilayah: "Bali",
    totalKasus: 760,
    kasusSelesai: 520,
    kasusBelumSelesai: 240,
  },
  {
    id: 12,
    wilayah: "Bali",
    totalKasus: 760,
    kasusSelesai: 520,
    kasusBelumSelesai: 240,
  },
  {
    id: 13,
    wilayah: "Bali",
    totalKasus: 760,
    kasusSelesai: 520,
    kasusBelumSelesai: 240,
  },
  
];


return(
<main className="mt-9 px-6 ml-[-16px]">
  <input className="border-2 w-60 mt-5 pl-2 rounded-md h-9" placeholder="CARI WILAYAH..."></input>
  <p className="text-red-500 italic text-[12px] ml-1">Cari Berdasrkan wilayah!</p>
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
      {trenKasusNasional.map((item, index) => (
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