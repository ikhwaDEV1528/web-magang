'use client'

import dynamic from 'next/dynamic'
import dev from '@/gambar-project/DEV.json'
import { useRouter } from "next/navigation"
import { useContext } from "react"
import { Value_Global } from "@/nilai_global/global"

// ✅ LOTTIE DIAMANKAN
const Lottie = dynamic(() => import('react-lottie-player'), {
  ssr: false
})

export function Panel_mode_dev() {
  const navigasi = useRouter()
  const { isTriger_panel_mode_beta, set_isTriger_panel_mode_beta } =
    useContext(Value_Global)

  function ngerti() {
     navigasi.push('/page_profile')
    set_isTriger_panel_mode_beta(false)
  }

  if (!isTriger_panel_mode_beta) return null

  return (
    <main className="
      min-h-screen w-full flex items-center justify-center
      bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800
      absolute top-0 left-0 z-50
    ">
      <div className="
        flex flex-col items-center gap-6
        bg-slate-900/80 backdrop-blur-md
        border border-slate-700 rounded-xl
        px-10 py-8 shadow-2xl
      ">
        <Lottie
          play
          loop={false}
          animationData={dev}
          className="w-60 h-60"
        />

        <p className="text-yellow-400 font-semibold text-lg text-center">
          Website ini masih dalam tahap pengembangan,
          aksi tidak akan tersimpan ke server
        </p>

        <button
          onClick={ngerti}
          className="
            bg-slate-900 text-yellow-400 font-bold
            px-6 py-2 rounded-md border border-slate-700
            hover:border-yellow-500 hover:bg-slate-800 transition
          "
        >
          Y, ngerti
        </button>
      </div>
    </main>
  )
}
