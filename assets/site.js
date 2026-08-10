const animatedItems = document.querySelectorAll(
  ".section-heading, .content-copy > p, .finance-panel, .program-card, .service-card, .asset-grid span, .process-step, .scenario-card, .audience-card, .profile-block, .cta-band, .detail-card, .footer-main > *, .footer-bottom, .page-card, .faq-item, .contact-card, .stat-card"
);

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.16 });

  animatedItems.forEach((item, index) => {
    item.classList.add("reveal-on-scroll");
    item.style.transitionDelay = `${Math.min(index % 4, 3) * 70}ms`;
    revealObserver.observe(item);
  });
}

document.querySelectorAll(".lead-form").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    let message = form.querySelector(".form-message");
    if (!message) {
      message = document.createElement("p");
      message.className = "form-message";
      form.appendChild(message);
    }

    message.textContent = "Thank you. Your financing request details are ready for review.";
  });
});
