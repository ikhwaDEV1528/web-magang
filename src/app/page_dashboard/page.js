'use client'

import { useState, useEffect } from "react";
import './main_dashboard.css'
import { Header_Dashboard } from "@/komponent_dashboard/header-dashboard";
import { Empat_data } from "@/komponent_dashboard/4-data.js";
import { Grafik } from "@/komponent_dashboard/grafik";
import { useContext } from "react";
import { Value_Global } from "@/nilai_global/global";
import { Table } from "@/komponent_dashboard/table";
import { Map } from "@/komponent_dashboard/map";
import { Deskripsi } from "@/komponent_deskripsi/deskripsi";
import { Button_info_berita } from "@/komponent_dashboard/button_info_berita";

export default function Page_Dashboard(){
const {isTriger_header_color , set_Istriger_header_color} = useContext(Value_Global);


    return(
        <main className="main-dashboard  animasi-dash min-h-screen">
          <Header_Dashboard/>
          <div className="bg-white min-h-screen">
              <Empat_data/>
              <Grafik/>
              <Button_info_berita/>
              <Table/>
              <Map/>
              <Deskripsi/>
          </div>
        </main>
    )
}