import {

  BrowserRouter,

  Routes,

  Route

} from "react-router-dom";

import AppointmentDetails
from "./AppointmentDetails";

import DoctorPatientDetails
from "./DoctorPatientDetails";

import DoctorList
from "./DoctorList";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route

          path="/"

          element={<DoctorList />}

        />

        <Route

          path="/patients/:patientId/appointments/:appointmentId"

          element={<AppointmentDetails />}

        />

        <Route

          path="/doctors/:doctorId/patients/:patientId"

          element={<DoctorPatientDetails />}

        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;