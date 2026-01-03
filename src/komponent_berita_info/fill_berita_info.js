'use client'

import { Deskripsi } from "@/komponent_deskripsi/deskripsi"

export function Fill_berita_info() {

  const data_berita = [
    {
      informasi: 'Pengumuman',
      berita: '',
      Deskripsi: 'Pelayanan SIM akan ditutup sementara pada hari libur nasional.',
      tanggal: '21 Desember 2026'
    },
    {
      informasi: '',
      berita: 'Pencurian Kendaraan',
      Deskripsi: 'Telah terjadi pencurian kendaraan bermotor di wilayah pusat kota.',
      tanggal: '20 Desember 2026'
    },
    {
      informasi: 'Himbauan',
      berita: '',
      Deskripsi: 'Masyarakat dihimbau untuk meningkatkan kewaspadaan terhadap penipuan online.',
      tanggal: '19 Desember 2026'
    },
    {
      informasi: '',
      berita: 'Operasi Lalu Lintas',
      Deskripsi: 'Kepolisian menggelar operasi lalu lintas guna menekan angka pelanggaran.',
      tanggal: '18 Desember 2026'
    },
  ]

  return (
    <main className="w-full min-h-screen bg-slate-50 px-4 py-10">

      <div className="max-w-7xl mx-auto grid gap-10 lg:grid-cols-2">

  
        <section>
          <h2 className="text-2xl font-bold text-slate-800 mb-5">
            Informasi Resmi
          </h2>

          <div className="space-y-4">
            {data_berita
              .filter(obj => obj.informasi !== '')
              .map((item, index) => (
                <div
                  key={index}
                  className="bg-white border-l-4 border-yellow-500 rounded-md shadow-sm p-5 hover:shadow-md transition"
                >
                  <div className="flex justify-between items-start">
                    <h3 className="font-semibold text-slate-800">
                      {item.informasi}
                    </h3>
                    <span className="text-xs text-slate-500">
                      {item.tanggal}
                    </span>
                  </div>

                  <p className="mt-2 text-sm text-slate-600">
                    {item.Deskripsi}
                  </p>
                </div>
              ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-800 mb-5">
            Berita Kepolisian
          </h2>

          <div className="space-y-4">
            {data_berita
              .filter(obj => obj.berita !== '')
              .map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-md shadow-sm border border-slate-200 p-5 hover:shadow-md transition"
                >
                  <div className="flex justify-between items-start">
                    <h3 className="font-semibold text-slate-800">
                      {item.berita}
                    </h3>
                    <span className="text-xs text-slate-500">
                      {item.tanggal}
                    </span>
                  </div>

                  <p className="mt-2 text-sm text-slate-600">
                    {item.Deskripsi}
                  </p>

                  <button className="mt-3 text-sm font-semibold text-yellow-600 hover:underline">
                    Baca Selengkapnya →
                  </button>
                </div>
              ))}
          </div>
        </section>

      </div>
    </main>
  )
}
