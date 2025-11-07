// Initialize particles.js background
particlesJS("particles-js", {
  particles: {
    number: { value: 60, density: { enable: true, value_area: 800 } },
    color: { value: "#06b6d4" },
    line_linked: { enable: true, color: "#7c3aed", opacity: 0.3 },
    move: { enable: true, speed: 2 }
  },
  interactivity: { events: { onhover: { enable: true, mode: "grab" } } },
  retina_detect: true
});
