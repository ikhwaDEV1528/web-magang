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
        <main className="page-login">
          <div>
             <Selamat_datang/>
             <Logo/>
             <Input_Login/>
             <Panel_mode_dev/>
          </div>
        </main>
    )
}


export default Halaman_Login;