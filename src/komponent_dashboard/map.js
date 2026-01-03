'use client'
import { useEffect } from "react";
import "leaflet/dist/leaflet.css";
import Image from "next/image";
import logo from '@/gambar-project/navy.png';

export function Map() {
  useEffect(() => {
    const L = require('leaflet');

    // ==== FIX: Hapus map lama kalau sudah ada ====
    const existingMap = document.getElementById('mapid');
    if (existingMap && existingMap._leaflet_id) {
      existingMap._leaflet_id = null;
    }
    // =============================================

    const map = L.map('mapid').setView([-8.4553,115.3566], 19);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png")
      .addTo(map);

    L.marker([-8.4553,115.3566])
      .addTo(map)
      .bindPopup('POLRES BANGLI')
      .openPopup();

    // cleanup saat komponen hilang
    return () => {
      map.remove();
    };
  }, []);

  return (
    <div className="flex xl:justify-center w-full">
    <main className="container-map border-1 mt-10 w-full rounded-md ">
      <p className="font-bold ml-2 relative top-3">
        Lokasi Polres Bangli 
        {/* <Image alt="logo" className="h-8 w-8 absolute ml-40 mt-[-27px]" src={logo}/> */}
      </p>

      <div className="map w-full h-[400px] mt-7 border-10 rounded-t-2xl" id="mapid">
 
 <p className="absolute z-999 bg-black w-5 h-5 items-center  flex justify-center rounded-2xl ml-44 mt-1 "><i class="bi bi-circle-fill fs-3 text-gray-800"></i></p>
 <p className="absolute z-[999] bg-white text-gray-400  mt-85 h-10 w-full text-black flex justify-center items-center gap-9">
  <span><i class="bi bi-square-fill"></i>
</span>
  <span><i class="bi bi-circle-fill fs-3"></i></span>
  <span><i class="bi bi-caret-left-fill text-[20px]"></i></span>
</p>

      </div>
    </main>
    </div>
  );
}
