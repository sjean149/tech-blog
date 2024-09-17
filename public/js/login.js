
const loginFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });
    
    if (response.ok) {
      const responseData = await response.json();
      console.log('Response:', responseData.message);
      document.location.replace('/');
    } else {
      console.log('Failed to log in:', response.statusText);
    }

  }
};




const signupFormHandler = async (event) => {
  event.preventDefault();

  console.log(`Sign Up client calleldd`);
  const username = document.querySelector('#username-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  console.log(`Client: Username: ${username}, Email: ${email}, Password: ${password}`);

  if (username && email && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ username, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(`Failed to sign up! ${response.statusText}`);
    }
  }
};



document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);

document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);

console.log("Login.js")