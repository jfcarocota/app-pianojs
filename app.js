const buttons = document.querySelectorAll('button');


let playNote = () => {
    let audio = document.getElementById('audDo');
    audio.pause();
    audio.currentTime = 0;
    audio.play();
}

buttons.forEach((button) => {
    button.addEventListener('click', playNote);
});

//btnDo.addEventListener("click", playNote);
