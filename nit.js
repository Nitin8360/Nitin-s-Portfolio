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


     // Create particle effect
        const particlesContainer = document.getElementById('particles-container');
       
        // Mouse interaction
        document.addEventListener('mousemove', (e) => {
            // Create particles at mouse position
            const mouseX = (e.clientX / window.innerWidth) * 100;
            const mouseY = (e.clientY / window.innerHeight) * 100;
            
            // Create temporary particle
            const particle1 = document.createElement('div');
            particle1.className = 'particle1';

            // Small size
            const size = Math.random() * 4 + 2;
            particle1.style.width = `${size}px`;
            particle1.style.height = `${size}px`;

            // Position at mouse
            particle1.style.left = `${mouseX}%`;
            particle1.style.top = `${mouseY}%`;
            particle1.style.opacity = '0.6';

            particlesContainer.appendChild(particle1);

            // Animate outward
            setTimeout(() => {
                particle1.style.transition = 'all 2s ease-out';
                particle1.style.left = `${mouseX + (Math.random() * 10 - 5)}%`;
                particle1.style.top = `${mouseY + (Math.random() * 10 - 5)}%`;
                particle1.style.opacity = '0';

                // Remove after animation
                setTimeout(() => {
                    particle.remove();
                }, 2000);
            }, 10);
            
            // Subtle movement of gradient spheres
            const spheres = document.querySelectorAll('.gradient-sphere');
            const moveX = (e.clientX / window.innerWidth - 0.5) * 5;
            const moveY = (e.clientY / window.innerHeight - 0.5) * 5;
            
            spheres.forEach(sphere => {
                const currentTransform = getComputedStyle(sphere).transform;
                sphere.style.transform = `translate(${moveX}px, ${moveY}px)`;
            });
        });