'use client'

import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function ChangePassword({ userId }) {
  const [email , setEmail] = useState('')
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleChangePassword() {
    if (!newPassword || !confirmPassword || !email) {
      alert('Semua field harus diisi!');
      return;
    }
    if (newPassword !== confirmPassword) {
      alert('Password dan konfirmasi harus sama!');
      return;
    }

    try {
      setLoading(true);
      const res = await axios.put(
        'https://squarrose-agrostologic-sharell.ngrok-free.dev/server_auth/change_password',
        { confirmPassword, email }
      );
      alert(res.data.pesan);
      router.push('/page_login'); // redirect setelah sukses
    } catch (err) {
      alert(err.response?.data?.error || err.message || 'Terjadi error');
      console.log(err.response);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Ganti Password
        </h2>


         <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600 mb-1">
            masukan email
          </label>
          <input
            type="text"
            placeholder="Masukkan email anda"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
          />
        </div>

        {/* Password Baru */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Password Baru
          </label>
          <input
            type="password"
            placeholder="Masukkan password baru"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
          />
        </div>

        {/* Konfirmasi Password */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Konfirmasi Password
          </label>
          <input
            type="password"
            placeholder="Masukkan lagi password baru"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
          />
        </div>

        {/* Button */}
        <button
          onClick={handleChangePassword}
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 active:scale-95 transition-all duration-200 text-white font-semibold py-3 rounded-xl shadow-md disabled:opacity-50"
        >
          {loading ? 'Mengubah...' : 'Ganti Password'}
        </button>
      </div>
    </main>
  );
}
