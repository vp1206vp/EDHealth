document.addEventListener("DOMContentLoaded", function() {
    const doctors = [
      { name: "Dr. Neha Sharma", specialization: "Cardiologist", experience: 15, Languages:"English, Hindi", image: "d1.jpeg" },
      { name: "Dr. Jane Smith", specialization: "Dermatologist", experience: 10,Languages:"English, French", image:"th.jpeg"},
      { name: "Dr. Rahul Iyer", specialization: "Pediatrician", experience: 12,Languages:"Tamil, English, Hindi",image:"d3.jpg"},
      { name: "Dr. Varun Tej", specialization: "Oncologist", experience: 20,Languages:"Telugu, Marathi, English" , image:"d4.jpeg"},
      { name: "Dr. Muskan Kapoor", specialization: "Neurologist", experience: 18,Language:"Hindi, English", image:"d5.jpg"}
    ];
  
    const doctorsList = document.getElementById("doctors-list");
  
    doctors.forEach(doctor => {
      const doctorDiv = document.createElement("div");
      doctorDiv.classList.add("doctor");
      doctorDiv.innerHTML = `
        <img src="${doctor.image}" alt="${doctor.name}">
        <h2>${doctor.name}</h2>
        <p><strong>Specialization:</strong> ${doctor.specialization}</p>
        <p><strong>Experience:</strong> ${doctor.experience} years</p>
        <button class="appointment-button" data-doctor="${doctor.name}">Book an Appointment</button>
      `;
      doctorsList.appendChild(doctorDiv);
    });
  
    doctorsList.addEventListener("click", function(event) {
      if (event.target.classList.contains("appointment-button")) {
        const selectedDoctor = event.target.dataset.doctor;
        window.location.href = `appointment.html?doctor=${encodeURIComponent(selectedDoctor)}`;
      }
    });
  });
  