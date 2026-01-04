'use client'

import { useState , useEffect } from "react"
import './dashboard.css'
import CountUp from "@/React_bits/countUp/CountUp"



export function Empat_data(){

  const daftar_array = ['Kasus Baru Hari Ini' , 'Total Kasus Aktif' , 'Kasus Selesai Bulan Ini' ,'Kasus Prioritas']
  const count = [10,100,300,400]
  const text = ['+10% dari kemarin' , 'Pencurian (52%)' , 'terpenuhi 82%' ,'naik signifikan minggu ini']
  return(
      <main className="flex gap-2 overflow-x-auto h-45 p-2 pt-5 pl:ml-20 xl:justify-center md:justify-center lg:justify-center">
        {daftar_array.map((item, index) => (
          <div key={index} className="card-empat rounded-md bg-[#6F4E37] min-w-[160px] h-[140px] flex flex-col justify-between p-2 xl:ml-20\">
            <p className="text-black font-semibold text-sm">{item}</p>
         

          <CountUp
           from={0}
           to={count[index]}
           separator=","
           direction="up"
           duration={1}
           className="count-up-text text-red-500 font-bold text-[30px]"
           />
            <p className="text-black font-medium text-xs text-blue-600">{text[index]}</p>
          </div>
        ))}
      </main>
  )
}