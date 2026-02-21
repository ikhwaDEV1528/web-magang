'use client'

import { useState , useEffect } from "react"
import Image from "next/image"
import logo from '@/gambar-project/logo.png'


export function Logo(){
    return(
        <div className="flex justify-center mb-4">
      <Image
        alt="logo"
        src={logo}
        width={60}
        height={60}
        className="object-contain"
      />
    </div>
    )
}
