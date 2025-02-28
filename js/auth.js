document.getElementById("signupForm").addEventListener("submit", async function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm_password").value;
  const phone = document.getElementById("phone").value;

  if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
  }

  const userData = { name, email, password, phone };

  try {
      const response = await fetch("https://homyhut-houserent-backend.onrender.com/user/register/", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(userData),
      });

      const data = await response.json();
      if (response.ok) {
          alert("Registration successful! Please check your email for verification.");
          window.location.href = "login.html"; 
      } else {
          alert(data.message || "Registration failed!");
      }
  } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
  }
});
