
// Clock
function realTimeClock(){

    // Time
    var rtClock = new Date();

    var hours = rtClock.getHours();
    var minutes = rtClock.getMinutes();
    var seconds = rtClock.getSeconds();

    var amPm = (hours < 12) ? "AM" : "PM";

    hours = (hours > 12) ? hours - 12 : hours;

    hours = ("0" + hours).slice(-2);
    minutes = ("0" + minutes).slice(-2);
    seconds = ("0" + seconds).slice(-2);

    document.getElementById('clock').innerHTML =
        hours + ":" + minutes + ":" + seconds + " " + amPm;
    var t = setTimeout(realTimeClock, 500);

    // Date
    var date = new Date();
    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];

    var dateDay = date.getDate();
    var month = monthNames[date.getMonth()];
    var year = date.getFullYear();

    document.getElementById('date').innerHTML = month + " " + dateDay + " " + year;
}

// Play
const app = () => {

    const song = document.querySelector('.song');
    const play = document.querySelector('.play');
    const play2 = document.querySelector('.play2');
    const sounds = document.querySelectorAll('.sound-picker button');
    const happyMood = document.querySelector('.happy-mood');
    const chillMood = document.querySelector('.chill-mood');
    const spotPlay = document.querySelector('.spotify-playlist');
    const spotPlay2 = document.querySelector('.spotify-playlist2');
    const rainAnimation = document.querySelector('.rain-animation');
    const playBtn = document.querySelector('.player-container');

    //Choose different moods
    sounds.forEach(sound =>{
        sound.addEventListener('click', function(){
            song.src = this.getAttribute('data-sound');
            song.pause();
            //rainAnimation.style.animation = 'rain 1s linear infinite';
            play.src = './svgs/play.svg';
        });
    });
    happyMood.addEventListener('click', () =>{
        spotPlay.style.display = 'flex';
        spotPlay2.style.display = 'none';
        document.body.style.backgroundImage = 'linear-gradient(#FFAB9B,white)';
        rainAnimation.style.display = 'none';
        playBtn.style.display = 'flex';
    })
    chillMood.addEventListener('click', () =>{
        spotPlay2.style.display = 'flex';
        spotPlay.style.display = 'none';
        document.body.style.backgroundImage = 'linear-gradient(rgb(80, 127, 255),white)';
        rainAnimation.style.display = 'block';
        playBtn.style.display = 'flex'; 
    })
    
    //Play sound
    play.addEventListener('click', () =>{
        checkPlaying(song);
    })

    //Create a function specific to stop and play the sounds
    const checkPlaying = song =>{
        if(song.paused){
            song.play();
            play.src = './svgs/pause.svg';
        }
        else{
            song.pause();
            play.src = './svgs/play.svg';
        }
    };

};

app();
