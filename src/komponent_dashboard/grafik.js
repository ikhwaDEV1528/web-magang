'use client'

import { useState , useEffect } from "react"
import {Line,LineChart,XAxis,YAxis , CartesianGrid, Tooltip,Legend,ResponsiveContainer} from 'recharts'

export function Grafik(){

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
];


    return(
       <main className="bg-white  w-full rounded-md h-100 p-5 space-y-3">
         <h2 className="font-bold text-lg text-gray-800">Tren Kasus Nasional</h2>

         <div className="flex flex-col gap-2 text-sm text-gray-700">
           <div className="flex items-center gap-3">
              <span className="w-3 h-3 bg-green-500 rounded-full"></span>
              <span>Kasus selesai</span>
           </div>

         <div className="flex items-center gap-3">
            <span className="w-3 h-3 bg-red-500 rounded-full"></span>
             <span>Kasus belum selesai</span>
            </div>
         </div>

         <div>
           

            <div className="w-[100vw]  ml-[-8vw] overflow-y-auto py-5 h-[300px]">
  <ResponsiveContainer width="100%" height="100%">
    <LineChart data={trenKasusNasional}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="wilayah" />
      <YAxis />
      <Tooltip />
      <Legend />

      <Line type="monotone" dataKey="totalKasus" stroke="#1313f3ff" name="Total Kasus" />
      <Line type="monotone" dataKey="kasusSelesai" stroke="#066f32ff" name="Kasus Selesai" />
      <Line type="monotone" dataKey="kasusBelumSelesai" stroke="#df2b0fff" name="Kasus Belum Selesai" />
    </LineChart>
  </ResponsiveContainer>
</div>

           
         </div>
       </main>

    )
}

// 'use client'

// import { useEffect, useState } from "react"
// import {
//   Line, LineChart, XAxis, YAxis,
//   CartesianGrid, Tooltip, Legend, ResponsiveContainer
// } from 'recharts'

// export function Grafik() {

//   const [mounted, setMounted] = useState(false)

//   useEffect(() => {
//     setMounted(true)
//   }, [])

//   if (!mounted) return null

//   const trenKasusNasional = [
//     { wilayah: "DKI Jakarta", totalKasus: 1542, kasusSelesai: 987, kasusBelumSelesai: 555 },
//     { wilayah: "Jawa Barat", totalKasus: 2104, kasusSelesai: 1420, kasusBelumSelesai: 684 },
//     { wilayah: "Jawa Tengah", totalKasus: 1899, kasusSelesai: 1104, kasusBelumSelesai: 795 },
//     { wilayah: "Jawa Timur", totalKasus: 2340, kasusSelesai: 1566, kasusBelumSelesai: 774 },
//     { wilayah: "Bali", totalKasus: 760, kasusSelesai: 520, kasusBelumSelesai: 240 },
//   ]

//   return (
//     <main className="bg-white border border-yellow-600 w-full rounded-md p-5 space-y-3">
//       <h2 className="font-bold text-lg text-gray-800">Tren Kasus Nasional</h2>

//       <div className="w-full h-[300px]">
//         <ResponsiveContainer width="100%" height="100%">
//           <LineChart data={trenKasusNasional}>
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="wilayah" />
//             <YAxis />
//             <Tooltip />
//             <Legend />
//             <Line type="monotone" dataKey="totalKasus" stroke="#1313f3" />
//             <Line type="monotone" dataKey="kasusSelesai" stroke="#066f32" />
//             <Line type="monotone" dataKey="kasusBelumSelesai" stroke="#df2b0f" />
//           </LineChart>
//         </ResponsiveContainer>
//       </div>
//     </main>
//   )
// }
