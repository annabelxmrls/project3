import { cueTimer } from "./modules/cuepoints.js";

let vid;
document.addEventListener("DOMContentLoaded", init);
var myCues;
function init() {

    // playback controls and speed 
    const video = document.getElementById("video");
    const playButton = document.getElementById("play_button");
    const pauseButton = document.getElementById("pause_button");
    const muteButton = document.getElementById("mute");
    const unmuteButton = document.getElementById("unmute");
    const slomoButton = document.getElementById("slomo_button");
    const normButton = document.getElementById("norm_button");
    const ffButton = document.getElementById("ff_button");

    playButton.addEventListener("click", function () {
        video.play();
    });

    pauseButton.addEventListener("click", function () {
        video.pause();
    });

    muteButton.addEventListener("click", function () {
        video.muted = true;
    });

    unmuteButton.addEventListener("click", function () {
        video.muted = false;
    });

    slomoButton.addEventListener("click", function () {
        video.playbackRate = 0.5; 
    });

    normButton.addEventListener("click", function () {
        video.playbackRate = 1; 
    });

    ffButton.addEventListener("click", function () {
        video.playbackRate = 2; 
    });
 
    // cue points
    const myCues = [
        { seconds: 80, callback: behati },
        { seconds: 97, callback: lily },
        { seconds: 107, callback: constance },
        { seconds: 127, callback: miranda },
        { seconds: 138, callback: shanina },
        { seconds: 152, callback: magdalena },
        { seconds: 166, callback: isabeli },
        { seconds: 175, callback: bregje },
        { seconds: 190, callback: sui },
        { seconds: 200, callback: doutzen },
    ];

    cueTimer.setup('video', myCues);

    vid = document.getElementById('video');
    console.log(vid);
    console.log({ vid });

    let mediaType = vid.type;
    let str = vid.canPlayType("rihanna/mp4");
    console.log(str);
    vid.volume = 0.5;


    function behati() {
        console.log('This is Behati Prinsloo');
        document.querySelector("#web").src =
        "https://en.wikipedia.org/wiki/Behati_Prinsloo";
    }

    function lily() {
        console.log('This is Lily Donaldson');
        document.querySelector("#web").src =
        "https://en.wikipedia.org/wiki/Lily_Donaldson";
    }

    function constance() {
        console.log('This is Constance Jablonski');
        document.querySelector("#web").src =
        "https://en.wikipedia.org/wiki/Constance_Jablonski";
    }

    function miranda() {
        console.log('This is Miranda Kerr');
        document.querySelector("#web").src =
        "https://en.wikipedia.org/wiki/Miranda_Kerr";
    }

    function shanina() {
        console.log('This is Shanina Shaik');
        document.querySelector("#web").src =
        "https://en.wikipedia.org/wiki/Shanina_Shaik";
    }

    function magdalena() {
        console.log('This is Magdalena Frąckowiak');
        document.querySelector("#web").src =
        "https://en.wikipedia.org/wiki/Magdalena_Frąckowiak";
    }

    function isabeli() {
        console.log('This is Isabeli Fontana');
        document.querySelector("#web").src =
        "https://en.wikipedia.org/wiki/Isabeli_Fontana";
    }

    function bregje() {
        console.log('This is Bregje Heinen');
        document.querySelector("#web").src =
        "https://en.wikipedia.org/wiki/Bregje_Heinen";
    }

    function sui() {
        console.log('This is Sui He');
        document.querySelector("#web").src =
        "https://en.wikipedia.org/wiki/Sui_He";
    }

    function doutzen() {
        console.log('This is Doutzen Kroes');
        document.querySelector("#web").src =
        "https://en.wikipedia.org/wiki/Doutzen_Kroes";
    }
}



