import { Link } from 'react-router-dom'

export default function KartuItem({ item }) {
  const { id, judul, kategori, tanggal, durasi, kalori } = item
  return (
    <article className="kartu">
      <h3>
        <Link to={`/koleksi/${id}`}>{judul}</Link>
      </h3>
      <p>
        {kategori} | tanggal {tanggal} | durasi {durasi} menit | kalori {kalori}
      </p>
    </article>
  )
}