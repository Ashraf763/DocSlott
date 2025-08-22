import { useEffect, useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import LoadingView from "../LoadingView";

const API_URL = process.env.REACT_APP_API_URI;

const Doctors = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [doctorsData, setDoctorsData] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchDoctorsData = async () => {
      try {
        const response = await axios.get(`${API_URL}`);
        setDoctorsData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchDoctorsData();
  }, []);

  const renderAllDoctors = () => {
    const filteredDoctors = doctorsData.filter(
      (doctor) =>
        doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doctor.specialization.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
      <div className="container">
        <h1>Find trusted doctors. Book appointments instantly.</h1>
        <input
          type="text"
          placeholder="Search by name or specialization..."
          className="search-input-home"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <div className="doctor-grid">
          {filteredDoctors.map((doctor) => (
            <div key={doctor._id} className="doc-card">
              <div className="flex-around">
                <div className="flex">
                  <img src={doctor.image} alt={doctor.name} />

                  <div className="doc-details">
                    <Link to={`/doctor/${doctor._id}`} className="link">
                      <h2 className="doc-name">{doctor.name}</h2>
                    </Link>
                    <p className="each-details">{doctor.specialization}</p>
                    <p className="each-details">{doctor.experience}</p>
                    <p className="each-details bold">{doctor.clinic}</p>
                    <p className="each-details">{doctor.fee}</p>
                  </div>
                </div>

                <div className="book-btn-container">
                  <p className="status">{doctor.status}</p>
                  {/* <Link to={`/doctor/${doctor._id}`} className="link">
                    <p className="btn btn-blue">View Profile</p>
                  </Link> */}
                  <button
                    type="button"
                    className="btn btn-blue"
                    onClick={() => navigate(`/doctor/${doctor._id}`)}
                  >
                    View Profile
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderNoDoctorFound = () => (
    <div className="container flex-cen">
      <div className="not-found">
        <h2>No doctor found... try with another keyword</h2>
        <a href="/" className="btn btn-blue">
          Home
        </a>
      </div>
    </div>
  );

  return (
    <>
      {isLoading ? (
        <LoadingView />
      ) : doctorsData ? (
        renderAllDoctors()
      ) : (
        renderNoDoctorFound()
      )}
    </>
  );
};

export default Doctors;
