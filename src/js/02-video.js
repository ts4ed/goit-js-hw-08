import Player from "@vimeo/player";
import throttle from "lodash.throttle";

const iframe = document.querySelector("iframe");
const player = new Vimeo.Player(iframe);
const timeOfCurrent = localStorage.getItem("videoplayer-current-time");
player.on(
  "timeupdate",
  throttle(function () {
    player.getCurrentTime().then(function (seconds) {
      localStorage.setItem("videoplayer-current-time", seconds);
      // console.log(localStorage.setItem('videoplayer-current-time', seconds));
    });
  }, 1000)
);

player.setCurrentTime(timeOfCurrent).then(function (seconds) {
});

function currentTime() {
  if (timeOfCurrent) {
    // console.log(timeOfCurrent);
  }
}
