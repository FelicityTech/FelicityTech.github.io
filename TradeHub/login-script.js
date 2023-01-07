  // get the login form
  const loginForm = document.getElementById('login-form');

  // add a submit event listener to the login form
  loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    // get the form data
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    // make a POST request to the /login endpoint
    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'username': username,
        'password': password
      })
    })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        // login successful, redirect to the home page
        window.location.href = '/';
      } else {
        // login unsuccessful, display an error message
        alert('Invalid username or password');
      }
    });
  });