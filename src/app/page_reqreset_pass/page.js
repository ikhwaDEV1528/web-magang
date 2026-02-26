'use client'

import axios from "axios";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

  import { useCallback } from "react";


export default function Req_resetpass(){
    const navigasi = useRouter()
    const [formReset , set_formReset] = useState({
        username:"",
        email:"",
    })



const kirim = useCallback(async () => {
    console.log("Fungsi kirim dipanggil", formReset);
    try {
        const API = 'https://squarrose-agrostologic-sharell.ngrok-free.dev/server_auth/reset_password';
        const ress = await axios.post(API , formReset );
        console.log("Response:", ress.data.pesan);
        alert("Sukses: " + ress.data.pesan);
        navigasi.push('/page_otp_resetpass')
    } catch(err) {
        alert("Terjadi error: " + (err.response?.data?.pesan || err.message));
        console.log(err);
    }
}, [formReset]);



    return(
       <main className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
  <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8">

    <h2 className="text-2xl font-semibold text-gray-800 mb-2">
      Reset Password
    </h2>
    <p className="text-sm text-gray-500 mb-6">
      Masukkan username dan email untuk menerima OTP
    </p>

    <div className="space-y-5">

      {/* Username */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-600">
          Username
        </label>
        <input
          type="text"
          value={formReset.username}
          onChange={(e) =>
            set_formReset(prev => ({ ...prev, username: e.target.value }))
          }
          placeholder="Masukkan username"
          className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
        />
      </div>

      {/* Email */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-600">
          Email
        </label>
        <input
          type="email"
          value={formReset.email}
          onChange={(e) =>
            set_formReset(prev => ({ ...prev, email: e.target.value }))
          }
          placeholder="Masukkan email"
          className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
        />
      </div>

      {/* Button */}
      <button type="button" onClick={kirim}>Kirim OTP</button>


    </div>

  </div>
</main>

    )
}