'use client'

import { useState, useEffect, useContext } from "react";
import './main_dashboard.css'
import { Header_Dashboard } from "@/komponent_dashboard/header-dashboard";
import { Empat_data } from "@/komponent_dashboard/4-data.js";
import dynamic from 'next/dynamic'; // <- import dynamic
import { Value_Global } from "@/nilai_global/global";
import { Table } from "@/komponent_dashboard/table";
import { Map } from "@/komponent_dashboard/map";
import { Deskripsi } from "@/komponent_deskripsi/deskripsi";
import { Button_info_berita } from "@/komponent_dashboard/button_info_berita";

// Dynamic import Grafik, SSR dimatikan supaya aman di server
const Grafik = dynamic(() => import('@/komponent_dashboard/grafik'), { ssr: false });
const Map = dynamic(() => import('@/komponent_dashboard/map'), { ssr: false });

export default function Page_Dashboard(){
  const { isTriger_header_color, set_Istriger_header_color } = useContext(Value_Global);

  return (
    <main className="main-dashboard animasi-dash min-h-screen">
      <Header_Dashboard/>
      <div className="bg-white min-h-screen">
          <Empat_data/>
          <Grafik/> {/* aman, akan dirender hanya di browser */}
          <Button_info_berita/>
          <Table/>
          <Map/>
          <Deskripsi/>
      </div>
    </main>
  )
}
