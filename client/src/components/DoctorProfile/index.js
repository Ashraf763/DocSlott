import { useEffect, useState } from "react";
import "./style.css";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

// const doctor = {
//   id: 11,
//   name: "Dr. John Smith",
//   specialization: "Cardiology",
//   image: "/def-image.png",
//   status: "Available Today",
//   details: "Experienced cardiologist with over 15 years in heart care.",
//   qualifiction: "BDS, MDS - Prosthodontics",
//   experience: "29 years experience overall",
//   fee: "500 Consultation fee at clinic",
//   clinic: "Infinit Dental Solutions",
//   schedule: [
//     { date: "2025-08-02", times: ["09:00", "10:00", "11:00"] },
//     { date: "2025-08-03", times: ["14:00", "15:00"] },
//   ],
// };

const API_URL = process.env.REACT_APP_API_URI;

const DoctorProfile = () => {
  const [doctor, setDoctor] = useState("");
  const [date, setDate] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    const fetchDoctor = async () => {
      try {
        const response = await axios.get(`${API_URL}/${id}`);
        setDoctor(response.data);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDoctor();
  }, [id]);

  const handleBooking = () => {
    if (date === "") {
      setError("Please select a date");
    } else {
      setError("");
      const dataToSend = {
        id: doctor._id,
        name: doctor.name,
        date: date,
      };
      navigate(`/book/${doctor._id}`, { state: dataToSend });
    }
  };

  const renderDoctorDetails = () => (
    <div className="container">
      <div className="profile-container">
        <img
          src={doctor.image}
          alt={doctor.name}
          className="doctor-img-profile"
        />

        <div className="doc-profile-details">
          <h2>{doctor.name}</h2>
          <p className="each-details">{doctor.qualifiction}</p>
          <p className="each-details">{doctor.experience}</p>

          <p className="mar-top each-details">{doctor.details}</p>

          <p className="each-details error-msg">
            <strong>Specialization:</strong> {doctor.specialization}
          </p>
          <p className="each-details green">
            <strong>Status:</strong> {doctor.status}
          </p>

          <p className="each-details">
            <strong>Schedule:</strong>
          </p>

          {doctor.schedule.length === 0 ? (
            <p>No Slots Available</p>
          ) : (
            <div className="time-con">
              {doctor.schedule.map((slot, index) => (
                <div className="time-container" key={index}>
                  <p className="slot-date">{slot.date}</p>

                  <select
                    className="select"
                    onChange={(e) => setDate(e.target.value)}
                  >
                    <option value="" key={index}>
                      --Please choose an option--
                    </option>
                    {slot.times.map((time, index) => (
                      <option value={`${time} ${slot.date}`} key={`1${index}`}>
                        {time}
                      </option>
                    ))}
                  </select>
                </div>
              ))}
            </div>
          )}
          {error && <p className="error-msg">* {error}</p>}

          <button
            type="button"
            onClick={handleBooking}
            className="btn btn-blue"
          >
            Book Appointment
          </button>
        </div>
      </div>
    </div>
  );

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
        <p>loading...</p>
      ) : doctor ? (
        renderDoctorDetails()
      ) : (
        renderNoDoctorFound()
      )}
    </>
  );
};

export default DoctorProfile;
