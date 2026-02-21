'use client'

import { useState , useEffect } from "react";
import './registrasi.css'
import google from '@/gambar-project/google.png'
import facebook from '@/gambar-project/facebook.png'
import Image from "next/image";
import { useRouter } from "next/navigation";
import axios from "axios";

export function Input_Registrasi(){

    
    const daftar_gambar = [{nama_gambar:google} , {nama_gambar:facebook}];
    const navigasi = useRouter()

    const [username , set_username] = useState('');
    const [email , set_email] = useState('');
    const [password , set_password] = useState('');
    

    function back_to_login(){
       navigasi.push('/page_login')
    }

   
    async function registrasi() {

       try {
         const API = 'https://squarrose-agrostologic-sharell.ngrok-free.dev/server_auth/registrasi';
         const ress = await axios.post(API, {
          username,
          password,
          email
         });

         alert(ress.data.pesan);
         set_username('')
         set_password('')
         set_email('')
         navigasi.push('/page_otp')

       } 
       catch (err) {
         if(err.response.status == 409){
           alert('data ini sudah ada dalam database')
         }
         else{
           alert(err)
        }
      }
   }


  return(
    <div className="flex flex-col gap-4">
      <p className="text-lg font-bold italic text-slate-700">
        Registrasi
      </p>

      <input
        onChange={(e) => set_email(e.target.value)}
        className="p-4 rounded-xl bg-slate-800 text-yellow-300 placeholder-yellow-300"
        placeholder="Masukan Email Anda"
      />

      <input
        value={username}
        onChange={(e) => set_username(e.target.value)}
        className="p-4 rounded-xl bg-slate-800 text-yellow-300 placeholder-yellow-300"
        placeholder="Buat Username"
      />

      <input
        value={password}
        type="password"
        onChange={(e) => set_password(e.target.value)}
        className="p-4 rounded-xl  bg-slate-800 text-yellow-300 placeholder-yellow-300"
        placeholder="Password"
      />

      <button
        onClick={registrasi}
        className="bg-orange-400 hover:bg-yellow-500 transition text-white font-extrabold p-4 rounded-xl font-bold"
      >
        Registrasi
      </button>

      <p className="text-center font-bold text-slate-400">atau</p>

      {/* <div className="flex justify-center gap-6">
        {['facebook', 'google'].map((item, index) => (
          <Image
            key={index}
            alt="provider"
            width={40}
            height={40}
            className="cursor-pointer hover:scale-110 transition"
            src={daftar_gambar[index].nama_gambar}
            onClick={() => Login_pihak_ketiga(item)}
          />
        ))}
      </div> */}

      <p className="text-center text-slate-600">
        Sudah punya akun?
        <button
          onClick={back_to_login}
          className="ml-1 font-bold text-yellow-500 hover:underline"
        >
          Login sekarang!
        </button>
      </p>
   </div>
  )
}


