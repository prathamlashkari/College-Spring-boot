import React, { useState } from "react";
import "../style/Lawyer.css";

const Lawyer = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Expanded Lawyer Data
  const lawyers = [
    {
      id: 1,
      name: "John Doe",
      specialty: "Criminal Lawyer",
      image: "https://via.placeholder.com/80",
    },
    {
      id: 2,
      name: "Jane Smith",
      specialty: "Family Lawyer",
      image: "https://via.placeholder.com/80",
    },
    {
      id: 3,
      name: "David Johnson",
      specialty: "Corporate Lawyer",
      image: "https://via.placeholder.com/80",
    },
    {
      id: 4,
      name: "Emily White",
      specialty: "Immigration Lawyer",
      image: "https://via.placeholder.com/80",
    },
    {
      id: 5,
      name: "Michael Brown",
      specialty: "Tax Lawyer",
      image: "https://via.placeholder.com/80",
    },
    {
      id: 6,
      name: "Sophia Wilson",
      specialty: "Intellectual Property Lawyer",
      image: "https://via.placeholder.com/80",
    },
    {
      id: 7,
      name: "Daniel Martinez",
      specialty: "Personal Injury Lawyer",
      image: "https://via.placeholder.com/80",
    },
    {
      id: 8,
      name: "Olivia Taylor",
      specialty: "Employment Lawyer",
      image: "https://via.placeholder.com/80",
    },
  ];

  // Filter lawyers based on specialty
  const filteredLawyers = lawyers.filter((lawyer) =>
    lawyer.specialty.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
              <p>{lawyer.specialty}</p>
            </div>
          ))
        ) : (
          <p>No lawyers found for this specialty.</p>
        )}
      </div>
    </div>
  );
};

export default Lawyer;
