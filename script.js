// Search functionality
document.getElementById('search-btn').addEventListener('click', () => {
    const searchTerm = document.getElementById('search').value;
    if (searchTerm) {
      alert(`Searching for: ${searchTerm}`);
    } else {
      alert('Please enter a search term.');
    }
  });
  
  // Login and Sign Up button click events
  document.getElementById('login').addEventListener('click', () => {
    alert('Login clicked.');
  });
  
  document.getElementById('signin').addEventListener('click', () => {
    alert('Sign Up clicked.');
  });
  
  // Ticket details functionality
  function showDetails(ticketName) {
    alert(`You selected: ${ticketName}`);
  }
  