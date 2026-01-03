'use client'

const { Deskripsi } = require("@/komponent_deskripsi/deskripsi")



export function Deskripsi_laporan(){

    
    return(
       <main className="w-full max-w-xl mx-auto mt-6 p-5 rounded-lg 
                 bg-slate-800 border-2 border-yellow-400 mt-[-50px] border-slate-700 shadow-lg">

  <label className="block mb-2 text-sm font-semibold text-yellow-400">
    Detail Laporan
  </label>

  <textarea
    rows={5}
    placeholder="Masukkan detail laporan..."
    className="
      w-full
      resize-none
      rounded-md
      bg-slate-800
      border border-slate-600
      px-3 py-2
      text-sm text-white
      placeholder:text-slate-400
      focus:outline-none
      focus:ring-2
      focus:ring-yellow-400
      focus:border-yellow-400
      transition
    "
  />

  <div className="flex justify-end mt-4">
    <button
      className="
        bg-yellow-400
        text-slate-900
        font-bold
        px-6 py-2
        rounded-md
        hover:bg-yellow-300
        active:scale-95
        transition
      "
    >
      Kirim
    </button>
  </div>

</main>

    )
}