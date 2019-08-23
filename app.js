const buttons = document.querySelectorAll('button');

let playNote = (event) => {
    console.log(event.target)
    let button = event.target;
    let note = button.dataset.note;
    console.log(`audio${note}`);
    let audio = document.getElementById(`audio${note}`);
    audio.pause();
    audio.currentTime = 0;
    audio.play();
}

buttons.forEach((button) => {
    button.addEventListener('click', playNote);
});
