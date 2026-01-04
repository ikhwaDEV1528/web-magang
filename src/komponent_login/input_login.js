'use client'

import { useState , useContext } from "react";
import './komponent_login.css'
import google from '@/gambar-project/google.png';
import facebook from '@/gambar-project/facebook.png'
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Value_Global } from "@/nilai_global/global";

export function Input_Login(){

    const daftar_gambar = [{nama_gambar:google} , {nama_gambar:facebook}];
    const navigasi = useRouter();

    const [username_login , set_username_login] = useState('ikhwan');
    const [password_login , set_password_login] = useState('')
    const {isTriger_panel_mode_beta , set_isTriger_panel_mode_beta} = useContext(Value_Global) 
    
    function registrasi(){
      navigasi.push('/page_registrasi')
    }

    function login(){
       if(username_login === "" || password_login === ""){
          alert('tidak boleh kosong!')
       }
       else if(password_login !== 'ikhwan123'){
        alert('PASSWORD:ikhwan123')
       }
       else{
         localStorage.setItem('username',username_login)
         set_isTriger_panel_mode_beta(true)
       }
    }

    return(
        <main>
            <div className="flex flex-col gap-5 w-[85%] mx-auto mt-[5vh] sm:ml-[70vw] sm:mt-[10vh] sm:w-100 xl:ml-260 xl:mt-[-200px]">
                
                <h1 className="font-bold text-[26px] sm:text-[30px] text-center sm:text-left dark:text-white">Masuk</h1>

                <input 
                    onChange={(e)=> set_username_login(e.target.value)} 
                    value={username_login} 
                    className="input-login p-4 rounded-md dark:bg-gray-700 dark:text-white dark:placeholder-gray-300" 
                    placeholder="Masukan Username" 
                />
                <input 
                    onChange={(e)=> set_password_login(e.target.value)} 
                    className="input-login p-4 rounded-md dark:bg-gray-700 dark:text-white dark:placeholder-gray-300" 
                    placeholder="Masukan Password" 
                />

                <p className="text-right sm:ml-70 dark:text-gray-300">Lupa Password?</p>

                <button 
                    onClick={()=> login()} 
                    className="bt-login bg-brown-400 text-white p-4 rounded-md font-bold dark:bg-brown-700"
                >
                    Login
                </button>
                <button 
                    onClick={()=> registrasi()} 
                    className="bt-registrasi-login bg-gray-200 p-4 rounded-md font-bold text-black border-2 dark:bg-gray-800 dark:text-white dark:border-gray-600"
                >
                    Registrasi
                </button>

                <p className="italic text-center sm:ml-48 xl:ml-[-5px] font-bold dark:text-gray-300">atau</p>

                <div className="flex justify-center gap-10">
                    {['facebook' , 'google'].map((item,index)=> (
                        <Image 
                            alt="image_provider"
                            key={index}
                            width={40}
                            height={40}
                            src={daftar_gambar[index].nama_gambar}
                            onClick={()=> Login_pihak_ketiga(item)}
                        />
                    ))}
                </div>
            </div>
        </main>
    )
}
