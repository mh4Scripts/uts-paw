import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useKoleksi from '../hooks/useKoleksi.js'
import './Tambah.css'

const AWAL = { judul: '', kategori: 'Kardio', tanggal: '', durasi: 0, kalori: 0 }

export default function Tambah() {
    const { tambah } = useKoleksi()
    const navigate = useNavigate()
    const [form, setForm] = useState(AWAL)
    const [galat, setGalat] = useState('')

    const ubah = (e) => setForm({ ...form, [e.target.name]: e.target.value })

    const simpan = (e) => {
    e.preventDefault()
    console.log('Data yang akan disimpan:', form)
     if (form.judul.trim().length < 3) {
      setGalat('Judul wajib diisi, minimal 3 karakter.')
      return
     }
    tambah({ ...form, judul: form.judul.trim() })
    navigate('/koleksi')
}

  return (
     <form className="formulir" onSubmit={simpan} noValidate>
      <h1>Tambah Tugas</h1>

      <label htmlFor="judul">Judul</label>
      <input id="judul" name="judul" value={form.judul} onChange={ubah} />
        {galat && <p role="alert">{galat}</p>}

      <label htmlFor="kategori">Kategori</label>
      <select id="kategori" name="kategori" value={form.kategori} onChange={ubah}>
        <option>Kardio</option>
        <option>Kekuatan</option>
        <option>Kelenturan</option>
        <option>Permainan</option>
      </select>

      <label htmlFor="taggal">Tanggal</label>
      <input id="tanggal" name="tanggal" type="date" value={form.tenggat} onChange={ubah} />

      <label htmlFor="durasi">Durasi</label>
      <select id="durasi" name="durasi" value={form.durasi} onChange={ubah}>
        <option value={0}>0 menit</option>
        <option value={15}>15 menit</option>
        <option value={30}>30 menit</option>
        <option value={45}>45 menit</option>
        <option value={60}>60 menit</option>
      </select>

      <label htmlFor="kalori">Kalori</label>
      <input id="kalori" name="kalori" type="number" value={form.kalori} onChange={ubah} />
      <button type="submit">Simpan</button>
    </form>
  )
}