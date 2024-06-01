
if (location.host === "www.youtube.com") {
  function togglePiP() {
    const video = document.querySelector('video.html5-main-video');
    document.pictureInPictureElement ? document.exitPictureInPicture() : video.requestPictureInPicture();
  }
  let permit = true;
  function input(event) {
    event.key === 'A' && permit ? togglePiP() : (event.key === 'R' && (permit = !permit));
  }
  window.addEventListener('keydown', input);
  window.addEventListener('beforeunload', () => {
    window.removeEventListener('keydown', input);
  });
}
if (location.host === "www.twitch.tv") {
  let permit = true;
  function input(event) {
    event.key === 'A' && permit ? togglePiP() : (event.key === 'R' && (permit = !permit));
  }
  function togglePiP() {
    const video = document.querySelector('video');
    document.pictureInPictureElement ? document.exitPictureInPicture() : video.requestPictureInPicture();
  }
  window.addEventListener('keydown', input);
  window.addEventListener('beforeunload', () => {
    window.removeEventListener('keydown', input);
  });
}
