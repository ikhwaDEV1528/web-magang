'use client'

import { useRouter } from "next/navigation";
import { useState } from "react";
import axios from "axios";

export default function CaseForm() {
  const navigasi = useRouter();

  const [formData, setFormData] = useState({
  nomor_perkara: "",
  tanggal_laporan: "",
  waktu_laporan: "",
  nama_pelapor: "",
  jenis_kelamin: "",
  usia: "",
  nomor_telepon: "",
  kota_alamat: "",
  jenis_kejadian: "",
  detail: "",
  status: "",
  tindak_lanjut: "",
  bukti_terlampir: "",
  dilaporkan_di_spkt: "",
  });


  async function handleSubmit() {
     try{
      const API = 'https://squarrose-agrostologic-sharell.ngrok-free.dev/server_laporan/add_laporan';
      const ress = await axios.post(API, formData);
      alert('sukses')
     }
     catch(err){
       alert(JSON.stringify(err.response))
     }
  }


  
  return (
    <main className="min-h-screen bg-gray-100 py-10 px-4">
  <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl p-8">

    <div className="mb-8 border-b pb-6">
      <h2 className="text-3xl font-semibold text-gray-800">
        Laporan SPKT
      </h2>
      <p className="text-gray-500 text-sm mt-1">
        Form input data laporan perkara
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

      {/* Nomor Perkara */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-600">Nomor Perkara</label>
        <input
          name="nomor_perkara"
          value={formData.nomor_perkara}
          onChange={(e) =>
            setFormData(prev => ({ ...prev, nomor_perkara: e.target.value }))
          }
          className="w-full border border-gray-300 rounded-xl px-4 py-3"
        />
      </div>

      {/* Tanggal */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-600">Tanggal</label>
        <input
          type="date"
          name="tanggal_laporan"
          value={formData.tanggal_laporan}
          onChange={(e) =>
            setFormData(prev => ({ ...prev, tanggal_laporan: e.target.value }))
          }
          className="w-full border border-gray-300 rounded-xl px-4 py-3"
        />
      </div>

      {/* Waktu */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-600">Waktu</label>
        <input
          type="time"
          name="waktu_laporan"
          value={formData.waktu_laporan}
          onChange={(e) =>
            setFormData(prev => ({ ...prev, waktu_laporan: e.target.value }))
          }
          className="w-full border border-gray-300 rounded-xl px-4 py-3"
        />
      </div>

      {/* Pelapor */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-600">Pelapor</label>
        <input
          name="nama_pelapor"
          value={formData.nama_pelapor}
          onChange={(e) =>
            setFormData(prev => ({ ...prev, nama_pelapor: e.target.value }))
          }
          className="w-full border border-gray-300 rounded-xl px-4 py-3"
        />
      </div>

      {/* Gender */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-600">Gender</label>
        <select
          name="jenis_kelamin"
          value={formData.jenis_kelamin}
          onChange={(e) =>
            setFormData(prev => ({ ...prev, jenis_kelamin: e.target.value }))
          }
          className="w-full border border-gray-300 rounded-xl px-4 py-3 bg-white"
        >
          <option value="">Pilih Gender</option>
          <option value="Laki-laki">Laki-laki</option>
          <option value="Perempuan">Perempuan</option>
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
          className="w-full border border-gray-300 rounded-xl px-4 py-3"
        />
      </div>

      {/* Telepon */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-600">Telepon</label>
        <input
          name="nomor_telepon"
          value={formData.nomor_telepon}
          onChange={(e) =>
            setFormData(prev => ({ ...prev, nomor_telepon: e.target.value }))
          }
          className="w-full border border-gray-300 rounded-xl px-4 py-3"
        />
      </div>

      {/* Alamat */}
      <div className="md:col-span-2 space-y-2">
        <label className="text-sm font-medium text-gray-600">Alamat</label>
        <textarea
          name="kota_alamat"
          value={formData.kota_alamat}
          onChange={(e) =>
            setFormData(prev => ({ ...prev, kota_alamat: e.target.value }))
          }
          rows={2}
          className="w-full border border-gray-300 rounded-xl px-4 py-3 resize-none"
        />
      </div>

      {/* Detail */}
      <div className="md:col-span-2 space-y-2">
        <label className="text-sm font-medium text-gray-600">Detail Kejadian</label>
        <textarea
          name="detail"
          value={formData.detail}
          onChange={(e) =>
            setFormData(prev => ({ ...prev, detail: e.target.value }))
          }
          rows={3}
          className="w-full border border-gray-300 rounded-xl px-4 py-3 resize-none"
        />
      </div>

      {/* Jenis Kejadian */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-600">Jenis Kejadian</label>
        <input
          name="jenis_kejadian"
          value={formData.jenis_kejadian}
          onChange={(e) =>
            setFormData(prev => ({ ...prev, jenis_kejadian: e.target.value }))
          }
          className="w-full border border-gray-300 rounded-xl px-4 py-3"
        />
      </div>

      {/* Bukti */}
      <input
  type="checkbox"
  checked={formData.dilaporkan_di_spkt}
  onChange={(e) =>
    setFormData(prev => ({
      ...prev,
      dilaporkan_di_spkt: e.target.checked
    }))
  }
/>

      {/* Tindak Lanjut */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-600">Tindak Lanjut</label>
        <input
          name="tindak_lanjut"
          value={formData.tindak_lanjut}
          onChange={(e) =>
            setFormData(prev => ({ ...prev, tindak_lanjut: e.target.value }))
          }
          className="w-full border border-gray-300 rounded-xl px-4 py-3"
        />
      </div>

      {/* Dilaporkan di SPKT */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-600">Dilaporkan di SPKT</label>
        <input
          name="dilaporkan_di_spkt"
          value={formData.dilaporkan_di_spkt}
          onChange={(e) =>
            setFormData(prev => ({ ...prev, dilaporkan_di_spkt: e.target.value }))
          }
          className="w-full border border-gray-300 rounded-xl px-4 py-3"
        />
      </div>

      {/* Status */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-600">Status</label>
        <select
          name="status"
          value={formData.status}
          onChange={(e) =>
            setFormData(prev => ({ ...prev, status: e.target.value }))
          }
          className="w-full border border-gray-300 rounded-xl px-4 py-3 bg-white"
        >
          <option value="">Pilih Status</option>
          <option value="Proses">Proses</option>
          <option value="Selesai">Selesai</option>
        </select>
      </div>

    </div>

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
