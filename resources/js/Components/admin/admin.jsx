import React from 'react';
import '@/Components/css/AdminDashboard.css'; // Buat file CSS untuk styling

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-header">
          <h2>Admin Panel</h2>
        </div>
        <nav>
          <ul>
            <li><a href="#">Dashboard</a></li>
            <li><a href="#">Users</a></li>
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

        {/* Dashboard Overview */}
        <section className="dashboard-overview">
          <div className="card">
            <h3>Total Users</h3>
            <p>1,254</p>
          </div>
          <div className="card">
            <h3>Active Jobs</h3>
            <p>87</p>
          </div>
          <div className="card">
            <h3>Pending Reviews</h3>
            <p>5</p>
          </div>
          <div className="card">
            <h3>Revenue</h3>
            <p>$45,780</p>
          </div>
        </section>

        {/* Table Section */}
        <section className="table-section">
          <h2>Recent Job Submissions</h2>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Status</th>
                <th>Created At</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Frontend Developer</td>
                <td>Active</td>
                <td>2024-10-05</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Backend Engineer</td>
                <td>Pending</td>
                <td>2024-10-02</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Project Manager</td>
                <td>Reviewing</td>
                <td>2024-10-01</td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
};

export default AdminDashboard;
