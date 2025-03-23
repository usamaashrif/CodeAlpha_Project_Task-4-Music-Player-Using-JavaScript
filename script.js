const audio = document.getElementById("audio");
const playButton = document.getElementById("play");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const progressBar = document.getElementById("progress-bar");
const volumeSlider = document.getElementById("volume");
const songTitle = document.getElementById("song-title");
const currentTimeEl = document.getElementById("current-time");
const totalTimeEl = document.getElementById("total-time");
const songListEl = document.getElementById("song-list");

// Song data
const songs = [
  { title: "Song 1", file: "song1.mp3" },
  { title: "Song 2", file: "song2.mp3" },