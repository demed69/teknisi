import React, { useState } from 'react';
import '@/Components/css/AdminDashboard.css';
import UserList from './user/user';
import Dashboard from '@/Components/admin/Dashboard';
import { FaUsers, FaTachometerAlt, FaBriefcase, FaCog, FaBars, FaTimes, FaFile } from 'react-icons/fa';
import Jobs from './jobs/jobs';

const AdminDashboard = () => {
  const [showUsers, setShowUsers] = useState(false);
  const [showDashboard, setShowDashboard] = useState(true);
  const [showJobs, setShowJobs] = useState(false);
  const [sidebarExpanded, setSidebarExpanded] = useState(true);

  const toggleUserList = () => {
    setShowUsers(true);
    setShowDashboard(false);
    setShowJobs(false);
  };

  const toggleDashboard = () => {
    setShowDashboard(true);
    setShowUsers(false);
    setShowJobs(false);
  };

  const toggleJobs = () => {
    setShowJobs(true);
    setShowUsers(false);
    setShowDashboard(false);
  }

  const toggleSidebar = () => {
    setSidebarExpanded(!sidebarExpanded);
  };

  return (
    <div className="admin-dashboard">


      <aside className={`sidebar ${sidebarExpanded ? 'expanded' : 'collapsed'}`}>
        <div className="sidebar-header">
          <h2 className="sidebar-title">Admin Panel</h2>
        </div>
        <nav>
          <ul>
            <li>
              <a href="#" onClick={toggleDashboard}><FaTachometerAlt /> {sidebarExpanded && 'Dashboard'}</a>
            </li>
            <li>
              <a href="#" onClick={toggleUserList}><FaUsers /> {sidebarExpanded && 'Users'}</a>
            </li>
            <li>
              <a href="#" onClick={toggleJobs}><FaBriefcase /> {sidebarExpanded && 'Jobs'}</a>
            </li>
            <li>
              <a href="#"><FaFile /> {sidebarExpanded && 'Jobs report'}</a>
            </li>
          </ul>
        </nav>
      </aside>

      <main className="main-content">
              <button className="sidebar-toggle" onClick={toggleSidebar}>
        {sidebarExpanded ? <FaTimes /> : <FaBars />}
      </button>
        <header className="navbar">
          <h1>Welcome, Admin</h1>
          <div className="user-info">
            <span>Admin Name</span>
            <img src="https://via.placeholder.com/40" alt="Profile" className="profile-img" />
          </div>
        </header>

        {showDashboard && <Dashboard />}
        {showUsers && (
          <section className="user-list-section">
            <UserList />
          </section>
        )}
        {showJobs && (
          <section>
            <Jobs />
          </section>
        )}
      </main>
    </div>
  );
};

export default AdminDashboard;
