import { useState } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

const doctor = {
  id: 11,
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
};

const DoctorProfile = () => {
  const [date, setDate] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleBooking = () => {
    if (date === "") {
      setError("Please select a date");
    } else {
      setError("");
      navigate(`/book/${doctor.id}`, { state: date });
    }
    date === "" ? setError("Please select a date") : setError("");
  };

  return (
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
                <div className="time-container">
                  <p className="slot-date">{slot.date}</p>

                  <select
                    className="select"
                    onChange={(e) => setDate(e.target.value)}
                  >
                    <option value="" key={index}>
                      --Please choose an option--
                    </option>
                    {slot.times.map((time, index) => (
                      <option value={`${time} ${slot.date}`} key={`${time}`}>
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
};

export default DoctorProfile;
