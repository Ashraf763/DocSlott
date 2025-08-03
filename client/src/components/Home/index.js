import { useEffect, useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import axios from "axios";

// const doctorsData = [
//   {
//     id: 1,
//     name: "Dr. John Smith",
//     specialization: "Cardiology",
//     image: "/def-image.png",
//     status: "Available Today",
//     details: "Experienced cardiologist with over 15 years in heart care.",
//     qualifiction: "BDS, MDS - Prosthodontics",
//     experience: "29 years experience overall",
//     fee: "500 Consultation fee at clinic",
//     clinic: "Infinit Dental Solutions",
//     schedule: [
//       { date: "2025-08-02", times: ["09:00", "10:00", "11:00"] },
//       { date: "2025-08-03", times: ["14:00", "15:00"] },
//     ],
//   },
//   {
//     id: 2,
//     name: "Dr. Emily Johnson",
//     specialization: "Pediatrics",
//     image: "/def-image.png",
//     status: "Fully Booked",
//     qualifiction: "MBBS, AFIH, Advanced certificate in critical care medicine",
//     experience: "29 years experience overall",
//     details: "Pediatrician specializing in child health and development.",
//     fee: "500 Consultation fee at clinic",
//     clinic: "Infinit Dental Solutions",
//     schedule: [],
//   }
// ];

const API_URL = process.env.REACT_APP_API_URI;

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [doctorsData, setDoctorsData] = useState("");
  const [isLoading, setIsLoading] = useState(true);

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
        <h1>Find a Doctor</h1>
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
                  <a href={`/doctor/${doctor._id}`} className="btn btn-blue">
                    View Profile
                  </a>
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
        <p>Loading...</p>
      ) : doctorsData ? (
        renderAllDoctors()
      ) : (
        renderNoDoctorFound()
      )}
    </>
  );
};

export default Home;
