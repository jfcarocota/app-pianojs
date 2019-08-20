let btnDo = document.getElementById("btnDo");

let playNote = () => {
    let audio = document.getElementById('audDo');
    audio.pause();
    audio.currentTime = 0;
    audio.play();
}

btnDo.addEventListener("click", playNote);
