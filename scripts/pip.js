if (location.host === "www.youtube.com") {
  let video;
  let permit = true;
  let retry = 0;
  const MAX_RETRY = 5;
  function input(event) {
    event.key === 'A' && permit ? togglePiP() : (event.key === 'R' && (permit = !permit));
  }
  function togglePiP() {
    const video = document.querySelector('video.html5-main-video');
    document.pictureInPictureElement ? document.exitPictureInPicture() : video.requestPictureInPicture();
  }
  function addPiPButton() {
    console.log("a")
  }
  function waitVideoLoad() {
    (location.pathname === "/watch" && document.readyState === "complete") ?
    (video = document.querySelector('video.html5-main-video')) ? addPiPButton() :
    ((retry < MAX_RETRY) ? (retry++, setTimeout(waitVideoLoad, 500)) : null) : setTimeout(waitVideoLoad, 1000);
  }
  window.addEventListener('keydown', input);
  window.addEventListener('beforeunload', () => {
    window.removeEventListener('keydown', input);
  });
  waitVideoLoad();
} else {
  const video = document.querySelector('video');
let permit = true;

if (video) {
  window.addEventListener('keydown', input);
  window.addEventListener('beforeunload', () => {
    window.removeEventListener('keydown', input);
  });
}
}

