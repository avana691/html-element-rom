document.addEventListener("DOMContentLoaded", () => {

  const containers = document.querySelectorAll(
    ".audio1, .audio2, .audio3, .audio4, .audio5"
  );

  containers.forEach(container => {

    const albumImg = container.querySelector(".album-img");
    const audio = container.querySelector("audio");

    // Click → hide album + play audio
    albumImg.addEventListener("click", () => {

      // Stop all others
      containers.forEach(c => {
        const a = c.querySelector("audio");
        const img = c.querySelector(".album-img");

        if (a !== audio) {
          a.pause();
          a.currentTime = 0;
          img.classList.remove("hidden");
        }
      });

      // Hide clicked album
      albumImg.classList.add("hidden");

      // Play audio
      audio.play();
    });

  });

});

