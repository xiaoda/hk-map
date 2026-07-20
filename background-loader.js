(() => {
  const targets = document.querySelectorAll("[data-background-image]");

  targets.forEach((target) => {
    const source = target.dataset.backgroundImage;
    const image = new Image();

    const reveal = () => {
      target.style.setProperty("--background-image", `url("${image.src}")`);
      requestAnimationFrame(() => target.classList.add("background-loaded"));
    };

    image.addEventListener("load", reveal);
    image.src = source;
  });
})();
