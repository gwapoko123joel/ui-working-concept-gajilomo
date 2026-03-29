import { useNavigate } from 'react-router-dom';
import { AlertCircle, ChevronRight, Activity, Thermometer } from 'lucide-react';
import './Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();

  const patients = [
    {
      id: 'PH-7702-881',
      name: 'Maria Santos',
      displayId: '#BTY-0982 • Zone 4',
      systolic: 120,
      diastolic: 80,
      status: 'stable',
      initials: 'MS',
      temp: null,
      color: '#4ade80'
    },
    {
      id: 'PH-7702-882',
      name: 'Jose Rizalino',
      displayId: '#BTY-0441 • Zone 1',
      systolic: 145,
      diastolic: 95,
      status: 'high-risk',
      initials: 'JR',
      temp: null,
      color: '#f87171'
    },
    {
      id: 'PH-7702-883',
      name: 'Elena Luna',
      displayId: '#BTY-1120 • Zone 3',
      temp: '36.5°C',
      status: 'stable',
      initials: 'EL',
      systolic: null,
      diastolic: null,
      color: '#4ade80'
    }
  ];

  return (
    <div className="dashboard">
      <h1 className="page-title">Barangay Bantayan</h1>
      
      <div className="dashboard-top-grid">
        <div className="emergency-banner">
          <div className="banner-content">
            <AlertCircle size={32} color="white" />
            <div>
              <h2>One-Touch Emergency Reporting</h2>
              <p>Dispatch immediate help to Barangay Bantayan residents.</p>
            </div>
          </div>
          <button className="activate-btn">ACTIVATE</button>
        </div>

        <div className="stat-card">
          <div className="stat-header">
            <Activity size={24} color="#0a58ca" />
            <span className="badge-stable">STABLE</span>
          </div>
          <h3>142</h3>
          <p>Assigned Patients</p>
        </div>

        <div className="stat-card">
          <div className="stat-header">
            <AlertCircle size={24} color="#ef4444" />
            <span className="badge-high-risk">HIGH RISK</span>
          </div>
          <h3>12</h3>
          <p>Critical Attention</p>
        </div>
      </div>

      <div className="dashboard-main-grid">
        <div className="patient-status-section">
          <div className="section-header">
            <h2>Patient Status Monitoring</h2>
            <a href="#" className="view-all">View All Patients</a>
          </div>

          <div className="patient-list">
            {patients.map((p, idx) => (
              <div 
                key={idx} 
                className="patient-card cursor-pointer"
                onClick={() => navigate(`/patient/${p.id}`)}
              >
                <div className="patient-info">
                  <div className="avatar" style={{ backgroundColor: `${p.color}40`, color: p.color }}>
                    {p.initials}
                  </div>
                  <div>
                    <h4>{p.name}</h4>
                    <p>ID: {p.displayId}</p>
                  </div>
                </div>
                
                <div className="patient-vitals">
                  {p.systolic ? (
                    <div className="vital-item">
                      <span className="label">BP</span>
                      <span className={`value ${p.status === 'high-risk' ? 'text-danger' : ''}`}>
                        {p.systolic}/{p.diastolic}
                      </span>
                    </div>
                  ) : (
                    <div className="vital-item">
                      <span className="label">TEMP</span>
                      <span className="value">{p.temp}</span>
                    </div>
                  )}
                  
                  <div className={`status-badge ${p.status}`}>
                    <div className={`status-dot ${p.status}`}></div>
                    {p.status === 'stable' ? 'Normal' : 'High Risk'}
                  </div>
                  
                  <ChevronRight size={20} color="#94a3b8" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="recent-activity-section">
          <h2>Recent Activity</h2>
          <div className="activity-card">
            <ul className="activity-list">
              <li className="activity-item stable">
                <div className="dot"></div>
                <div className="content">
                  <p><strong>Vitals recorded for Maria Santos</strong></p>
                  <span>10 minutes ago • Zone 4</span>
                </div>
              </li>
              <li className="activity-item high-risk">
                <div className="dot"></div>
                <div className="content">
                  <p><strong>High BP Alert: Jose Rizalino</strong></p>
                  <span>45 minutes ago • Contacting Barangay Dr.</span>
                </div>
              </li>
              <li className="activity-item neutral">
                <div className="dot"></div>
                <div className="content">
                  <p><strong>Check-up Scheduled: Pedro Penduko</strong></p>
                  <span>2 hours ago • Tomorrow, 9:00 AM</span>
                </div>
              </li>
              <li className="activity-item info">
                <div className="dot"></div>
                <div className="content">
                  <p><strong>New Patient Registered</strong></p>
                  <span>3 hours ago • Added to Zone 2</span>
                </div>
              </li>
            </ul>
            <button className="download-report-btn">Download Activity Report</button>
          </div>
        </div>
      </div>

      <div className="required-actions-section">
        <div className="section-header">
          <div>
            <h2>Required Actions</h2>
            <p>Follow up on these patients today</p>
          </div>
          <div className="check-icon">✓</div>
        </div>
        <div className="action-grid">
          <div className="action-card vaccination">
            <div className="icon"><Thermometer size={20}/></div>
            <div>
              <h4>Vaccination</h4>
              <p>5 kids in Zone 1</p>
            </div>
          </div>
          <div className="action-card prenatal">
            <div className="icon"><Activity size={20}/></div>
            <div>
              <h4>Prenatal Check</h4>
              <p>2 moms in Zone 3</p>
            </div>
          </div>
          <div className="action-card meds">
            <div className="icon"><AlertCircle size={20}/></div>
            <div>
              <h4>Meds Delivery</h4>
              <p>8 seniors in Zone 4</p>
            </div>
          </div>
          <button className="add-task-btn">
            <span>+</span> Add Task
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
