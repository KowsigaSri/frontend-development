// Simulated service response (mock API data)
const userDataFromService = {
    name: "XYZ",
    email: "xyz@gmail.com",
    phone: "9876543210",
    location: "Chennai, India"
}; 


// Prefill form on page load
window.addEventListener("DOMContentLoaded", () => {
    document.getElementById("name").value = userDataFromService.name;
    document.getElementById("email").value = userDataFromService.email;
    document.getElementById("phone").value = userDataFromService.phone;
    document.getElementById("location").value = userDataFromService.location;
});


// Handle form submission
document.getElementById("profileForm").addEventListener("submit", function (e) {
    e.preventDefault();


    const updatedProfile = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        location: document.getElementById("location").value
    };


    console.log("Updated Profile:", updatedProfile);


    document.getElementById("statusMsg").textContent = 
        "Profile updated successfully!";
});


