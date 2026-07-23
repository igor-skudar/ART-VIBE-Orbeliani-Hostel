const roomImages = document.querySelectorAll(".room-images");

roomImages.forEach((container) => {
  const images = container.querySelectorAll("img");
  const dots = container.parentElement.querySelectorAll(".dot");

  container.addEventListener("scroll", () => {
    const imageWidth = images[0].offsetWidth;
    const gap = parseFloat(getComputedStyle(container).gap);

    const currentImage = Math.round(
      container.scrollLeft / (imageWidth + gap)
    );

    dots.forEach((dot, index) => {
      dot.classList.toggle("active", index === currentImage);
    });
  });
});