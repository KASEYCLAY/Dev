const video = document.querySelector(".player");
const canvas = document.querySelector(".photo");
const ctx = canvas.getContext("2d");
const strip = document.querySelector(".strip");
const snap = document.querySelector(".snap");

function getVideo() {
  navigator.mediaDevices
    .getUserMedia({ video: true, audio: false })
    .then((localMediaStream) => {
      console.log(localMediaStream);
      // Assign the media stream directly to the srcObject
      video.srcObject = localMediaStream;
      video.play();
    })
    .catch((err) => {
      console.error("Allow Webcam Access:", err);
    });
}

function paintToCanvas() {
  const width = video.videoWidth;
  const height = video.videoHeight;
  canvas.width = width;
  canvas.height = height;

  return setInterval(() => {
    ctx.drawImage(video, 0, 0, width, height);
  }, 16);
}

function takePhoto() {
snap.currentTime = 0;
}

getVideo();

video.addEventListener("canplay", paintToCanvas); // Call paintToCanvas when the video is ready