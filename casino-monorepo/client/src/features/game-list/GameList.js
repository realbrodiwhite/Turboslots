import { Link } from 'react-router-dom';
import './GameList.scss';
import rockClimberLogo from '../../assets/img/rock-climber-logo.png';
import egyptianTreasuresLogo from '../../assets/img/egyptian-treasures-logo.png';
import rapStarLogo from '../../assets/img/rap-star-logo.png';
import slvAllStarSlotsLogo from '../../assets/img/slv-all-star-slots-logo.png';
import bayAreaLegendsLogo from '../../assets/img/bay-area-legends-logo.png';
import biaaatchLogo from '../../assets/img/biaaatch-logo.png';
import { useSelector } from 'react-redux';

const GameList = (props) => {

  const loggedIn = useSelector((state) => state.lobby.loggedIn);

  return (
    <div className="GameList">
      <div className={`list ${!loggedIn ? 'd-none' : ''}`}>{/* Game entries start here */}
        <div className="game" style={{position: 'relative'}}>
          <img className="logo" alt="egyptian treasure slot machine game logo" src={egyptianTreasuresLogo} />
          
          <span>Egyptian Treasures</span>

          <Link to="play/egyptian-treasures" className="btn-play">
            Play
          </Link>
        </div>

        <div className="game" style={{position: 'relative'}}>
          <img className="logo" alt="rap star: official mixtape edition slot machine game by realbrodiwhite - logo" src={rapStarLogo} />

          <span>Rap Star: Official Mixtape Edition</span>

          <Link to="play/rap-star" className="btn-play">
            Play
          </Link>
        </div>

        <div className="game">
          <img className="logo" alt="rock climbers slot machine game logo" src={rockClimberLogo} />
          
          <span>Rock Climber</span>

          <Link to="play/rock-climber" className="btn-play">
            Play
          </Link>
        </div>
        {/* Additional game entries */}
        <div className="game">
          <img className="logo" alt="slv all star slots game logo" src={slvAllStarSlotsLogo} />
          
          <span>SLV All Star Slots</span>

          <Link to="play/slv-all-star-slots" className="btn-play">
            Play
          </Link>
        </div>

        <div className="game">
          <img className="logo" alt="bay area legends game logo" src={bayAreaLegendsLogo} />
          
          <span>Bay Area Legends</span>

          <Link to="play/bay-area-legends" className="btn-play">
            Play
          </Link>
        </div>

        <div className="game">
          <img className="logo" alt="biaaatch game logo" src={biaaatchLogo} />
          
          <span>Biaaatch</span>

          <Link to="play/biaaatch" className="btn-play">
            Play
          </Link>
        </div>
      </div>
    </div>
  );
}

export default GameList;