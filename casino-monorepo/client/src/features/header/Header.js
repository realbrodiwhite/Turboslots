// Header.js

// Import necessary libraries and components
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faCrown, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import currencyIcon from '../../assets/currency.png';
import './Header.scss';
import AuthModal from './AuthModal';
import BalanceDisplay from './BalanceDisplay';

const Header = () => {
  const loggedIn = useSelector((state) => state.lobby.loggedIn);
  const username = useSelector((state) => state.lobby.username);
  const balance = useSelector((state) => state.lobby.balance);
  const navigate = useNavigate();

  // State to manage the modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showProfile = () => {
    navigate('/profile');
  };

  const showSettings = () => {
    navigate('/settings');
  };

  const showAuthPopup = () => {
    setIsModalOpen(true);
  };

  const handleAccountClick = () => {
    if (loggedIn) {
      showProfile();
    } else {
      showAuthPopup();
    }
  };

  const handleSettingsClick = () => {
    if (loggedIn) {
      showSettings();
    } else {
      showAuthPopup();
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="Header">
      <div className="brand">
        <FontAwesomeIcon icon={faCrown} size="2x" className="logo" />
        <span className="name">SlotsNow! An Infinity Software Project</span>
      </div>
      <div className="menu">
        <button className="account" onClick={handleAccountClick}>
          {loggedIn ? (
            <>
              <img src={currencyIcon} alt="User Profile" className="profile-image" />
              <span className="account-username">{username}</span>
            </>
          ) : (
            <>
              <FontAwesomeIcon icon={faUserCircle} size="2x" className="icon-profile" />
              <span className="account-username">Login/Signup</span>
            </>
          )}
        </button>
        <button className="icon-settings" onClick={handleSettingsClick}>
          <FontAwesomeIcon icon={faCog} size="2x" />
        </button>
        {loggedIn && (
          <BalanceDisplay balance={balance} />
        )}
      </div>
      {isModalOpen && <AuthModal closeModal={closeModal} />}
    </div>
  );
};

export default Header;