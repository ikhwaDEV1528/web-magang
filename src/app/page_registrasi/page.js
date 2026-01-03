'use client'

import { Daftar_Akun } from "@/komponent_registrasi/daftar_akun";

import { useState , useEffect } from "react";
import './page_registrasi.css'
import { Input_Registrasi } from "@/komponent_registrasi/input_Registrasi";

export default function Page_registrasi(){

    return(
        <main className="page-registrasi">
         <Daftar_Akun/>
         <Input_Registrasi/>
        </main>
    )
}