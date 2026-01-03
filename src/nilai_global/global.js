'use client'

import { useState } from "react"
import { useContext , createContext} from "react"

export const Value_Global = createContext()


export function Global({children}){
   // buat triger color kompoent header dasboard
    const [isTriger_header_color , set_isTriger_header_color] = useState(new Array(3).fill(0));
  
  // buat triger close panel tambah kasus, #komponent kasus
    const [isClose , set_isClose] = useState(false)

  // buat triger panel_mode_dev
    const [isTriger_panel_mode_beta , set_isTriger_panel_mode_beta] = useState(false)

  // buat data tabel kasus
  const [daftar , set_daftar] =  useState([{LP:'101219391',jenis:'bobol data',pelapor:'ikhwan',status:'pending',penyidik:'ikhwan'}])

    return(
        <Value_Global.Provider value={{
           isTriger_header_color , set_isTriger_header_color,
           isClose, set_isClose,
           isTriger_panel_mode_beta, set_isTriger_panel_mode_beta,
           daftar, set_daftar
        }}>

          {children}
        </Value_Global.Provider>
    )
}