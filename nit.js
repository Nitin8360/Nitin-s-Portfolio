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

  //Profile Card
   // Share button functionality
    document.getElementById("shareBtn").addEventListener("click", () => {
      if (navigator.share) {
        navigator.share({
          title: "Untold Coding",
          text: "Check out this amazing web developer!",
          url: window.location.href
        }).catch((err) => console.log("Sharing failed:", err));
      } else {
        alert("Sharing not supported on this device.");
      }
    });

    // Menu toggle functionality
    const menuBtn = document.getElementById("menuBtn");
    const menuModal = document.getElementById("menuModal");

    menuBtn.addEventListener("click", () => {
      menuModal.classList.toggle("show");
    });

    // Click outside modal to close
    document.addEventListener("click", (e) => {
      if (!menuModal.contains(e.target) && e.target.id !== "menuBtn") {
        menuModal.classList.remove("show");
      }
    });