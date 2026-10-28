import { useState } from 'react'

const AWAL = { judul: '', kategori: 'Kardio', tanggal: '', durasi: 0, kalori: 0 }

export default function Tambah() {
    const [form, setForm] = useState(AWAL)

      const ubah = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  return (
    <form>
      <h1>Tambah Tugas</h1>

      <label htmlFor="judul">Judul</label>
      <input id="judul" name="judul" value={form.judul} onChange={ubah} />
      <input id="judul" name="judul" />

      <label htmlFor="kategori">Kategori</label>
      <select id="kategori" name="kategori" value={form.kategori} onChange={ubah}></select>
      <select id="kategori" name="kategori">
        <option>Kardio</option>
        <option>Kekuatan</option>
        <option>Kelenturan</option>
        <option>Permainan</option>
      </select>

      <button type="submit">Simpan</button>
       <p>Isi state saat ini: {JSON.stringify(form)}</p>
    </form>
  )
}