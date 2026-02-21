'use client'

import { useState , useEffect } from "react"
import { Value_Global } from "@/nilai_global/global";
import { Header_Dashboard } from "@/komponent_dashboard/header-dashboard";
import { useContext } from "react";
import { Input_tkp } from "@/komponent_lapor_kasus/input_tkp";
import { Input_wtt } from "@/komponent_lapor_kasus/input_wtt";
import { Deskripsi_laporan } from "@/komponent_lapor_kasus/deskripsi_laporan";
import { Deskripsi } from "@/komponent_deskripsi/deskripsi";
import ShinyText from '@/React_bits/shiny/ShinyText'
import axios from "axios";
import { useRouter } from "next/navigation";


export default function Laporan_kejadian(){

    const navigasi = useRouter()
    const {isTriger_header_color , set_isTriger_header_color} = useContext(Value_Global)
    const [data , set_data] = useState([])

    useEffect(() => {
  async function get_data() {
    try {
      const API =
        "https://squarrose-agrostologic-sharell.ngrok-free.dev/server_laporan/laporan_get";

      const ress = await axios.get(API, {
        headers: {
          "ngrok-skip-browser-warning": "true",
        },
      });
      
      set_data(ress.data)
    //   alert(JSON.stringify(ress.data));
    //   alert("berhasil");
    } catch (err) {
      console.log(err);
      alert("gagal");
    }
  }

  get_data();
}, []);

    
     useEffect(()=>{
       const salinan = [...isTriger_header_color];
       salinan[0] = salinan[0] = 0
       salinan[1] = salinan[1] = 0
       salinan[2] = salinan[2] = 1
       set_isTriger_header_color(salinan)
     },[]);
    

    return(



     <div className="w-full">

        <p onClick={()=> navigasi.push('/page_dashboard')} className="text-[30px] p-2"><i class="bi bi-arrow-left"></i></p>

      {/* WRAPPER SCROLL */}
      <div className="overflow-x-auto border-1  border shadow-md">

        <table className="min-w-[1400px] w-full text-sm text-left">
          
          {/* HEADER */}
          <thead className="sticky top-0 bg-gray-100 text-gray-700 uppercase text-xs">
            <tr>
              <th className="p-3">ID</th>
              <th className="p-3">Nomor Perkara</th>
              <th className="p-3">Tanggal</th>
              <th className="p-3">Waktu</th>
              <th className="p-3">Pelapor</th>
              <th className="p-3">Gender</th>
              <th className="p-3">Usia</th>
              <th className="p-3">Telepon</th>
              <th className="p-3">Alamat</th>
              <th className="p-3">Jenis Kejadian</th>
              <th className="p-3">Detail</th>
              <th className="p-3">Status</th>
              <th className="p-3">Tindak Lanjut</th>
              <th className="p-3">Bukti</th>
              <th className="p-3">SPKT</th>
            </tr>
          </thead>

          {/* BODY */}
          <tbody>
            {data?.map((laporan, i) => (
              <tr
                key={i}
                className="border-b hover:bg-gray-50 transition"
              >
                <td className="p-3">{laporan.id_laporan}</td>
                <td className="p-3 font-semibold">
                  {laporan.nomor_perkara}
                </td>
                <td className="p-3">{laporan.tanggal_laporan}</td>
                <td className="p-3">{laporan.waktu_laporan}</td>
                <td className="p-3">{laporan.nama_pelapor}</td>
                <td className="p-3">{laporan.jenis_kelamin}</td>
                <td className="p-3">{laporan.usia}</td>
                <td className="p-3">{laporan.nomor_telepon}</td>
                <td className="p-3">{laporan.kota_alamat}</td>
                <td className="p-3">{laporan.jenis_kejadian}</td>

                {/* DETAIL */}
                <td className="p-3 max-w-[250px] truncate">
                  {laporan.detail}
                </td>

                {/* STATUS */}
                <td className="p-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold
                      ${
                        laporan.status === "Selesai"
                          ? "bg-green-100 text-green-700"
                          : laporan.status === "Diproses"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-red-100 text-red-700"
                      }`}
                  >
                    {laporan.status}
                  </span>
                </td>

                <td className="p-3">{laporan.tindak_lanjut}</td>

                {/* BUKTI */}
                <td className="p-3">
                  {laporan.bukti_terlampir ? (
                    <a
                      href={laporan.bukti_terlampir}
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-600 underline"
                    >
                      Lihat
                    </a>
                  ) : (
                    "-"
                  )}
                </td>

                <td className="p-3">{laporan.dilaporkan_di_spkt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* INFO MOBILE */}
      <p className="text-xs text-gray-500 mt-2 md:hidden">
        Geser tabel ke kanan untuk melihat semua kolom →
      </p>
    </div>



        
        // <main className="animasi-laporan">

         
        //     {/* <Header_Dashboard/>
        //     <ShinyText
        //     delay={2}
        //     color="#0f0835ff"
        //     shineColor="#fdfd03ff"
        //     text={'Laporan Kejadian'}
        //     className="text-lapor  text-[20px] ml-6 mt-4"
        //     />
        //     <Input_tkp/>
        //     <Input_wtt/>
        //     <Deskripsi_laporan/>
        //     <Deskripsi/> */}
        // </main>
    )
}