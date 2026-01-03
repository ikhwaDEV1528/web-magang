'use client'

import { useState, useEffect } from "react"
import SplitText from '@/React_bits/split_text/SplitText'
import { useRouter } from "next/navigation"

export function Setting(){

  const [username, setUsername] = useState('')
  const navigasi = useRouter()

  useEffect(() => {
    const name = localStorage.getItem('username')
    setUsername(name ?? '')
  }, [])

  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  }

  return (
    <main className="w-full flex flex-col items-center gap-3">

      <label className="cursor-pointer text-yellow-400 text-sm font-semibold px-4 py-1.5 rounded-md hover:bg-slate-800 transition">
        Edit Foto
        <input className="hidden" type="file" />
      </label>

      <SplitText
        text={`HALO ${username}`}
        className="text-2xl font-semibold text-center"
        delay={100}
        duration={0.6}
        ease="power3.out"
        splitType="chars"
        from={{ opacity: 0, y: 40 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0.1}
        rootMargin="-100px"
        textAlign="center"
        onLetterAnimationComplete={handleAnimationComplete}
      />

      <p className="text-slate-400 text-sm">username123@gmail.com</p>

      <button
        onClick={() => navigasi.push('/page_dashboard')}
        className="font-bold bg-slate-900 text-yellow-400 w-24 py-2 rounded-md border border-slate-700 hover:bg-slate-800 hover:border-yellow-500 transition"
      >
        Masuk
      </button>

      <button
        onClick={() => navigasi.push('/page_login')}
        className="bg-red-500 text-white w-24 py-2 rounded-md font-bold"
      >
        Logout
      </button>
    </main>
  )
}
