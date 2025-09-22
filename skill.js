document.addEventListener("DOMContentLoaded", () => {
  const progressBars = document.querySelectorAll(".progress");

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        const targetWidth = bar.getAttribute("data-width");
        bar.style.width = targetWidth;
        observer.unobserve(bar); // Animate only once
      }
    });
  }, {
    threshold: 0.5 // Trigger when 50% of the bar is visible
  });

  progressBars.forEach(bar => {
    observer.observe(bar);
  });
});
