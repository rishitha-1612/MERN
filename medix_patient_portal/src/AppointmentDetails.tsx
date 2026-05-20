import { useParams }
from "react-router-dom";

interface AppointmentParams {

  patientId: string;

  appointmentId: string;
}

const AppointmentDetails = () => {

  const {

    patientId,

    appointmentId

  } = useParams<AppointmentParams>();

  if (
    !patientId ||
    !appointmentId
  ) {

    return (
      <h1>
        Missing parameters
      </h1>
    );
  }

  const apptId =
    Number(appointmentId);

  if (isNaN(apptId)) {

    return (
      <h1>
        Invalid Appointment ID
      </h1>
    );
  }

  return (

    <div className="card">

      <h1>
        Appointment Details
      </h1>

      <h2>
        Patient ID:
        {" "}
        {patientId}
      </h2>

      <h2>
        Appointment ID:
        {" "}
        {apptId}
      </h2>

    </div>
  );
};

export default AppointmentDetails;