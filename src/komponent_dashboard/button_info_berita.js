'use client'

import { useRouter } from "next/navigation";
import dynamic from 'next/dynamic';
import info from '@/gambar-project/info.json'

const Lottie = dynamic(() => import('react-lottie-player'), { ssr: false })

export function Button_info_berita() {
    const navigasi = useRouter()

    return(
        <main onClick={() => navigasi.push('/page_info&berita')} className="flex flex-col relative cursor-pointer">
            <Lottie
                play 
                animationData={info}
                loop={true}
                className="w-15 absolute ml-75 mt-6"
            />
            <p className="absolute ml-75 mt-20 text-[12px] text-slate-900 italic">Berita & Info</p>
        </main>
    )
}
