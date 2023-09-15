document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Basic validation (you can replace this with your own logic)
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "your_username" && password === "your_password") {
      alert("Login successful!");
      // Redirect to another page or perform other actions here
    } else {
      alert("Login failed. Please check your credentials.");
    }
  });
