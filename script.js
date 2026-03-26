document.addEventListener("DOMContentLoaded", () => {

  const containers = document.querySelectorAll(
    ".audio1, .audio2, .audio3, .audio4, .audio5, \
     .audio6, .audio7, .audio8, .audio9, .audio10, \
     .audio11, .audio12, .audio13, .audio14, .audio15, \
     .audio16, .audio17, .audio18, .audio19, .audio20"
  );

  containers.forEach(container => {

    const albumImg = container.querySelector(".album-img");
    const recordImg = container.querySelector(".record-img");
    const audio = container.querySelector("audio");

    if (!albumImg || !recordImg || !audio) return; // safety

    let revealed = false;

    container.addEventListener("click", () => {

      // 👉 FIRST CLICK → reveal (hide album)
      if (!revealed) {
        albumImg.classList.add("hidden");
        revealed = true;
        return;
      }

      // 👉 STOP all other audios
      containers.forEach(c => {
        const a = c.querySelector("audio");
        const rec = c.querySelector(".record-img");

        if (a !== audio) {
          a.pause();
          a.currentTime = 0;
          rec?.classList.remove("playing");
        }
      });

      // 👉 SECOND CLICK → play / pause
      if (audio.paused) {
        audio.play();
        recordImg.classList.add("playing");
      } else {
        audio.pause();
        recordImg.classList.remove("playing");
      }

    });

    // 👉 RESET when mouse leaves
    container.addEventListener("mouseleave", () => {
      albumImg.classList.remove("hidden");
      recordImg.classList.remove("playing");
      audio.pause();
      audio.currentTime = 0;
      revealed = false;
    });

  });

});

