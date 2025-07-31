import { BrowserRouter, Routes, Route } from "react-router-dom";

import DoctorProfile from "./components/DoctorProfile";
import Home from "./components/Home";
import BookAppointment from "./components/BookAppointment";
import NotFound from "./components/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctor-profile" element={<DoctorProfile />} />
        <Route path="/book-appointment" element={<BookAppointment />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
