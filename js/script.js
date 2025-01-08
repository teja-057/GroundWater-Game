document.addEventListener("DOMContentLoaded", () => {
    console.log("Groundwater Conservation Game loaded!");
  
    // Smooth scrolling for Navbar links
    document.querySelectorAll('.navbar a').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        // Get the target section by id
        const targetSection = document.querySelector(this.getAttribute('href'));
        
        if (targetSection) {
          // Scroll to the target section with smooth behavior
          window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth',
          });
        }
      });
    });
  
    // Toggle Login/Register forms
    window.toggleForms = () => {
      document.getElementById("loginForm").classList.toggle("d-none");
      document.getElementById("registerForm").classList.toggle("d-none");
    };
  });
  // script.js

  function toggleForms() {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    loginForm.classList.toggle('d-none');
    registerForm.classList.toggle('d-none');
  }
  
  // Registration Form Submission
document.getElementById('register').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const email = document.getElementById('regEmail').value;
  const username = document.getElementById('regUsername').value;
  const password = document.getElementById('regPassword').value;

  fetch('http://localhost:3000/register', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, username, password })
  })
  .then(response => response.json())
  .then(data => {
      // Store user data in session storage
      sessionStorage.setItem('user', JSON.stringify(data));
      window.location.href = 'ProfilePage.html'; // Redirect to Profile Page
  })
  .catch(error => console.error('Error:', error));
});

// Login Form Submission
document.getElementById('login').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;

  fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
  })
  .then(response => response.json())
  .then(data => {
      // Store user data in session storage
      sessionStorage.setItem('user', JSON.stringify(data));
      window.location.href = 'ProfilePage.html'; // Redirect to Profile Page
  })
  .catch(error => console.error('Error:', error));
});
