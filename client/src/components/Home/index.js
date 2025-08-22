import { FiSearch, FiClock, FiPlusCircle } from "react-icons/fi";
import { MdOutlineVerifiedUser, MdLockOutline } from "react-icons/md";
import "./style.css";

const Home = () => (
  <div className="container center">
    <div className="home-container">
      <h1>Find Trusted Doctors.</h1>
      <h1>Book Appointments Instantly.</h1>

      <p className="home-description">
        Our platform connects patients with verified healthcare professionals
        across multiple specialities. Search, view profiles, and book
        appointments with ease, all in one place. Your health, our priority.
      </p>

      <div className="home-features">
        <p className="align-center">
          <MdOutlineVerifiedUser size={20} style={{ marginRight: "4px" }} />
          100% verified doctors
        </p>
        <p className="align-center">
          <FiClock size={20} style={{ marginRight: "4px" }} />
          Book online anytime
        </p>
        <p className="align-center">
          <FiPlusCircle size={20} style={{ marginRight: "4px" }} /> Wide range
          of specialities
        </p>
        <p className="align-center">
          <MdLockOutline size={20} style={{ marginRight: "4px" }} />
          Secure & private
        </p>
      </div>

      <div className="home-btn-container">
        <a href="/doctor" className="btn btn-blue align-center">
          <FiSearch size={15} style={{ marginRight: "4px" }} />
          Search for Doctors
        </a>
      </div>
    </div>
  </div>
);

export default Home;
