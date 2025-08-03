import { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";

const doctorsData = [
  {
    id: 1,
    name: "Dr. John Smith",
    specialization: "Cardiology",
    image: "/def-image.png",
    status: "Available Today",
    details: "Experienced cardiologist with over 15 years in heart care.",
    qualifiction: "BDS, MDS - Prosthodontics",
    experience: "29 years experience overall",
    fee: "500 Consultation fee at clinic",
    clinic: "Infinit Dental Solutions",
    schedule: [
      { date: "2025-08-02", times: ["09:00", "10:00", "11:00"] },
      { date: "2025-08-03", times: ["14:00", "15:00"] },
    ],
  },
  {
    id: 2,
    name: "Dr. Emily Johnson",
    specialization: "Pediatrics",
    image: "/def-image.png",
    status: "Fully Booked",
    qualifiction: "MBBS, AFIH, Advanced certificate in critical care medicine",
    experience: "29 years experience overall",
    details: "Pediatrician specializing in child health and development.",
    fee: "500 Consultation fee at clinic",
    clinic: "Infinit Dental Solutions",
    schedule: [],
  },
  {
    id: 3,
    name: "Dr. Michael Lee",
    specialization: "Neurology",
    image: "/def-image.png",
    status: "Available Today",
    details:
      "Neurologist with expertise in brain and nervous system disorders.",
    qualifiction: "MBBS, AFIH, Advanced certificate in critical care medicine",
    experience: "29 years experience overall",
    fee: "500 Consultation fee at clinic",
    clinic: "Infinit Dental Solutions",
    schedule: [
      { date: "2025-08-02", times: ["13:00", "14:00"] },
      { date: "2025-08-04", times: ["10:00", "11:00"] },
    ],
  },
  {
    id: 4,
    name: "4 John Smith",
    specialization: "Cardiology",
    image: "/def-image.png",
    status: "Available Today",
    details: "Experienced cardiologist with over 15 years in heart care.",
    qualifiction: "MBBS, AFIH, Advanced certificate in critical care medicine",
    experience: "29 years experience overall",
    fee: "500 Consultation fee at clinic",
    clinic: "Infinit Dental Solutions",
    schedule: [
      { date: "2025-08-02", times: ["09:00", "10:00", "11:00"] },
      { date: "2025-08-03", times: ["14:00", "15:00"] },
    ],
  },
  {
    id: 5,
    name: "5 Emily Johnson",
    specialization: "Pediatrics",
    image: "/def-image.png",
    status: "Fully Booked",
    details: "Pediatrician specializing in child health and development.",
    qualifiction: "MBBS, AFIH, Advanced certificate in critical care medicine",
    experience: "29 years experience overall",
    fee: "500 Consultation fee at clinic",
    clinic: "Infinit Dental Solutions",
    schedule: [],
  },
];

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
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
          <div key={doctor.id} className="doc-card">
            <div className="flex-around">
              <div className="flex">
                <img src={doctor.image} alt={doctor.name} />

                <div className="doc-details">
                  <Link to={`/doctor/:${doctor.id}`} className="link">
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
                <a href={`/doctor/:${doctor.id}`} className="btn btn-blue">
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

export default Home;
