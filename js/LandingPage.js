document.addEventListener("DOMContentLoaded", function () {
  // Your JavaScript functions to handle the popup form

  // Function to open the popup form
  function openPopup() {
    document.getElementById("popupContainer").style.display = "flex";
  }

  // Function to close the popup form
  function closePopup() {
    document.getElementById("popupContainer").style.display = "none";
  }

  // Function to open the authentication popup after entering transfer details
  function openAuthPopup() {
    // Get the values from the input fields in the first popup
    var accountNumber = document.getElementById("accountNumber").value;
    var destinationBank = document.getElementById("destinationBank").value;

    // Check if either field is empty
    if (accountNumber === "" || destinationBank === "") {
      alert("Please input the necessary details.");
    } else {
      document.getElementById("transferPopup").style.display = "none"; // Hide the first popup
      document.getElementById("authPopup").style.display = "flex"; // Show the authentication popup
    }
  }

  // Function to close the authentication popup and the transfer popup
  function closeAuthPopup() {
    document.getElementById("authPopup").style.display = "none"; // Hide the authentication popup
    document.getElementById("transferPopup").style.display = "none"; // Hide the transfer popup

    // Navigate to LandingPage.html
    window.location.href = "../LandingPage.html";
  }

  // Function to perform the transfer
  function performTransfer() {
    // Get the values from the input fields in the authentication popup
    var authCode = document.getElementById("authCode").value;

    // Check if the authentication code field is empty
    if (authCode === "") {
      alert("Please enter the authentication code.");
    } else {
      // Add your transfer logic here
      alert("Transfer performed"); // Placeholder for demonstration
      closeAuthPopup(); // Close the authentication popup after performing the transfer
    }
  }

  // Event listener to open the first popup when "Transfer" in the navbar is clicked
  document.getElementById("transferLink").addEventListener("click", openPopup);

  // Event listener to open the first popup when "Transfer" in the menu bar is clicked
  document.getElementById("transferLinkMenu").addEventListener("click", openPopup);
});
