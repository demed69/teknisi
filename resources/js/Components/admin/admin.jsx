import React, { useState } from 'react';
import '@/Components/css/AdminDashboard.css'; // Buat file CSS untuk styling
import UserList from './user';
import Dashboard from '@/Components/admin/Dashboard'; // Mengimpor komponen Dashboard

const AdminDashboard = () => {
  const [showUsers, setShowUsers] = useState(false); // State untuk mengelola tampilan UserList
  const [showDashboard, setShowDashboard] = useState(true); // Set default ke true untuk menampilkan Dashboard saat dibuka

  const toggleUserList = () => {
    setShowUsers(true); // Tampilkan UserList
    setShowDashboard(false); // Sembunyikan Dashboard
  };

  const toggleDashboard = () => {
    setShowDashboard(true); // Tampilkan Dashboard
    setShowUsers(false); // Sembunyikan UserList
  };

  return (
    <div className="admin-dashboard">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-header">
          <h2>Admin Panel</h2>
        </div>
        <nav>
          <ul>
            <li>
              <a href="#" onClick={toggleDashboard}>Dashboard</a> {/* Menghubungkan dengan fungsi toggleDashboard */}
            </li>
            <li><a href="#" onClick={toggleUserList}>Users</a></li> {/* Tambahkan onClick */}
            <li><a href="#">Jobs</a></li>
            <li><a href="#">Settings</a></li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        {/* Navbar */}
        <header className="navbar">
          <h1>Welcome, Admin</h1>
          <div className="user-info">
            <span>Admin Name</span>
            <img src="https://via.placeholder.com/40" alt="Profile" className="profile-img" />
          </div>
        </header>

        {showDashboard && <Dashboard />} {/* Menampilkan Dashboard jika showDashboard true */}
        
        {/* User List Section */}
        {showUsers && ( // Tampilkan UserList jika showUsers true
          <section className="user-list-section">
            <UserList />
          </section>
        )}

      </main>
    </div>
  );
};

export default AdminDashboard;
