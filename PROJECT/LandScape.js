document.addEventListener("DOMContentLoaded", () => {
  const starContainer = document.querySelector(".visual-stars");
  if (!starContainer) {
    return;
  }

  const totalStars = Number(starContainer.dataset.count) || 35;
  const { width, height } = starContainer.getBoundingClientRect();

  for (let index = 0; index < totalStars; index += 1) {
    const star = document.createElement("span");
    star.className = "star";

    const randomLeft = Math.random() * width;
    const randomTop = Math.random() * height;
    const randomSize = 3 + Math.random() * 3;
    const twinkleDuration = 2.5 + Math.random() * 2.5;

    star.style.left = `${randomLeft}px`;
    star.style.top = `${randomTop}px`;
    star.style.width = `${randomSize}px`;
    star.style.height = `${randomSize}px`;
    star.style.animationDuration = `${twinkleDuration}s`;
    star.style.animationDelay = `${Math.random() * 2}s`;

    starContainer.appendChild(star);
  }
});
