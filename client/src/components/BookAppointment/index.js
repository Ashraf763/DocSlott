import { useState } from "react";
import "./style.css";
import { useLocation } from "react-router-dom";

// const doctor = {
//   id: 10,
//   name: "Dr. Alice Smith",
//   specialization: "Cardiologist",
//   image: "/def-image.png",
//   availability: "Available Today",
//   schedule: ["2025-08-02T10:00", "2025-08-02T14:00"],
// };

const BookAppointment = () => {
  const [form, setForm] = useState({ name: "", email: "", datetime: "" });
  const [submitted, setSubmitted] = useState(false);

  const location = useLocation();
  const { date, name } = location.state;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="confimation-container">
        <p className="confirmation">
          <img src="/icon-correct.svg" alt="correct" className="svg" />
          Appointment confirmed for {form.name} on {date}!
        </p>

        <a href={"/"} className="btn btn-blue">
          Search more doctors
        </a>
      </div>
    );
  }

  return (
    <div className="container box-center col">
      <h2 className="text-center">Book Appointment with {name}</h2>

      <form onSubmit={handleSubmit} className="form" id="bookApointment">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          onChange={handleChange}
        />
        <p>Time: {date}</p>
        <button type="submit" className="btn btn-blue">
          Confirm Appointment
        </button>
      </form>
    </div>
  );
};

export default BookAppointment;
