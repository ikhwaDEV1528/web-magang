'use client'

import { Daftar_Akun } from "@/komponent_registrasi/daftar_akun";

import { useState , useEffect } from "react";
import './page_registrasi.css'
import { Input_Registrasi } from "@/komponent_registrasi/input_Registrasi";

export default function Page_registrasi(){

    return(
        <main className="min-h-screen flex items-center justify-center bg-slate-100 px-4">
          <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6 sm:p-8">
             <Daftar_Akun />
             <Input_Registrasi />
          </div>
       </main>

    )
}