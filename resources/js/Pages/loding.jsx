import React, { useEffect, useState } from 'react';
import '@/Components/css/LoadingScreen.css'; // Jika kamu ingin menambahkan styling terpisah

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true); // Tambahkan state untuk loading

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // Set loading menjadi false setelah 2 detik
    }, 2000);

    return () => clearTimeout(timer); // Bersihkan timer saat komponen unmount
  }, []);

  if (!isLoading) return null; // Jika tidak loading, tidak tampilkan apa-apa

  return (
    <div className="loading-screen">
      <div className="spinner"></div>
      <p>Loading...</p>
    </div>
  );
};

export default LoadingScreen;
