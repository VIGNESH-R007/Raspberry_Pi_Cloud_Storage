// Smooth scroll for nav links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Copy command on click with tooltip
document.querySelectorAll('.command').forEach(command => {
  command.addEventListener('click', () => {
    const text = command.innerText;
    navigator.clipboard.writeText(text).then(() => {
      command.classList.add('show-tooltip');
      command.style.backgroundColor = '#c1f0d6';
      setTimeout(() => {
        command.classList.remove('show-tooltip');
        command.style.backgroundColor = '#eaeff7';
      }, 1200);
    }).catch(err => {
      console.error('Copy failed:', err);
    });
  });
});
