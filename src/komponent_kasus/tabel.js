'use client'

import { Value_Global } from "@/nilai_global/global";
import { useState , useEffect, useContext } from "react";


export function Tabel_kasus(){

   const {daftar} = useContext(Value_Global)

  return(
        <main className="w-[100vw] overflow-y-auto bg-red-100 ">
           <table className="min-w-sreen border-separate border-spacing-0 text-sm shadow-lg">
          
              <thead className="">
                <tr className="bg-gray-800 text-white ">
                  <th className="border-2 w-[20vw] border-gray-600 px-4 py-2 text-left">No LP</th>
                  <th className="border-2 w-[20vw] border-gray-600 px-4 py-2 text-left">Jenis Kejahatan</th>
                  <th className="border-2 w-[20vw] border-gray-600 px-4 py-2 text-right">Pelapor</th>
                  <th className="border-2 w-[20vw] border-gray-600 px-4 py-2 text-right">Status</th>
                  <th className="border-2 w-[20vw] border-gray-600 px-4 py-2 text-right">Penyidik</th>
                  </tr>
              </thead>

              <tbody>
                {daftar.map((item, index) => (
                  <tr key={index} className={`${index % 2 === 0 ? "bg-white" : "bg-gray-100"} hover:bg-yellow-100 transition`}>
                    <td className="border-2 text-black w-[20vw] border-gray-400 px-4 py-1 font-medium">{item.LP}</td>
                    <td className="border-2 text-black w-[20vw] border-gray-400 px-4 py-1">{item.jenis}</td>
                    <td className="border-2 text-black w-[20vw] border-gray-400 px-4 py-1 text-right">{item.pelapor}</td>
                    <td className="border-2 text-black w-[20vw] border-gray-400 px-4 py-1 text-right  font-semibold">{item.status}</td>
                    <td className="border-2 text-black w-[20vw] border-gray-400 px-4 py-1 text-right  font-semibold">{item.penyidik}</td>
                  </tr>
                ))}
             </tbody>
          </table>
        </main>
   )
}