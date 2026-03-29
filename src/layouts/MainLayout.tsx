import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { LayoutDashboard, Users, FileText, AlertTriangle, UserCircle2, LogOut, PlusCircle } from 'lucide-react';
import './MainLayout.css';

const MainLayout = () => {
  const navigate = useNavigate();

  return (
    <div className="main-layout">
      <aside className="sidebar">
        <div className="sidebar-header">
          <h2 className="brand-title">BHW Portal</h2>
          <p className="brand-subtitle">District 7 Office</p>
        </div>

        <nav className="sidebar-nav">
          <NavLink to="/dashboard" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
            <LayoutDashboard size={20} />
            Dashboard
          </NavLink>
          <NavLink to="/patients" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
            <Users size={20} />
            Patients
          </NavLink>
          <NavLink to="/reports" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
            <FileText size={20} />
            Reports
          </NavLink>
          <NavLink to="/emergency" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
            <AlertTriangle size={20} />
            Emergency
          </NavLink>
        </nav>

        <div className="sidebar-footer">
          <button className="btn-primary sidebar-action">
            <PlusCircle size={20} color="white" /> NEW PATIENT CHECK-UP
          </button>
          
          <div className="nav-item logout" onClick={() => navigate('/')}>
            <LogOut size={20} />
            Logout
          </div>
        </div>
      </aside>

      <main className="content-area">
        <header className="top-nav">
          <div className="search-bar">
            {/* simple mockup */}
            <input type="text" placeholder="Quick search patients by name or ID..." />
          </div>
          <div className="user-profile">
            <UserCircle2 size={32} color="#64748b" />
          </div>
        </header>

        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
