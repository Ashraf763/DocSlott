## Objective

     To create a website where the user can look details of a Doctor and book an appointment.

## Deployed Links

     * frontend (Netlify): https://docslot.netlify.app/
     *backend (vercel): https://doc-slott-r236rpp2s-ashrafs-projects-5f8c37e2.vercel.app/
     *GitHub: https://github.com/Ashraf763/DocSlott

## Tech-Stack

     backend:
     mongoose, expess, cors, dotenv, node.js

     frontend:
     HTML, CSS, JS, react, react-router-dom, axios

## Overview

     DocSlot is a platform to search for Doctors. It provides detailed information of the doctors including their fees, qualification, experience, work-location and their available-schedules, and allow's us to book an appointment in the available slots.

     The platform is designed to be user-friendly, accessible, and scalable, ensuring seamless user-experience.

### Funtionality

# Must Have

     1. **Landing Page:**

    - Display a clear list of doctors.
    - For each doctor, show their **name, specialization, and a profile image**.
    - Indicate their **availability status** (e.g., "Available Today," "Fully Booked," "On Leave").
    - Implement a **search functionality** to filter doctors by name or specialization.

     2. **Doctor Profile Page:**

     - When a user clicks on a doctor from the landing page, navigate to a dedicated profile page.
     - This page should display more detailed information about the doctor.
     - Clearly show their **availability schedule**.
     - Include a prominent **"Book Appointment" button**.

     3. **Book Appointment:**

     - Clicking the "Book Appointment" button should lead to a simple form.
     - The form needs to collect: **Patient Name, Email, and desired Date/Time for the appointment.**
     - Upon submission, provide a **confirmation message** to the user.

### Bonus (Optional Enhancements)

     Consider implementing these features if you have extra time and want to challenge yourself further. These will significantly enhance your application's quality and demonstrate additional skills.

     - **Styling Framework:** Utilize a CSS framework like **Tailwind CSS** (recommended) or another framework of your choice (e.g., Bootstrap, Material-UI) for efficient and consistent styling.
     - **Node.js Express API:** Build a simple backend using **Node.js with Express** to manage doctor data and appointments dynamically.
     - **Form Validation:** Implement client-side validation for the appointment booking form to ensure data integrity and a better user experience.
     - **Responsive Design:** Ensure your application looks and functions well across various screen sizes (mobile, tablet, desktop).

## DocSlot's core features include:

- search bar to search for specific doctor or specialization.
- doctor's profile page with detailed information.
- calendar view to book appointment.
- your appointments.

## DocSlot's technology stack includes:

- Frontend: React, axios and React-Router for a seamless user experience.
- Backend: Node.js, Express.js, and MongoDB for a scalable and secure infrastructure.
- APIs: RESTful APIs for secure data exchange between frontend and backend services.

## Installation

To set up and run this mediCare project locally, follow these steps:

Clone the Repository:
git clone https://github.com/Ashraf763/DocSlott

. Install Dependencies: npm install

```
Start the Server:

# frontEnd:
cd client
npm start

#backend:
cd server
npm start
```
