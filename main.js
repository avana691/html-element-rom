const containers = document.querySelectorAll(".audio-container > div");

containers.forEach(container => {
  const img = container.querySelector("img");
  const audio = container.querySelector("audio");

  audio.volume = 1;

  img.addEventListener("click", () => {
    // Stop all other audios + remove their rotation
    containers.forEach(c => {
      const a = c.querySelector("audio");
      const i = c.querySelector("img");

      if (a !== audio) {
        a.pause();
        a.currentTime = 0;
        i.classList.remove("playing");
      }
    });

    // Toggle play
    if (audio.paused) {
      audio.play();
      img.classList.add("playing"); // Start spinning
    } else {
      audio.pause();
      img.classList.remove("playing"); // Stop spinning
    }
  });

  // Stop spinning if audio ends naturally
  audio.addEventListener("ended", () => {
    img.classList.remove("playing");
  });
});