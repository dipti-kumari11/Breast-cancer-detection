// script.js
document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Here, you would typically send a request to the server for authentication
    // and handle the response accordingly.

    // For demonstration purposes, we'll just display an alert.
    if (username === 'admin' && password === 'password') {
        alert('Login successful! Redirecting to the dashboard...');
        // You can add a redirect here.
    } else {
        alert('Invalid username or password. Please try again.');
    }
});
