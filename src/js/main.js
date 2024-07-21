let subMenu = document.getElementById('subMenu');
let loginButton = document.getElementById('loginButton');
let profileButton = document.getElementById('profileButton');
let isLoggedIn   = false;

function toggleMenu() {
  if (!isLoggedIn) {
    // Simulate login
    isLoggedIn = true;
    loginButton.style.display = 'none';
    profileButton.style.display = 'flex';
    localStorage.setItem('isLoggedIn', true);
  }
  subMenu.classList.toggle('open-menu');
}

document.addEventListener('DOMContentLoaded', () => {
  const isLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn'));

  if (isLoggedIn === true) {
    document.getElementById('loginButton').style.display = 'none';
    document.getElementById('profileButton').style.display = 'flex';
  } else {
    document.getElementById('loginButton').style.display = 'flex';
    document.getElementById('profileButton').style.display = 'none';
  }
});

document.addEventListener('DOMContentLoaded', () => {
  // Get the logout link element
  const logoutLink = document.getElementById('logOut');

  if (logoutLink) {
    logoutLink.addEventListener('click', (event) => {
      event.preventDefault(); // Prevent the default link behavior

      // Remove the 'isLoggedIn' item from localStorage
      localStorage.removeItem('isLoggedIn');

      // Redirect to home page or login page
      window.location.href = '../../index.html'; 
    });
  }
});

// Close the menu when clicking outside
document.addEventListener('click', function(event) {
  if (!profileButton.contains(event.target) && isLoggedIn) {
    subMenu.classList.remove('open-menu');
  }
});