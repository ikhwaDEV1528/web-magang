'use client'

import { useState,useEffect } from "react";


export const CariandFilter = () => {
    
    

 return(
    <main className="mt-30 space-y-4 px-4">
         <input 
         type="number"
         placeholder="Cari berdasarkan No LP..."
         className="
          w-full bg-[#0b1527] text-yellow-200 placeholder-yellow-600
          border border-yellow-700 rounded-lg px-4 py-2
          focus:outline-none focus:ring-2 focus:ring-yellow-600
          transition"
         />


         <div className="
          flex gap-3 overflow-x-scroll pb-2
          [&::-webkit-scrollbar]:hidden [&::-webkit-scrollbar-thumb]:bg-yellow-800 scrollbar-hide"
         >
         {['Jenis Kejahatan','Status','Penyidik','Tanggal'].map((item,index)=>(
         <div 
          key={index} 
          className="
          bg-[#0e1b33] border border-yellow-800 rounded-lg
          px-3 py-2 min-w-[170px]
          shadow-[inset_0_0_6px_rgba(0,0,0,0.6)]"
         >
         <select
          className="
           w-full bg-transparent text-yellow-300
           focus:outline-none"
         >
          <option className="bg-[#0b1527]">{item}</option>
          </select>
          </div>
           ))}
       </div>
   </main>

    )
}