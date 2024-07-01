// Smooth scrolling for the navigation links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Fade in text when scrolling down
window.addEventListener('scroll', function() {
  const textElements = document.querySelectorAll('.fade-in-text');
  textElements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (elementTop < windowHeight) {
      element.style.opacity = 1;
    }
  });
});