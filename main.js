let now_playing = document.getElementById('now-playing');
let track_art = document.getElementById('track-art');
let track_name = document.getElementById('track-name');
let track_artist = document.getElementById('track-artist');
let playpause_btn = document.getElementById('playpause-track');
let next_btn = document.getElementById('next-track');
let prev_btn = document.getElementById('prev-track');
let seek_slider = document.getElementById('seek_slide');
let volume_slider = document.getElementById('volume_slider');
let curr_time = document.getElementById('current-time');
let total_duration = document.getElementById('total-duration');

let track_index = 0;
let isPlaying = false;
let updateTimer;

let curr_track = document.createElement("audio");

let track_list = [
    {
        name: "No Sleep",
        artist: "Martin Garrix",
        image: "",
        path: "NoSleep.mp3"
    },
    {
        name: "High on Life",
        artist: "Martin Garrix",
        image: "",
        path: "HighOnLife.mp3"
    },
    {
        name: "Scared To Be Lonely",
        artist: "Martin Garrix",
        image: "",
        path: "STBL.mp3"
    },
    {
        name: "In The Name Of Love",
        artist: "Martin Garrix",
        image: "",
        path: "ITNOL.mp3"
    },
    {
        name: "There For You",
        artist: "Martin Garrix",
        image: "",
        path: "ThereForYou.mp3"
    },
    {
        name: "Lions In The Wild",
        artist: "Martin Garrix",
        image: "",
        path: "LITW.mp3",
    },
];

function loadTrack(track_index){
    clearInterval(updateTimer);
    
    resetValues();

    curr_track.src = track_list[track_index].path;
    curr_track.load();

    //track_art.style.backgroundImage = "url(" + track_list[track_index].image + ")";
    if(track_name){
    track_name.textContent = track_list[track_index].name;
    }
    if(track_artist){
    track_artist.textContent = track_list[track_index].artist;
    }
    if(now_playing){
    now_playing.textContent = "Playing " + (track_index + 1) + " of " + track_list.length;
    }
    updateTimer = setInterval(seekUpdate, 1000);

    curr_track.addEventListener("ended", nextTrack);

}

function resetValues(){

    if (curr_time) {
      (curr_time.textContent = "00:00");
    }

    if (total_duration){
    total_duration.textContent = "00:00";
    
    seek_slider.value = 0;
    }
}

function playpauseTrack(){
    if (!isPlaying) playTrack();
    else pauseTrack();
}

function playTrack(){
    curr_track.play();
    isPlaying = true;

    if(track_index == 0){
        document.getElementById("song-name").innerHTML = "No Sleep";
    }


    if(playpause_btn){
    playpause_btn.innerHTML = '<i class = "fa fa-pause-circle fa-5x"></i>';
    }
}

function pauseTrack(){

    curr_track.pause();
    isPlaying = false;
    if(playpause_btn){
    playpause_btn.ontoggle("")
    }

}

function nextTrack(){
    if(track_index < track_list.length - 1)
       track_index += 1;
    else track_index = 0;

    loadTrack(track_index);
    playTrack();


    if (track_index == 0){
       document.getElementById("song-name").innerHTML = "No Sleep";
    } else if (track_index == 1){
        document.getElementById("song-name").innerHTML = "High On Life";
    } else if (track_index == 2){
        document.getElementById("song-name").innerHTML = "Scared To Be Lonely";
    } else if (track_index == 3){
        document.getElementById("song-name").innerHTML = "In The Name Of Love";
    } else if(track_index == 4){
        document.getElementById("song-name").innerHTML = "There For You";
    } else if(track_index == 5){
        document.getElementById("song-name").innerHTML = "Lions In The Wild";
    }
}

function prevTrack(){
    if (track_index > 0)
       track_index -= 1;
    else track_index = track_list.length;

    loadTrack(track_index);
    playTrack();

    if (track_index == 0){
        document.getElementById("song-name").innerHTML = "No Sleep";
     } else if (track_index == 1){
         document.getElementById("song-name").innerHTML = "High On Life";
     } else if (track_index == 2){
         document.getElementById("song-name").innerHTML = "Scared To Be Lonely";
     } else if (track_index == 3){
         document.getElementById("song-name").innerHTML = "In The Name Of Love";
     } else if(track_index == 4){
         document.getElementById("song-name").innerHTML = "There For You";
     } else if(track_index == 5){
        document.getElementById("song-name").innerHTML = "Lions In The Wild";
    }
}

function seekTo() {
   ck
    seekto = curr_track.duration * (seek_slider.value / 100);
    
    
    curr_track.currentTime = seekto;
  }
    
  function setVolume() {
  
    curr_track.volume = volume_slider.value / 100;
  }
    
  function seekUpdate() {
    let seekPosition = 0;
    
   
    if (!isNaN(curr_track.duration)) {
      seekPosition = curr_track.currentTime * (100 / curr_track.duration);
      seek_slider.value = seekPosition;
    
      
      let currentMinutes = Math.floor(curr_track.currentTime / 60);
      let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
      let durationMinutes = Math.floor(curr_track.duration / 60);
      let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);
    
 
      if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
      if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
      if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
      if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }
    
     
      curr_time.textContent = currentMinutes + ":" + currentSeconds;
      total_duration.textContent = durationMinutes + ":" + durationSeconds;
    }
  }

function seekTo() {

    seekto = curr_track.duration * (seek_slider.value/100);

    curr_track.currentTime = seekto;

}

function setVolume(){
    curr_track.volume = volume.value/100;
}

function seekUpdate(){
    let seekPosition = 0;

    

}

loadTrack(track_index);

