'use client'

import { useRouter } from "next/navigation";
import { useState } from "react";
import axios from "axios";

export default function CaseForm() {
  const navigasi = useRouter();

  const [formData, setFormData] = useState({
    id: "",
    nomorPerkara: "",
    tanggal: "",
    waktu: "",
    pelapor: "",
    gender: "",
    usia: "",
    telepon: "",
    alamat: "",
    jenisKejadian: "",
    detail: "",
    status: "",
    tindakLanjut: "",
    bukti: "",
    spkt: "",
  });

  async function handleSubmit() {
     try{
      const API = 'https://squarrose-agrostologic-sharell.ngrok-free.dev/server_laporan/add_laporan';
      const ress = await axios.post(API, formData);
      alert('sukses')
     }
     catch(err){
       alert( err)
     }
  }


  
  return (
  <main className="min-h-screen bg-gray-100 py-10 px-4">
    <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl p-8">

      {/* Header */}
      <div className="mb-8 border-b pb-6">
        <h2 className="text-3xl font-semibold text-gray-800">
          Laporan SPKT
        </h2>
        <p className="text-gray-500 text-sm mt-1">
          Form input data laporan perkara
        </p>
      </div>

      {/* Form Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* ID */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-600">ID</label>
          <input
            name="id"
            value={formData.id}
            onChange={(e) =>
              setFormData(prev => ({ ...prev, id: e.target.value }))
            }
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
          />
        </div>

        {/* Nomor Perkara */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-600">Nomor Perkara</label>
          <input
            name="nomorPerkara"
            value={formData.nomorPerkara}
            onChange={(e) =>
              setFormData(prev => ({ ...prev, nomorPerkara: e.target.value }))
            }
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
          />
        </div>

        {/* Tanggal */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-600">Tanggal</label>
          <input
            type="date"
            name="tanggal"
            value={formData.tanggal}
            onChange={(e) =>
              setFormData(prev => ({ ...prev, tanggal: e.target.value }))
            }
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
          />
        </div>

        {/* Waktu */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-600">Waktu</label>
          <input
            type="time"
            name="waktu"
            value={formData.waktu}
            onChange={(e) =>
              setFormData(prev => ({ ...prev, waktu: e.target.value }))
            }
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
          />
        </div>

        {/* Pelapor */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-600">Pelapor</label>
          <input
            name="pelapor"
            value={formData.pelapor}
            onChange={(e) =>
              setFormData(prev => ({ ...prev, pelapor: e.target.value }))
            }
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
          />
        </div>

        {/* Gender */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-600">Gender</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={(e) =>
              setFormData(prev => ({ ...prev, gender: e.target.value }))
            }
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition bg-white"
          >
            <option value="">Pilih Gender</option>
            <option value="L">Laki-laki</option>
            <option value="P">Perempuan</option>
          </select>
        </div>

        {/* Usia */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-600">Usia</label>
          <input
            type="number"
            name="usia"
            value={formData.usia}
            onChange={(e) =>
              setFormData(prev => ({ ...prev, usia: e.target.value }))
            }
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
          />
        </div>

        {/* Telepon */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-600">Telepon</label>
          <input
            name="telepon"
            value={formData.telepon}
            onChange={(e) =>
              setFormData(prev => ({ ...prev, telepon: e.target.value }))
            }
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
          />
        </div>

        {/* Alamat full width */}
        <div className="md:col-span-2 space-y-2">
          <label className="text-sm font-medium text-gray-600">Alamat</label>
          <textarea
            name="alamat"
            value={formData.alamat}
            onChange={(e) =>
              setFormData(prev => ({ ...prev, alamat: e.target.value }))
            }
            rows={2}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition resize-none"
          />
        </div>

        {/* Detail full width */}
        <div className="md:col-span-2 space-y-2">
          <label className="text-sm font-medium text-gray-600">Detail Kejadian</label>
          <textarea
            name="detail"
            value={formData.detail}
            onChange={(e) =>
              setFormData(prev => ({ ...prev, detail: e.target.value }))
            }
            rows={3}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition resize-none"
          />
        </div>

      </div>

      {/* Button */}
     <button
  type="button"
  onClick={handleSubmit}
  className="bg-blue-600 hover:bg-blue-700 active:scale-95 transition-all duration-200 text-white font-semibold px-8 py-3 rounded-xl shadow-md"
>
  Submit Laporan
</button>


    </div>
  </main>
);

}
