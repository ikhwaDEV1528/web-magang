'use client'

import { useState , useContext } from "react";
import './komponent_login.css'
import google from '@/gambar-project/google.png';
import facebook from '@/gambar-project/facebook.png'
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Value_Global } from "@/nilai_global/global";
import axios from "axios";
export function Input_Login(){

    const daftar_gambar = [{nama_gambar:google} , {nama_gambar:facebook}];
    const navigasi = useRouter();

    const [username_login , set_username_login] = useState('ikhwan');
    const [password_login , set_password_password] = useState('')
    const {isTriger_panel_mode_beta , set_isTriger_panel_mode_beta} = useContext(Value_Global) 
    
    function registrasi(){
      navigasi.push('/page_registrasi')
    }
async function login() {
  try {
    const API = 'https://squarrose-agrostologic-sharell.ngrok-free.dev/server_auth/login';
    const ress = await axios.post(API, {
      username: username_login,
      password: password_login
    });
    alert('Login sukses!');
    navigasi.push('/page_profile')
    
  } 
  catch (err) {
  if (err.response) {
    // server membalas dengan status code error
    if (err.response.status === 404) {
      alert('Username/password salah');
    } else {
      alert('Server error: ' + JSON.stringify(err.response.data));
    }
  } else if (err.request) {
    // request terkirim tapi tidak ada respon → biasanya network/CORS error
    alert('Tidak ada respon dari server (network/CORS error)');
    console.log(err.request);
  } else {
    // error lain
    alert('Error: ' + err.message);
  }
}

}


  return(
    <main className="flex  flex-col gap-4">
         <input
          autoComplete="off"
          onChange={(e) => set_username_login(e.target.value)}
          value={username_login}
          className="
          p-4 rounded-xl 
          bg-slate-900 text-yellow-300
          placeholder-yellow-300 
          "
           placeholder="Masukan Username"
        />

        <input
         type="password"
         autoComplete="new-password"
         onChange={(e) => set_password_password(e.target.value)}
         className="
         p-4 rounded-xl
         bg-slate-900 text-yellow-300
         placeholder-yellow-300
         "
         placeholder="Masukan Password"
        />

        <p onClick={()=> navigasi.push('/page_reqreset_pass')} className="text-right text-sm text-yellow-600 cursor-pointer hover:underline">Lupa Password?</p>

        <button
         onClick={login}
         className="
         bg-orange-400 hover:bg-orange-500
         transition text-white p-4 rounded-xl 
         font-extrabold"
        >
        Login
        </button>

        <button
         onClick={registrasi}
         className="
         border-2 border-slate-900 p-4
         rounded-xl font-bold text-slate-700"
        >
        Registrasi
        </button>

        <p className="text-center font-bold italic text-slate-400">atau</p>

        {/* <div className="flex justify-center gap-6">
           {['facebook', 'google'].map((item, index) => (
            <Image
             key={index}
             alt="provider"
             width={30}
             height={30}
             className="cursor-pointer hover:scale-110 transition"
             src={daftar_gambar[index].nama_gambar}
             onClick={() => Login_pihak_ketiga(item)}
           />
           ))}
        </div> */}
    </main>

 )
}
