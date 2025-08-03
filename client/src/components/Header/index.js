import "./style.css";
import { Link } from "react-router-dom";

const Header = () => (
  <nav className="nav-container">
    <div className="nav-main">
      <Link to="/" className="link">
        <div className="logo-container">
          <img src="/favicon.ico" alt="doc-slot" className="header-img" />
          <h1 className="nav-h1">DocSlot</h1>
        </div>
      </Link>

      <Link to="/my-appointments" className="link">
        <p>My Appointments</p>
      </Link>
    </div>
  </nav>
);

export default Header;
