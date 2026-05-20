import { Link }
from "react-router-dom";

const DoctorList = () => {

  return (

    <div className="card">

      <h1>
        Medix Patient Portal
      </h1>

      <Link
        to="/patients/101/appointments/500"
      >

        View Appointment

      </Link>

      <br />

      <br />

      <Link
        to="/doctors/1/patients/200"
      >

        View Doctor Patient Details

      </Link>

    </div>
  );
};

export default DoctorList;