import { useNavigate } from 'react-router-dom';
import { Eye, Lock, User, FileBadge } from 'lucide-react';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="login-container">
      <div className="login-branding">
        <div className="branding-content">
          <div className="brand-logo">
            <FileBadge size={24} className="logo-icon" />
            <span>Clinical Curator</span>
          </div>
          <h1 className="branding-title">
            Managing<br />
            <span className="highlight">Community Health</span><br />
            with Precision.
          </h1>
          <p className="branding-description">
            A dedicated portal for Barangay Health Workers and Caregivers. Access clinical records, track patient history, and manage healthcare protocols with Row Level Security.
          </p>
          <div className="branding-footer">
            <div className="footer-line"></div>
            <span>VITALIS CORE MANAGEMENT</span>
          </div>
        </div>
      </div>

      <div className="login-form-section">
        <div className="form-container">
          <h2 className="form-title">Welcome Back</h2>
          <p className="form-subtitle">Please enter your credentials to access the portal.</p>

          <form onSubmit={handleLogin} className="form-inputs">
            <div className="input-group">
              <div className="input-group-header">
                <label>UNIQUE ACCESS ID</label>
                <span className="badge-secure">RLS SECURED</span>
              </div>
              <div className="input-wrapper">
                <FileBadge size={18} className="input-icon" color="#94a3b8" />
                <input type="text" placeholder="BHW-7-XXXX-XXXX" defaultValue="BHW-7-XXXX-XXXX" disabled />
              </div>
              <a href="#" className="forgot-link">Forgot Access ID?</a>
            </div>

            <div className="input-group">
              <label>USERNAME</label>
              <div className="input-wrapper">
                <User size={18} className="input-icon" color="#64748b" />
                <input type="text" placeholder="john.doe" />
              </div>
            </div>

            <div className="input-group">
              <label>PASSWORD</label>
              <div className="input-wrapper">
                <Lock size={18} className="input-icon" color="#64748b" />
                <input type="password" placeholder="••••••••" />
                <Eye size={18} className="input-icon-right" color="#64748b" />
              </div>
            </div>

            <div className="checkbox-group">
              <input type="checkbox" id="keepLoggedIn" />
              <label htmlFor="keepLoggedIn">Keep me logged in on this terminal</label>
            </div>

            <button type="submit" className="login-btn">
              LOGIN TO DASHBOARD &rarr;
            </button>
          </form>

          <div className="form-policy">
            <p>By accessing this portal, you agree to comply with the Data Privacy Act of 2012 and HIPAA compliance standards for patient record management.</p>
            <div className="policy-links">
              <a href="#">PRIVACY POLICY</a>
              <a href="#">SECURITY TERMS</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
