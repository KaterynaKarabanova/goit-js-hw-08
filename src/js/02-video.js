import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const CURRENT_TIME_KEY = `videoplayer-current-time`
const onPlay = throttle((data)=> {
    // data is an object containing properties specific to that event
    localStorage.setItem(CURRENT_TIME_KEY, JSON.stringify(data.seconds));
}, 1000);

player.on('timeupdate', onPlay);
player.setCurrentTime(localStorage.getItem(CURRENT_TIME_KEY)).then(function() {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});
