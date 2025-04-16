const playButton = document.getElementById("play-button")
const audio = document.getElementById("audio")
const volumeSlider = document.getElementById("volumeSlider")
const progressBar = document.getElementById("progressBar")
const prevButton = document.getElementById("prev")
const nextButton = document.getElementById("next")
const songTitle = document.querySelector(".song-title")
const display = document.querySelector(".display")


let playlist =[ 
    {title: "New Jeans", file:"music/NewJeans - NewJeans [Audio].mp3"},
    {title: "Severance Mix", file:"music/Severance Theme (Megaphonix Remix).mp3"},
    {title: "Mii", file: "music/Trickpony.mp3"}
]
let background =[
    "image/landscape_1.jpg",
    "image/black.jpg",
    "image/landscape_3.jpg"
]
function loadBackground(index){
    display.style.backgroundImage = `url('${background[index]}')`;
    display.style.backgroundSize  = "cover";
    display.style.backgroundPosition = "center";
}

let currentSong = 2
let isPlaying = false

function loadSong(index){
    audio.src = playlist[index].file;
    songTitle.innerHTML = playlist[index].title;
    loadBackground(index);

    const flyer = document.getElementById("greenFly");
    const flyer1 = document.getElementById("blueFly");
    const flyer2 = document.getElementById("pinkFly");
    const loader = document.querySelector(".loader")
    const loop = document.getElementById("loop")
    const supershyBg = document.getElementById("supershyBackground");

    if (playlist[index].title === "New Jeans"){
        flyer.classList.add("fly-across");
        flyer1.classList.add("fly-across1");
        flyer2.classList.add("fly-across2");
        supershyBg.style.display = "block";
    } else {
        flyer.classList.remove("fly-across");
        flyer1.classList.remove("fly-across1");
        flyer2.classList.remove("fly-across2");
        supershyBg.style.display = "none";
    }
    if (playlist[index].title == "Severance Mix"){
        loader.style.display = "block"
    } else { 
        loader.style.display = "none"
    }
    if (playlist[index].title == "Mii"){
        loop.style.display ="block"
    }   else {loop.style.display ="none"}
    if (isPlaying){
        audio.play()
    }
}

window.addEventListener("load", () => {
    loadSong(currentSong);
});

playButton.addEventListener("click", () =>{
    if (isPlaying == false){
        audio.play();
        isPlaying = true;
    }
    else{
        audio.pause();
        isPlaying = false;
    }
})
nextButton.addEventListener('click',()=>{
    currentSong = (currentSong+1) % playlist.length;
    loadSong(currentSong)
})
prevButton.addEventListener('click',()=>{
    currentSong = (currentSong-1+playlist.length)%playlist.length
    loadSong(currentSong)
})
volumeSlider.addEventListener("input",() => {
    audio.volume = volumeSlider.value;
   
})

audio.addEventListener("timeupdate",() =>{
    progressBar.value = audio.currentTime 
    progressBar.max = audio.duration
})

progressBar.addEventListener("input",() =>{
    audio.currentTime = progressBar.value
})
