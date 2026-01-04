'use client'

import { useState , useEffect } from "react";
import './registrasi.css'
import google from '@/gambar-project/google.png'
import facebook from '@/gambar-project/facebook.png'
import Image from "next/image";
import { useRouter } from "next/navigation";

export function Input_Registrasi(){

    
    const daftar_gambar = [{nama_gambar:google} , {nama_gambar:facebook}];
    const navigasi = useRouter()

    function back_to_login(){
       navigasi.push('/page_login')
    }

    return(
        <main>
            <div className="flex flex-col gap-5 mt-10  xl:ml-240 xl:mt-[70px] sm:ml-[22vw] md:ml-[30vw]">
                <p className="text-[20px] font-bold italic ml-36 xl:ml-[15px] ">Registrasi</p>
               <input className="input p-4 rounded-md ml-4 w-90 " placeholder="Masukan Email Anda"></input>
               <input className="input p-4 rounded-md ml-4 w-90 " placeholder="buat username"></input>
               <input className="input p-4 rounded-md ml-4 w-90 " placeholder="No HP"></input>
               <input className="input p-4 rounded-md ml-4 w-90 " placeholder="password"></input>
               <input className="input p-4 rounded-md ml-4 w-90 " placeholder="konfirmasi password"></input>
               <button className="bt-registrasi p-4 rounded-md text-white font-bold ml-4 w-90 ">Registrasi</button>
               <p className="ml-46 font-bold">atau</p>
               
               <div className="flex justify-center gap-10 xl:ml-[-170px] sm:ml-[-18vw]">
                    {['facebook' , 'google'].map((item,index)=> (
                        <Image 
                        key={index}
                        width={40}
                        height={40}
                        src={daftar_gambar[index].nama_gambar}
                        onClick={()=> Login_pihak_ketiga(item)}
                        />
                    ))}
                </div>
                <p className="flex ml-20">Sudah Punya Akun? <button onClick={()=> back_to_login()} className="sudah pl-2">Login Sekarang!</button></p>
            </div>
        </main>
    )
}


