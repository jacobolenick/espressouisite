(function () {
  const wordmark = document.querySelector(".site-footer-wordmark");
  if (!wordmark) return;

  function fitWordmark() {
    let size = 8;

    wordmark.style.fontSize = size + "vw";

    while (wordmark.scrollWidth < window.innerWidth * 1.01 && size < 50) {
      size += 0.1;
      wordmark.style.fontSize = size + "vw";
    }

    while (wordmark.scrollWidth > window.innerWidth && size > 8) {
      size -= 0.05;
      wordmark.style.fontSize = size + "vw";
    }

    wordmark.style.transform =
      "translateX(-50%) translateY(32%) scaleY(1.55)";
  }

  fitWordmark();
  window.addEventListener("resize", fitWordmark);
})();
