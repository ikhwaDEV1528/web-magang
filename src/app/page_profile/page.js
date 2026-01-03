'use client'
export const dynamic = 'force-dynamic'


import { Logo_profile } from "@/komponent_profile/logo_profile";
import { Setting } from "@/komponent_profile/setting";
import { useState, useEffect } from "react";

export default function Page_profile(){

    return(
        <main className="">
            <Logo_profile/>
            <Setting/>

            <div className="baner w-full overflow-x-hidden">
                
            </div>
        </main>
    )
}