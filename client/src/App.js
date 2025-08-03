import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Header from "./components/Header";
import Home from "./components/Home";
import DoctorProfile from "./components/DoctorProfile";
import BookAppointment from "./components/BookAppointment";
import NotFound from "./components/NotFound";
import MyAppointments from "./components/MyAppointments";

import MotionWrapper from "./components/MotionWrapper";

function App() {
  return (
    <BrowserRouter>
      <AnimatePresence>
        <Header />

        <Routes>
          <Route
            path="/"
            element={
              <MotionWrapper>
                <Home />
              </MotionWrapper>
            }
          />
          <Route
            path="/doctor/:id"
            element={
              <MotionWrapper>
                <DoctorProfile />
              </MotionWrapper>
            }
          />
          <Route
            path="/book/:id"
            element={
              <MotionWrapper>
                <BookAppointment />
              </MotionWrapper>
            }
          />
          <Route
            path="/my-appointments"
            element={
              <MotionWrapper>
                <MyAppointments />
              </MotionWrapper>
            }
          />
          <Route
            path="*"
            element={
              <MotionWrapper>
                <NotFound />
              </MotionWrapper>
            }
          />
        </Routes>
      </AnimatePresence>
    </BrowserRouter>
  );
}

export default App;
