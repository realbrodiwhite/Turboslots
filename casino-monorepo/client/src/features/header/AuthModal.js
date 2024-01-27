import React from 'react';
import { Link } from 'react-router-dom';

const AuthModal = ({ closeModal }) => {
  return (
    <div className="auth-modal">
      <form>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" className="form-control" placeholder="Enter username" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" className="form-control" placeholder="Enter password" required />
        </div>
        <div className="form-group form-check">
          <input type="checkbox" id="termsAndConditions" className="form-check-input" required />
          <label className="form-check-label" htmlFor="termsAndConditions">
            I have read, fully comprehend and agree to the
            <Link to="/terms-and-conditions">Terms & Conditions</Link>
            of this Website
          </label>
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
        <div className="auth-links">
          <Link to="/create-account">Create Account</Link>
          <Link to="/forgot-password">Forgot Password?</Link>
        </div>
      </form>
      <button onClick={closeModal}>Close Modal</button>
    </div>
  );
};

export default AuthModal;