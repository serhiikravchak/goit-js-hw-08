import Player from "@vimeo/player";
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);


function setTime(data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
  console.log(data);
}

  function onPlay(data) {
  const currentTime = localStorage.getItem('videoplayer-current-time');
  if (data.seconds !== currentTime) {
    player
      .setCurrentTime(currentTime)
      .catch(function (error) {
        switch (error.name) {
          case 'RangeError':
            break;

          default:
            break;
        }
      });
  }
};

player.on('play', onPlay);
player.on('timeupdate', throttle(setTime, 1000));

