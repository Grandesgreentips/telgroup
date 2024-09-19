document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission for now

  const password = document.getElementById('password').value;
  const notification = document.getElementById('notification');

  // Define the correct password
  const validPassword = "4589viP@"; // Replace with your actual correct password

  // Define messages for different passwords (optional)
  const passwordMessages = {
    "4589viP@": "correto",
    "9403viP@": "expirado",
    "7647viP@": "não está correto",
  };

  // Clear previous notification
  notification.textContent = '';

  if (password === validPassword) {
    notification.textContent = passwordMessages[validPassword];
    notification.style.color = "green";
    // Here you can redirect to the next page or perform any other action
    setTimeout(function() {
      window.location.href = "next.html"; // Replace with your actual next page URL
    }, 1000); // Redirect after 3 seconds (3000 milliseconds)
  } else if (passwordMessages[password]) {
    notification.textContent = passwordMessages[password];
    notification.style.color = "orange"; // Adjust color for other messages
  } else {
    notification.textContent = "Senha incorreta, tente novamente!";
    notification.style.color = "red";
  }
});
