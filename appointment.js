document.addEventListener("DOMContentLoaded", function() {
    const params = new URLSearchParams(window.location.search);
    const doctorName = params.get("doctor");
    if (doctorName) {
      document.getElementById("doctor").value = doctorName;
      const doctorInfo = doctors.find(doctor => doctor.name === doctorName);
      if (doctorInfo) {
        const doctorInfoDiv = document.getElementById("doctor-info");
        doctorInfoDiv.innerHTML = `
          <img src="${doctorInfo.image}" alt="${doctorInfo.name}">
          <h2>${doctorInfo.name}</h2>
          <p><strong>Specialization:</strong> ${doctorInfo.specialization}</p>
          <p><strong>Experience:</strong> ${doctorInfo.experience} years</p>
        `;
      }
    }
  
    const form = document.getElementById("appointment-form");
  
    form.addEventListener("submit", function(event) {
      event.preventDefault();
  
      // Gather form data
      const formData = new FormData(form);
      const appointmentData = {};
      formData.forEach((value, key) => {
        appointmentData[key] = value;
      });
  
      // Here you can handle the form data as needed, e.g., send it to a server for processing
  
      // For demonstration, we'll just log the data to console
      console.log("Appointment Data:", appointmentData);
  
      // Redirect to a confirmation page or any other desired page
      window.location.href = "confirmation.html";
    });
  });
  