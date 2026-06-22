(function () {
  const showcase = document.getElementById("hero-showcase");
  const inner = showcase?.querySelector(".hero-showcase-inner");

  if (!showcase || !inner) return;

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const isCoarsePointer = window.matchMedia("(pointer: coarse)").matches;

  if (prefersReducedMotion || isCoarsePointer) return;

  const maxRotate = 5;
  const maxShift = 14;

  function resetTilt() {
    showcase.classList.remove("is-active");
    inner.style.transform = "";
  }

  function handleMove(event) {
    showcase.classList.add("is-active");
    const rect = showcase.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    const rotateX = (0.5 - y) * maxRotate * 2;
    const rotateY = (x - 0.5) * maxRotate * 2;
    const shiftX = (x - 0.5) * maxShift * 2;
    const shiftY = (y - 0.5) * maxShift * 2;

    inner.style.transform =
      `rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translate3d(${shiftX.toFixed(2)}px, ${shiftY.toFixed(2)}px, 0)`;
  }

  showcase.addEventListener("mousemove", handleMove);
  showcase.addEventListener("mouseleave", resetTilt);
})();
