import { useParams }
from "react-router-dom";

interface DoctorPatientParams {

  doctorId: string;

  patientId: string;
}

const DoctorPatientDetails = () => {

  const {

    doctorId,

    patientId

  } = useParams<DoctorPatientParams>();

  if (
    !doctorId ||
    !patientId
  ) {

    return (
      <h1>
        Missing Parameters
      </h1>
    );
  }

  const doctor =
    Number(doctorId);

  const patient =
    Number(patientId);

  if (
    isNaN(doctor) ||
    isNaN(patient)
  ) {

    return (
      <h1>
        IDs must be numeric
      </h1>
    );
  }

  return (

    <div className="card">

      <h1>
        Doctor Patient Details
      </h1>

      <h2>
        Doctor ID:
        {" "}
        {doctor}
      </h2>

      <h2>
        Patient ID:
        {" "}
        {patient}
      </h2>

    </div>
  );
};

export default DoctorPatientDetails;