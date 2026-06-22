(function () {
  const carousel = document.getElementById("features-carousel");
  const prevButton = document.querySelector(".features-arrow-prev");
  const nextButton = document.querySelector(".features-arrow-next");

  if (!carousel || !prevButton || !nextButton) return;

  const cards = carousel.querySelectorAll(".feature-card");

  function getScrollStep() {
    const firstCard = cards[0];
    if (!firstCard) return 0;

    const gap = parseFloat(getComputedStyle(carousel).gap) || 20;
    return firstCard.offsetWidth + gap;
  }

  function updateArrows() {
    const maxScroll = carousel.scrollWidth - carousel.clientWidth;
    prevButton.disabled = carousel.scrollLeft <= 1;
    nextButton.disabled = carousel.scrollLeft >= maxScroll - 1;
  }

  prevButton.addEventListener("click", () => {
    carousel.scrollBy({ left: -getScrollStep(), behavior: "smooth" });
  });

  nextButton.addEventListener("click", () => {
    carousel.scrollBy({ left: getScrollStep(), behavior: "smooth" });
  });

  carousel.addEventListener("scroll", updateArrows, { passive: true });
  window.addEventListener("resize", updateArrows);
  updateArrows();
})();
