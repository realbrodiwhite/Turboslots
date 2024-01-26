import { faCog, faCrown, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Header.scss';
import { useSelector } from 'react-redux';
import { useEffect, useContext } from 'react';
import { SocketContext } from '../../context/socket';
import store from '../../store';
import lobbySlice from '../../lobbySlice';

const Header = (props) => {
  const loggedIn = useSelector((state) => state.lobby.loggedIn);
  const username = useSelector((state) => state.lobby.username);
  const balance = useSelector((state) => state.lobby.balance);

  const socket = useContext(SocketContext);

  useEffect(() => {
    socket.emit('balance', {
      key: localStorage.getItem('key'),
    });

    socket.on('balance', (balance) => {
      store.dispatch(lobbySlice.actions.updateBalance(balance));
    });
  }, []);

  const authButtonText = loggedIn ? 'Logout' : 'Login';
  const handleAuth = () => {
    if (loggedIn) {
      // Implement logout functionality
      
      // Logout functionality
      localStorage.removeItem('key');
      store.dispatch(lobbySlice.actions.setLoggedIn(false));
      store.dispatch(lobbySlice.actions.setUsername(''));
      store.dispatch(lobbySlice.actions.updateBalance(0));
      socket.emit('logout');

      // Show popup with auth options if not logged in
      const showAuthPopup = () => {
        // Code to show auth popup with buttons for new user, sign-in, sign-up, forgot password
      };

      // Show profile or settings page in a popup if logged in
      const showProfileOrSettings = () => {
        // Code to show profile or settings page
      };

      // Check if the user is logged in and show the appropriate popup
      loggedIn ? showProfileOrSettings() : showAuthPopup();

    } else {
      // Implement login functionality
    }
  };

  return (
    <div className="Header">
      <div className="brand">
        <FontAwesomeIcon icon={faCrown} size="2x" className="logo"></FontAwesomeIcon>
        <span className="name">SlotsNow! An Infinity Software Project</span>
      </div>

      <div className="menu">
        {loggedIn && (
          <div className="account">
            <span>{username}</span>
          </div>
        )}

        <button className={`btn-auth ${loggedIn ? 'logged-in' : ''}`} onClick={handleAuth}>
          {authButtonText}
        </button>

        {loggedIn && (
          <FontAwesomeIcon icon={faCog} size="2x" className="icon-settings"></FontAwesomeIcon>
        )}
      </div>

      {loggedIn && (
        <div className="balance">
          <span>€{balance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
        </div>
      )}
    </div>
  );
}

export default Header;
