import React from "react";
import "../style/Profile.css";
import img from "../assets/images.png";
import { lawyerUser, normalUser } from "../constant/Profile";
const Profile = () => {
  const user = lawyerUser;
  return (
    <div className="profile-container">
      {/* Profile Image */}
      <img src={img} alt={user.name} className="profile-image" />

      {/* User Details */}
      <h2>{user.name}</h2>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <p>
        <strong>Mobile:</strong> {user.mobile}
      </p>

      {/* Display based on role */}
      {user.role === "lawyer" ? (
        <>
          <p>
            <strong>Specialty:</strong> {user.specialty}
          </p>
          <p>
            <strong>Experience:</strong> {user.experience} years
          </p>
          <p>
            <strong>Appointments Received:</strong> {user.appointments.length}
          </p>
        </>
      ) : (
        <>
          <p>
            <strong>Appointments Booked:</strong> {user.appointments.length}
          </p>
          <p>
            <strong>Preferred Consultation Type:</strong>{" "}
            {user.consultationType}
          </p>
        </>
      )}

      <div className="appointments-section">
        <h3>
          {user.role === "lawyer"
            ? "Appointments Received"
            : "Appointments Booked"}
        </h3>
        {user.appointments.length > 0 ? (
          <ul>
            {user.appointments.map((appointment, index) => (
              <li key={index}>
                {user.role === "lawyer" ? (
                  <>
                    <p>
                      <strong>Client:</strong> {appointment.clientName}
                    </p>
                    <p>
                      <strong>Date:</strong> {appointment.date}
                    </p>
                    <p>
                      <strong>Time:</strong> {appointment.time}
                    </p>
                    <p>
                      <strong>Type:</strong> {appointment.type}
                    </p>
                  </>
                ) : (
                  <>
                    <p>
                      <strong>Lawyer:</strong> {appointment.lawyerName}
                    </p>
                    <p>
                      <strong>Specialty:</strong> {appointment.lawyerSpecialty}
                    </p>
                    <p>
                      <strong>Date:</strong> {appointment.date}
                    </p>
                    <p>
                      <strong>Time:</strong> {appointment.time}
                    </p>
                    <p>
                      <strong>Type:</strong> {appointment.type}
                    </p>
                  </>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <p>No appointments yet.</p>
        )}
      </div>
    </div>
  );
};

export default Profile;
