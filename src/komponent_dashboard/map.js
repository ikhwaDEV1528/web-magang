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
    <main className="container-map border-1 mt-15 w-full rounded-md ">
      <p className="font-bold ml-2 pt-4">
        Lokasi Polres Bangli 
        <Image alt="logo" className="h-8 w-8 absolute ml-40 mt-[-27px]" src={logo}/>
      </p>

      <div className="map w-full h-[400px] mt-4 border-10 rounded-t-2xl" id="mapid"></div>
    </main>
    </div>
  );
}
