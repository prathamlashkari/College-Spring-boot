export const lawyerUser = {
  name: "John Doe",
  email: "john@example.com",
  mobile: "+1234567890",
  image: "profile.jpg",
  role: "lawyer",
  specialty: "Criminal Lawyer",
  experience: 10,
  appointments: [
    { clientName: "Alice Johnson", date: "2025-06-05", time: "10:00 AM", type: "Call" },
    { clientName: "Michael Smith", date: "2025-06-06", time: "02:00 PM", type: "Video Call" },
    { clientName: "Sophia Brown", date: "2025-06-07", time: "11:30 AM", type: "Call" },
    { clientName: "James Anderson", date: "2025-06-08", time: "04:00 PM", type: "Video Call" },
    { clientName: "Olivia Wilson", date: "2025-06-09", time: "09:15 AM", type: "Call" },
  ],
};
export const normalUser = {
  name: "Jane Smith",
  email: "jane@example.com",
  mobile: "+9876543210",
  image: "profile.jpg",
  role: "user",
  consultationType: "Video Call",
  appointments: [
    {
      lawyerName: "John Doe",
      lawyerSpecialty: "Criminal Lawyer",
      date: "2024-04-07",
      time: "02:00 PM",
      type: "Video Call",
    },
  ],
};
