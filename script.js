//your JS code here. If required.
// Function to get a cookie value by name
function getCookie(name) {
  const cookies = document.cookie.split(';');
  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i].trim();
    if (cookie.startsWith(name + '=')) {
      return cookie.substring(name.length + 1);
    }
  }
  return '';
}

// Function to set a cookie
function setCookie(name, value, days) {
  const d = new Date();
  d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
  const expires = 'expires=' + d.toUTCString();
  document.cookie = name + '=' + value + ';' + expires + ';path=/';
}

// Function to apply the saved preferences from cookies
function applyPreferences() {
  const fontsize = getCookie('fontsize');
  const fontcolor = getCookie('fontcolor');

  if (fontsize) {
    document.documentElement.style.setProperty('--fontsize', fontsize + 'px');
    document.getElementById('fontsize').value = fontsize;
  }

  if (fontcolor) {
    document.documentElement.style.setProperty('--fontcolor', fontcolor);
    document.getElementById('fontcolor').value = fontcolor;
  }
}

// Handle form submission and save preferences as cookies
document.getElementById('preferences-form').addEventListener('submit', function (e) {
  e.preventDefault();
  
  const fontsize = document.getElementById('fontsize').value;
  const fontcolor = document.getElementById('fontcolor').value;

  setCookie('fontsize', fontsize, 7); // Save for 7 days
  setCookie('fontcolor', fontcolor, 7);

  // Apply the changes immediately
  document.documentElement.style.setProperty('--fontsize', fontsize + 'px');
  document.documentElement.style.setProperty('--fontcolor', fontcolor);
});

// Apply preferences on page load
applyPreferences();
