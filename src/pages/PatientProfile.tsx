import { useParams, Link } from 'react-router-dom';
import { Camera, Heart, Thermometer, Activity, Scale, Download, RefreshCw, ChevronDown, MapPin, Phone } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './PatientProfile.css';

const data = [
  { name: 'May 01', bp: 110, hr: 72, sugar: 95 },
  { name: 'May 05', bp: 115, hr: 75, sugar: 98 },
  { name: 'May 10', bp: 125, hr: 78, sugar: 105 },
  { name: 'May 15', bp: 130, hr: 80, sugar: 110 },
  { name: 'May 20', bp: 145, hr: 85, sugar: 140 },
  { name: 'May 25', bp: 120, hr: 74, sugar: 102 },
  { name: 'May 30', bp: 118, hr: 72, sugar: 96 },
];

const PatientProfile = () => {
  const { id } = useParams();

  return (
    <div className="patient-profile">
      <div className="breadcrumb">
        <Link to="/patients">Patients</Link> › <span>Health Profile</span>
      </div>

      <div className="profile-header-card">
        <div className="profile-info-section">
          <div className="profile-avatar large">
            <img src={`https://ui-avatars.com/api/?name=Elena+Santos&background=0D8ABC&color=fff&size=80`} alt="Elena Santos" className="rounded-avatar" />
          </div>
          <div className="profile-details">
            <span className="badge-primary">PRIMARY PATIENT</span>
            <h1>Elena M. Santos</h1>
            <p>ID: {id || 'PH-7702-881'} • 68 years old • Female</p>
            <div className="contact-info">
              <span><MapPin size={14} /> District 7, Block 4</span>
              <span><Phone size={14} /> +63 917 123 4567</span>
            </div>
          </div>
        </div>

        <div className="profile-actions">
          <button className="btn-primary flex-center gap-sm">
            <Download size={16} /> Export PDF
          </button>
          <button className="btn-secondary flex-center gap-sm mt-sm">
            <Download size={16} /> Export CSV
          </button>
        </div>

        <div className="health-score-card">
          <div className="score-header">CURRENT HEALTH SCORE</div>
          <div className="score-value">84<span>/100</span></div>
          <div className="score-status">
            <span className="dot stable"></span> STABLE CONDITION
          </div>
          <p className="score-desc">Vitals are within 15% of the personal target baseline for the past 7 days.</p>
        </div>
      </div>

      <div className="profile-main-grid">
        <div className="vitals-recording-section">
          <div className="section-title">
            <RefreshCw size={20} color="#0a58ca" />
            <h2>Record Vitals</h2>
          </div>

          <form className="vitals-form">
            <div className="form-group">
              <label>Heart Rate (BPM)</label>
              <div className="input-with-addon">
                <input type="number" defaultValue="72" />
                <span className="addon">bpm</span>
              </div>
            </div>

            <div className="form-group">
              <label>Body Temperature (°C)</label>
              <div className="input-with-addon">
                <input type="number" step="0.1" defaultValue="36.5" />
                <span className="addon">°C</span>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Systolic BP</label>
                <input type="number" defaultValue="120" />
              </div>
              <div className="form-group">
                <label>Diastolic BP</label>
                <input type="number" defaultValue="80" />
              </div>
            </div>

            <div className="form-group">
              <label>Body Weight (KG)</label>
              <div className="input-with-addon">
                <input type="number" step="0.1" defaultValue="64.5" />
                <span className="addon">kg</span>
              </div>
            </div>

            <div className="form-group">
              <label>PHYSICAL STATUS IMAGE</label>
              <div className="upload-area">
                <Camera size={24} color="#64748b" />
                <p>Upload symptoms or physical marks</p>
              </div>
            </div>

            <button type="button" className="save-vitals-btn">
              <RefreshCw size={18} /> SAVE & SYNC DATA
            </button>
            <p className="sync-note">Auto-syncing enabled. Local cache active.</p>
          </form>
        </div>

        <div className="clinical-data-section">
          <div className="quick-stats-grid">
            <div className="quick-stat-card">
              <Heart size={24} color="#3b82f6" />
              <div>
                <span className="stat-label">HEART RATE</span>
                <div className="stat-val">76 <span>bpm</span></div>
              </div>
            </div>
            <div className="quick-stat-card">
              <Thermometer size={24} color="#ef4444" />
              <div>
                <span className="stat-label">TEMPERATURE</span>
                <div className="stat-val">36.8 <span>°C</span></div>
              </div>
            </div>
            <div className="quick-stat-card">
              <Activity size={24} color="#10b981" />
              <div>
                <span className="stat-label">BP</span>
                <div className="stat-val">118/74</div>
              </div>
            </div>
            <div className="quick-stat-card">
              <Scale size={24} color="#8b5cf6" />
              <div>
                <span className="stat-label">WEIGHT</span>
                <div className="stat-val">64.2 <span>kg</span></div>
              </div>
            </div>
          </div>

          <div className="history-card">
            <div className="history-header">
              <div>
                <h3>Longitudinal Data History</h3>
                <p>Last 30 days clinical records</p>
              </div>
              <div className="history-actions">
                <button className="export-btn">Export PDF</button>
                <button className="filter-btn"><ChevronDown size={18} /></button>
              </div>
            </div>

            <table className="history-table">
              <thead>
                <tr>
                  <th>LOG DATE</th>
                  <th>STATUS INDICATOR</th>
                  <th>BP & HR</th>
                  <th>TEMP/WEIGHT</th>
                  <th>ATTACHMENTS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Oct 24, 2023</strong><br/><span>09:15 AM</span></td>
                  <td><span className="status-badge stable"><div className="status-dot stable" /> STABLE</span></td>
                  <td><strong>120/80</strong> mmHg<br/><span>72 bpm</span></td>
                  <td><strong>36.6 °C</strong><br/><span>64.5 kg</span></td>
                  <td><div className="attachment-thumb"></div></td>
                </tr>
                <tr>
                  <td><strong>Oct 20, 2023</strong><br/><span>10:45 AM</span></td>
                  <td><span className="status-badge high-risk"><div className="status-dot high-risk" /> HIGH BP</span></td>
                  <td><strong className="text-danger">145/95</strong> mmHg<br/><span>88 bpm</span></td>
                  <td><strong>37.2 °C</strong><br/><span>65.1 kg</span></td>
                  <td><span className="no-image">No Image</span></td>
                </tr>
                <tr>
                  <td><strong>Oct 15, 2023</strong><br/><span>08:00 AM</span></td>
                  <td><span className="status-badge stable"><div className="status-dot stable" /> STABLE</span></td>
                  <td><strong>118/78</strong> mmHg<br/><span>74 bpm</span></td>
                  <td><strong>36.4 °C</strong><br/><span>64.3 kg</span></td>
                  <td><div className="attachment-thumb dark"></div></td>
                </tr>
              </tbody>
            </table>
            
            <div className="view-full-history">
              <a href="#">View Full Medical History</a>
            </div>
          </div>
          
          <div className="trends-card mt-lg">
            <h3>Multi-Metric Clinical Trends</h3>
            <p>Correlated 30-day vitals mapping (Systolic BP, Heart Rate, Blood Sugar)</p>
            
            <div className="chart-container" style={{ width: '100%', height: 300, marginTop: '20px' }}>
              <ResponsiveContainer>
                <BarChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748B', fontSize: 12}} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748B', fontSize: 12}} dx={-10} />
                  <Tooltip cursor={{fill: '#F1F5F9'}} />
                  <Legend iconType="circle" wrapperStyle={{paddingTop: '20px'}} />
                  <Bar dataKey="bp" name="BP (MMHG)" fill="#93C5FD" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="hr" name="HR (BPM)" fill="#6EE7B7" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="sugar" name="SUGAR (MG/DL)" fill="#FCA5A5" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientProfile;
