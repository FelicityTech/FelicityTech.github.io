// add JavaScript for the landing page here
    // get the login and register links
    const loginLink = document.querySelector('header .login');
    const registerLink = document.querySelector('header .register');
    
    // add a click event listener to the login link
    loginLink.addEventListener('click', (event) => {
      event.preventDefault();
      // show the login form and hide the landing page
      loginForm.style.display = 'block';
      landingPage.style.display = 'none';
    });
    
    // add a click event listener to the register link
    registerLink.addEventListener('click', (event) => {
      event.preventDefault();
      // show the register form and hide the landing page
      registerForm.style.display = 'block';
      landingPage.style.display = 'none';
    })
    
    // get the login form
    const loginForm = document.getElementById('login-form');
    
    // add a submit event listener to the login form
    loginForm.addEventListener('submit', (event) => {
      event.preventDefault();
      // get the form data
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
      // validate the form data
      if (!username || !password) {
        alert('Please fill out all fields');
        return;
      }

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
          // show the trading page and hide the login form
          tradingPage.style.display = 'block';
          loginForm.style.display = 'none';
        } else {
          // display an error message
          alert (data.message);
        }
      });
    });

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