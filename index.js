console.log("hello world");
const myProgressBar = document.getElementById("myProgressBar");
const masterPlay = document.getElementById("master-play");
const musicPhoto = document.getElementById("gif");
const title = document.getElementById("title");
const forward = document.getElementById("forward");
const back = document.getElementById("back");
const listbtn = document.getElementById("listbtn");
const songItem = Array.from(document.getElementById("songItem"));
// const play = document.getElementById("play");
let songs = new Audio("song.mp3");
let songList = [
  { songName: "sanso-ki-mala", filePath: "song.mp3" },
  { songName: "punjabi-song", filePath: "SONG2 (1).mp3" },
  { songName: "ghanchakar-babu", filePath: "SONG2 (2).mp3" },
  { songName: "odhi-dil bhi kamini", filePath: "SONG3.mp3" },
  { songName: "Tere-liye", filePath: "SONG4.mp3" },
  { songName: "Tere-liye", filePath: "SONG4.mp3" },
];

const loop = (song) => {
  return ` <div class="songItem">
  <img src="images.png" alt="jk">
  <span>"${song.songName}" </span>

  <span class="songListPlay"><span>5:30</span>
      <i class="fa-solid fa-play-circle" id="listbtn" ></i>
</div>`;
};
const songLoop = songList.map(loop).join(" ");
document.getElementsByClassName("songItem2")[0].innerHTML = songLoop;

songItem.forEach((element, i) => {
  console.log(element, i);
});

let songPlay = 0;
masterPlay.addEventListener("click", () => {
  if (songs.paused) {
    songs.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
    musicPhoto.src = "musicplayer.gif";
    title.textContent = songList[songPlay].songName;
  } else {
    songs.pause();
    masterPlay.classList.add("fa-play-circle");
    masterPlay.classList.remove("fa-pause-circle");
    musicPhoto.src = "tumbler.jpg";
    title.textContent = songList[songPlay].songName;
  }
});
const nextPlaySong = () => {
  songPlay = (songPlay + 1) % songList.length;
  songs.src = songList[songPlay].filePath;

  songs.play();

  title.textContent = songList[songPlay].songName;
};
forward.addEventListener("click", nextPlaySong);
const previousSong = () => {
  // Ensure the index remains non-negative and loops to the last song if needed
  songPlay = (songPlay - 1 + songList.length) % songList.length;
  songs.src = songList[songPlay].filePath;
  songs.play();
  title.textContent = songList[songPlay].songName;
};

back.addEventListener("click", previousSong);
songs.addEventListener("timeupdate", () => {
  progress = parseInt((songs.currentTime / songs.duration) * 100);
  myProgressBar.value = progress;
});
myProgressBar.addEventListener("change", () => {
  songs.currentTime = (myProgressBar.value * songs.duration) / 100;
});
listbtn.addEventListener("click", () => {
  console.log("raja beta");
});
console.log("hello worlddd");
