export default function Tambah() {
  return (
    <form>
      <h1>Tambah Tugas</h1>

      <label htmlFor="judul">Judul</label>
      <input id="judul" name="judul" />

      <label htmlFor="kategori">Kategori</label>
      <select id="kategori" name="kategori">
        <option>Kardio</option>
        <option>Kekuatan</option>
        <option>Kelenturan</option>
        <option>Permainan</option>
      </select>

      <button type="submit">Simpan</button>
    </form>
  )
}