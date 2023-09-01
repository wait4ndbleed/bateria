document.body.addEventListener('keyup', (event) => {
    playSound(event.code.toLowerCase());
});

let keyPress = document.querySelectorAll('.key');
for (let i = 0; i  < keyPress.length; i++) {
    keyPress[i].addEventListener('click', (event) => {
        playSound(event.target.getAttribute('data-key'));
    })
}

document.querySelector('.composer button').addEventListener('click', () => {
    let song = document.querySelector('#input').value;

    if (song !== '') {
        let songArray = song.split('');

        playComposition(songArray);
    }
})

function playSound(sound) {
    let audioElement = document.querySelector(`#s_${sound}`);
    let keyElement = document.querySelector(`div[data-key="${sound}"]`);


    if (audioElement) {
        audioElement.currentTime = 0;
        audioElement.play();
    }

    if (keyElement) {
        keyElement.classList.add('active');

        setTimeout(() => {
            keyElement.classList.remove('active');
        }, 400);
    }
}

function playComposition(songArray) {
    let wait = 0;

    for (let i of songArray) {
        setTimeout(() => {
            playSound(`key${i}`);
        }, wait);

        wait += 250;
    }
}