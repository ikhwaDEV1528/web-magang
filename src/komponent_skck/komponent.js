'use client'
import axios from "axios"
import { useRouter } from "next/navigation"
import { useState } from "react"

export function Komponents_skck() {
  const navigasi = useRouter()
  const [triger, set_triger] = useState(false)

  const [formData, setFormData] = useState({
    namaLengkap: "",
    nik: "",
    agama: "",
    tempatLahir: "",
    tanggalLahir: "",
    pekerjaan: "",
    statusPerkawinan: "",
    kewarganegaraan: "",
    nomorHp: "",
    email: "",
    kota: "",
    kecamatan: "",
    kelurahan: "",
    alamatLengkap: "",
    tujuanPembuatan: "",
    instansiTujuan: "",
    ktp: null,
    kk: null,
    pasFoto: null,
    akte: null,
    persetujuan: false,
  })

  // Fungsi upload file ke Cloudinary
  const uploadFile = async (file) => {
    if (!file) return null
    const form = new FormData()
    form.append('file', file)
    form.append('upload_preset', 'skripsi_upload')
    form.append('public_id', `${Date.now()}-${Math.random()}`)
    try {
      set_triger(true)
      const res = await axios.post(
        'https://api.cloudinary.com/v1_1/dkwxyz4xx/image/upload',
        form,
        { headers: { 'Content-Type': 'multipart/form-data' } }
      )
      set_triger(false)
      return res.data.secure_url
    } catch (error) {
      alert('Upload gagal: ' + file.name)
      set_triger(false)
      return null
    }
  }

  const handleSubmit = async (e) => {
  e.preventDefault()

  // validasi awal form
  if (Object.values(formData).some(value => value === "" || value === null)) {
    return alert('Lengkapi semua data dan file!')
  }
  if (!formData.persetujuan) {
    return alert('Anda harus menyatakan persetujuan!')
  }

  try {
    // 1️⃣ Upload semua file ke Cloudinary
    const fileFields = ['ktp','kk','pasFoto','akte']
    const uploadPromises = fileFields.map(field => uploadFile(formData[field]))
    const urls = await Promise.all(uploadPromises)

    // 2️⃣ Update formData dengan URL
    const dataToSend = {
      ...formData,
      ktp: urls[0],
      kk: urls[1],
      pasFoto: urls[2],
      akte: urls[3]
    }

    // 3️⃣ Kirim ke backend
    const API = 'https://squarrose-agrostologic-sharell.ngrok-free.dev/skck/end_skck'
    await axios.post(API, dataToSend)

    alert('Form berhasil dikirim!')

    // Reset form
    setFormData({
      namaLengkap: "",
      nik: "",
      agama: "",
      tempatLahir: "",
      tanggalLahir: "",
      pekerjaan: "",
      statusPerkawinan: "",
      kewarganegaraan: "",
      nomorHp: "",
      email: "",
      kota: "",
      kecamatan: "",
      kelurahan: "",
      alamatLengkap: "",
      tujuanPembuatan: "",
      instansiTujuan: "",
      ktp: null,
      kk: null,
      pasFoto: null,
      akte: null,
      persetujuan: false,
    })
  } catch (err) {
    console.error('Gagal kirim data ke backend', err)
    alert('Gagal kirim data: ' + (err.response?.data?.message || err.message))
  }
}


  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <p onClick={() => navigasi.push('/page_dashboard')} className="text-[30px] p-2">
        <i className="bi bi-arrow-left"></i>
      </p>

      <form onSubmit={handleSubmit} className="max-w-6xl mx-auto bg-white shadow-lg rounded-xl p-8">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Pendaftaran SKCK Online</h1>
          <p className="text-sm text-gray-500">Isi data dengan benar sesuai identitas resmi</p>
        </div>

        {/* DATA PRIBADI */}
        <div className="border rounded-lg p-6 mb-6">
          <h2 className="font-semibold text-gray-700 mb-4">Data Pribadi Pemohon</h2>
          <div className="grid md:grid-cols-3 gap-4">

            <input placeholder="namaLengkap" className="border-1 px-2 p-2"
              value={formData.namaLengkap} onChange={e => setFormData(prev => ({ ...prev, namaLengkap: e.target.value }))} />

            <input placeholder="nik" className="border-1 px-2 p-2"
              value={formData.nik} onChange={e => setFormData(prev => ({ ...prev, nik: e.target.value }))} />

            <input placeholder="agama" className="border-1 px-2 p-2"
              value={formData.agama} onChange={e => setFormData(prev => ({ ...prev, agama: e.target.value }))} />

            <input placeholder="tempatLahir" className="border-1 px-2 p-2"
              value={formData.tempatLahir} onChange={e => setFormData(prev => ({ ...prev, tempatLahir: e.target.value }))} />

            <input type="date" className="border-1 px-2 p-2"
              value={formData.tanggalLahir} onChange={e => setFormData(prev => ({ ...prev, tanggalLahir: e.target.value }))} />

            <input placeholder="pekerjaan" className="border-1 px-2 p-2"
              value={formData.pekerjaan} onChange={e => setFormData(prev => ({ ...prev, pekerjaan: e.target.value }))} />

            <input placeholder="statusPerkawinan" className="border-1 px-2 p-2"
              value={formData.statusPerkawinan} onChange={e => setFormData(prev => ({ ...prev, statusPerkawinan: e.target.value }))} />

            <input placeholder="kewarganegaraan" className="border-1 px-2 p-2"
              value={formData.kewarganegaraan} onChange={e => setFormData(prev => ({ ...prev, kewarganegaraan: e.target.value }))} />

            <input type="tel" placeholder="nomorHp" className="border-1 px-2 p-2"
              value={formData.nomorHp} onChange={e => setFormData(prev => ({ ...prev, nomorHp: e.target.value }))} />

            <input type="text" placeholder="email" className="border-1 px-2 p-2"
              value={formData.email} onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))} />

            <input placeholder="kota" className="border-1 px-2 p-2"
              value={formData.kota} onChange={e => setFormData(prev => ({ ...prev, kota: e.target.value }))} />

            <input placeholder="kecamatan" className="border-1 px-2 p-2"
              value={formData.kecamatan} onChange={e => setFormData(prev => ({ ...prev, kecamatan: e.target.value }))} />

            <input placeholder="kelurahan" className="border-1 px-2 p-2"
              value={formData.kelurahan} onChange={e => setFormData(prev => ({ ...prev, kelurahan: e.target.value }))} />

            <div className="md:col-span-3">
              <label className="block text-sm font-medium text-gray-600 mb-1">Alamat Lengkap</label>
              <textarea
                rows="3"
                className="w-full border rounded-md p-2 focus:ring-2 focus:ring-blue-400 outline-none"
                value={formData.alamatLengkap}
                onChange={e => setFormData(prev => ({ ...prev, alamatLengkap: e.target.value }))} />
            </div>
          </div>
        </div>

        {/* SECTION BAWAH */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="border rounded-lg p-6">
            <h2 className="font-semibold mb-4">Keperluan SKCK</h2>
            <div className="flex-col gap-5">
              <input placeholder="tujuanPembuatan" className="border-1 px-2 p-2"
                value={formData.tujuanPembuatan} onChange={e => setFormData(prev => ({ ...prev, tujuanPembuatan: e.target.value }))} />
              <input placeholder="instansiTujuan" className="border-1 px-2 p-2"
                value={formData.instansiTujuan} onChange={e => setFormData(prev => ({ ...prev, instansiTujuan: e.target.value }))} />
            </div>
          </div>

          <div className="border rounded-lg p-6 md:col-span-2">
            <h2 className="font-semibold mb-4">Unggah Dokumen</h2>

            {/** File Inputs */}
            {['ktp', 'kk', 'pasFoto', 'akte'].map((field, idx) => {
              const label = {
                ktp: 'Foto / Scan KTP',
                kk: 'Foto / Scan Kartu Keluarga',
                pasFoto: 'Pas Foto Terbaru 4x6',
                akte: 'Foto / Scan Akte Kelahiran'
              }[field]
              return (
                <div className="flex gap-5 mb-3" key={idx}>
                  <label>{label}</label>
                  <input type="file"
                    onChange={async (e) => {
                      const file = e.target.files[0]
                      if (!file) return
                      set_triger(true)
                      const url = await uploadFile(file)
                      setFormData(prev => ({ ...prev, [field]: url }))
                      set_triger(false)
                    }} />
                </div>
              )
            })}

          </div>
        </div>

        {/* Checkbox */}
        <div className="mt-6 flex items-center gap-2">
          <input type="checkbox"
            checked={formData.persetujuan}
            onChange={e => setFormData(prev => ({ ...prev, persetujuan: e.target.checked }))} />
          <p className="text-sm text-gray-600">
            Saya menyatakan data yang saya isi benar dan dapat dipertanggung jawabkan
          </p>
        </div>

        {/* Button */}
        <div className="mt-6 flex justify-end">
          <button type="submit"
            className="bg-amber-700 hover:bg-amber-800 text-white px-6 py-2 rounded-md transition">
            Kirim Pendaftaran
          </button>
        </div>

      </form>

      {/* Loading */}
      {triger && <p className="text-[40px]">Loading...</p>}
    </div>
  )
}
