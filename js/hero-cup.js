(function () {
  const heroTop = document.querySelector(".hero-top");
  const content = document.getElementById("hero-content");
  const cupBg = content?.querySelector(".hero-cup-bg");

  if (!heroTop || !content || !cupBg) return;

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const isCoarsePointer = window.matchMedia("(pointer: coarse)").matches;

  if (prefersReducedMotion || isCoarsePointer) {
    content.classList.add("hero-content--static-cup");
    return;
  }

  function handleMove(event) {
    const rect = content.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;

    content.style.setProperty("--cup-x", `${x}%`);
    content.style.setProperty("--cup-y", `${y}%`);
    content.classList.add("is-hovering");
  }

  function handleLeave() {
    content.classList.remove("is-hovering");
  }

  heroTop.addEventListener("mousemove", handleMove);
  heroTop.addEventListener("mouseleave", handleLeave);
})();
