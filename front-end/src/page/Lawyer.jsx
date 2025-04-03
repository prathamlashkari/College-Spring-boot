import React, { useState } from "react";
import "../style/Lawyer.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { lawyers } from "../constant/Lawyer";

const Lawyer = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [bookingType, setBookingType] = useState("");
  const [selectedLawyer, setSelectedLawyer] = useState(null);
  const [selectedDate, setSelectedDate] = useState(""); // Selected Date
  const [selectedTime, setSelectedTime] = useState(""); // Selected Time
  const [selectedDay, setSelectedDay] = useState(""); // Selected Day

  // Filter lawyers based on specialty
  const filteredLawyers = lawyers.filter((lawyer) =>
    lawyer.specialty.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Function to handle booking confirmation
  const handleBooking = (lawyer, type) => {
    setSelectedLawyer(lawyer);
    setBookingType(type);
    setShowPopup(true);
    setSelectedDate("");
    setSelectedTime("");
    setSelectedDay("");
  };

  // Function to update the selected date and determine the day
  const handleDateChange = (event) => {
    const dateValue = event.target.value;
    setSelectedDate(dateValue);

    if (dateValue) {
      const dayName = new Date(dateValue).toLocaleDateString("en-US", {
        weekday: "long",
      });
      setSelectedDay(dayName);
    }
  };

  // Function to confirm booking
  const confirmBooking = () => {
    if (!selectedDate || !selectedTime) {
      toast.error("Please select both date and time before booking!");
      return;
    }

    toast.success(
      `${bookingType} booked with ${selectedLawyer.name} on ${selectedDay}, ${selectedDate} at ${selectedTime}!`
    );
    setShowPopup(false);
  };

  return (
    <div className="lawyer-container">
      {/* Search Bar */}
      <input
        type="text"
        className="lawyer-search"
        placeholder="Search by specialty..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Lawyer Cards */}
      <div className="lawyer-cards">
        {filteredLawyers.length > 0 ? (
          filteredLawyers.map((lawyer) => (
            <div key={lawyer.id} className="lawyer-card">
              <img src={lawyer.image} alt={lawyer.name} />
              <h3>{lawyer.name}</h3>
              <p>
                <strong>Specialty:</strong> {lawyer.specialty}
              </p>
              <p>
                <strong>Experience:</strong> {lawyer.experience} years
              </p>
              <p>
                <strong>Call Price:</strong> ${lawyer.callPrice}
              </p>
              <p>
                <strong>Video Call Price:</strong> ${lawyer.videoCallPrice}
              </p>
              <div className="lawyer-buttons">
                <button
                  className="call-btn"
                  onClick={() => handleBooking(lawyer, "Call")}
                >
                  📞 Book Call
                </button>
                <button
                  className="video-call-btn"
                  onClick={() => handleBooking(lawyer, "Video Call")}
                >
                  🎥 Video Call
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No lawyers found for this specialty.</p>
        )}
      </div>

      {/* Confirmation Popup with Date & Time Selection */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-box">
            <h3>Confirm Booking</h3>
            <p>
              Are you sure you want to book a {bookingType} with{" "}
              {selectedLawyer.name}?
            </p>

            {/* Date Selection */}
            <label htmlFor="booking-date">Select Date:</label>
            <input
              type="date"
              id="booking-date"
              value={selectedDate}
              onChange={handleDateChange}
            />

            {/* Show the selected day */}
            {selectedDay && (
              <p>
                <strong>Day:</strong> {selectedDay}
              </p>
            )}

            {/* Time Selection */}
            <label htmlFor="booking-time">Select Time:</label>
            <input
              type="time"
              id="booking-time"
              value={selectedTime}
              onChange={(e) => setSelectedTime(e.target.value)}
            />

            <div className="popup-buttons">
              <button className="confirm-btn" onClick={confirmBooking}>
                Yes
              </button>
              <button
                className="cancel-btn"
                onClick={() => setShowPopup(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Lawyer;
