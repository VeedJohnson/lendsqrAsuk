import Logoicon from "../../images/Union.png";
import Logoname from "../../images/lendsqr.png";
import { Link } from "react-router-dom";
import "./TopNavbar.scss";

type Props = {};

const TopNavbar = (props: Props) => {
  return (
    <header id="top-header">
      <div className="container">
        <nav className="flex-between">
          <div className="nav-image-container">
            <Link to={"/Users"} id="logo">
              <img src={Logoicon} />
              <img src={Logoname} />
            </Link>
          </div>

          <div className="nav-main-container flex-between">
            <div id="search-bar-container">
              <input
                type="text"
                placeholder="Search for anything"
                id="search-bar"
              />
              <button>🔍</button>
            </div>

            <div className="flex-between right-nav-menu">
              <Link to={"/Users"}>Docs</Link>
              <p className="notifications">🔔</p>
              <div className="flex-between">
                <img src={Logoicon} className="profile-icon" />
                <p>
                  Adedeji <span>v</span>
                </p>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default TopNavbar;
