const toggleBtn = document.getElementById('toggleThemeBtn');
const body = document.body;

// Load saved theme from localStorage on page load
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
  }
});

// Toggle theme on button click
toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');

  // Save current theme
  const isDark = body.classList.contains('dark-mode');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');

  // Trigger button animation
  toggleBtn.classList.add('clicked');
  setTimeout(() => {
    toggleBtn.classList.remove('clicked');
  }, 400);
});
