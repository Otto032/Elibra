
  const switchToggle = document.getElementById('theme-switch');
  const themeLabel = document.getElementById('theme-label');

  // Load theme preference
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark');
    switchToggle.checked = true;
    themeLabel.textContent = 'Dark Mode';
  }

  switchToggle.addEventListener('change', () => {
    if (switchToggle.checked) {
      document.body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      themeLabel.textContent = 'Dark Mode';
    } else {
      document.body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      themeLabel.textContent = 'Light Mode';
    }
  });




