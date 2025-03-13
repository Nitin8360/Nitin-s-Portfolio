document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(e.target.getAttribute('href'));
      target.scrollIntoView({ behavior: 'smooth' });
    });
  });
  // Set percentage dynamically for each skill circle
document.querySelectorAll('.circle').forEach(circle => {
    const percentage = circle.getAttribute('data-percentage');
    circle.style.setProperty('--percentage', percentage);
  });
  
  const toggleBtn = document.getElementById("theme-toggle");
  const body = document.body;
  
  // Check saved theme from localStorage
  if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-theme");
  }
  
  toggleBtn.addEventListener("click", () => {
    body.classList.toggle("dark-theme");
  
    // Save user preference
    if (body.classList.contains("dark-theme")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  });
