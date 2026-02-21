'use client'

import { useState , useEffect } from "react"
import { Selamat_datang } from "@/komponent_login/selamat_datang";
import { Logo } from "@/komponent_login/logo";
import { Input_Login } from "@/komponent_login/input_login";
import './page_login.css'
import { Panel_mode_dev } from "@/komponent_alert_panel/panel_mode_beta";
export const dynamic = 'force-dynamic'

function Halaman_Login(){



    return(
      <main className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 lg:px-30">
        <div 
        className="
          w-full max-w-md  rounded-2xl shadow-lg p-6
          lg:min-w-full lg:px-[25vw]
         ">
          <Logo />
          <Selamat_datang />
          <Input_Login />
          <Panel_mode_dev />
       </div>
    </main>

    )
}


export default Halaman_Login;