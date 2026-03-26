const containers = document.querySelectorAll(".audio-container > div");

containers.forEach(container => {
  const img = container.querySelector("img");
  const audio = container.querySelector("audio");

  audio.volume = 1;

  img.addEventListener("click", () => {

    // stop all other audios + remove their rotation
    document.querySelectorAll(".audio-container > div").forEach(c => {
      const a = c.querySelector("audio");
      const i = c.querySelector("img");

      if (a !== audio) {
        a.pause();
        a.currentTime = 0;
        i.classList.remove("playing");
      }
    });

    // toggle play
    if (audio.paused) {
      audio.play();
      img.classList.add("playing");   // start spinning
    } else {
      audio.pause();
      img.classList.remove("playing"); // stop spinning
    }
  });

  // ALSO stop spinning if audio ends naturally
  audio.addEventListener("ended", () => {
    img.classList.remove("playing");
  });
});