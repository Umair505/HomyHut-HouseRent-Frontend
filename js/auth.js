document.getElementById('signupForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
      confirm_password: e.target.confirm_password.value,
      phone: e.target.phone.value
    };
  
    try {
      const response = await fetch('https://homyhut-houserent-backend.onrender.com/user/register/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
  
      const data = await response.json();
      
      if (response.ok) {
        // Handle successful registration
        window.location.href = '/login';
      } else {
        // Handle errors
        console.error(data);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  });