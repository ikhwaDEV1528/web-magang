'use client'

import { useState , useEffect } from "react"
import Image from "next/image"
import logo from '@/gambar-project/logo.png'


export function Logo(){
    return(
        <main className="relative">
            <Image
                alt="logo"
                src={logo}
                width={60}
                height={60}
                className="block mx-auto  sm:absolute sm:ml-[45vw] sm:mt-0 xl:mt-[-340px] xl:ml-10"
            />
        </main>
    )
}
