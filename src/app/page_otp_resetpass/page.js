'use client';

import { useState } from 'react';
import OtpInput from 'react-otp-input';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function OtpVerification() {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const navigasi = useRouter()
  async function verifyOtp() {
    try {
      setLoading(true);
      const api = 'https://squarrose-agrostologic-sharell.ngrok-free.dev/server_auth/otp_reset_pass'
      const res = await axios.post(api,{ email, otp });

      alert(res.data.pesan);
      navigasi.push('/page_ganti_password')
    } catch (err) {
     alert(err.response?.data?.error || err.message || "Terjadi error");
      console.log(err.response);
    }
  }

  return (
    <main className='px-5'>
   <div
  className="
    w-full
    max-w-none
    sm:max-w-lg
    mx-auto
  
    rounded-2xl
   
    pt-40
    space-y-6
  "
>
  <h2 className="text-2xl sm:text-xl font-bold text-center text-slate-800">
    Verifikasi OTP
  </h2>

  {/* Email */}
  <div className=''>
   <p className='italic text-red-500 text-[11px] pl-2'>Masukan Email Lu barusan Ya anjing pas lu registrasi</p>

 
  <input
    type="email"
    placeholder="Masukkan email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    className="
      w-full
      border
      p-4
      rounded-xl
      text-base
      focus:outline-none
      focus:ring-2
      focus:ring-blue-500
    "
  />
 </div>

  {/* OTP */}
  <div className="w-full">
    <OtpInput
      value={otp}
      onChange={setOtp}
      numInputs={6}
      inputType="text"
      shouldAutoFocus
      renderInput={(props) => (
        <input
          {...props}
          className="
            min-w-full
            min- h-19

            sm:h-19
            border
            rounded-xl
            text-center
            text-2xl
            font-semibold
            focus:outline-none
            focus:ring-2
            focus:ring-blue-500
          "
        />
      )}
      containerStyle={{
        display: 'grid',
        gridTemplateColumns: 'repeat(6, minmax(0, 1fr))',
        gap: '12px',
        width: '100%',
      }}
    />
  </div>

  {/* Button */}
  <button
    onClick={verifyOtp}
    disabled={loading || otp.length !== 6}
    className="
      w-full
      bg-blue-700
      text-white
      py-4
      rounded-xl
      text-lg
      font-semibold
      transition
      active:scale-95
      disabled:opacity-50
    "
  >
    {loading ? 'Verifikasi...' : 'Verifikasi OTP'}
  </button>
</div>
</main>
  );
}
