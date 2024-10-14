import React, { useState } from 'react';

const TambahUser = () => {
  const [nama, setNama] = useState('');
  const [pekerjaan, setPekerjaan] = useState('');
  const [gaji, setGaji] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Logika untuk menambahkan pengguna
    console.log('Pengguna ditambahkan:', { nama, pekerjaan, gaji });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nama:</label>
        <input
          type="text"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
        />
      </div>
      <div>
        <label>Pekerjaan:</label>
        <input
          type="text"
          value={pekerjaan}
          onChange={(e) => setPekerjaan(e.target.value)}
        />
      </div>
      <div>
        <label>Gaji:</label>
        <input
          type="number"
          value={gaji}
          onChange={(e) => setGaji(e.target.value)}
        />
      </div>
      <button type="submit">Tambah Pengguna</button>
    </form>
  );
};

export default TambahUser;

