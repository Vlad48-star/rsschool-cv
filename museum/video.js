document.querySelector('#speed-down').onclick = speedDown;
document.querySelector('#speed-up').onclick = speedUp;

let playButton = document.querySelector('#play');
playButton.onclick = play;

let pauseButton = document.querySelector('#pause');
pauseButton.onclick = play;

let bigButton = document.querySelector('.img-button');
bigButton.onclick = play;

let volumeOnButton = document.querySelector('#volume-on');
volumeOnButton.onclick = volumeOn;

let volumeOffButton = document.querySelector('#volume-off');
volumeOffButton.onclick = volumeOn;

let volumeInput = document.querySelector('#volume')
volumeInput.oninput = videoVolume;

let full = false;
document.querySelector('#full-scrin').onclick = fullScreen;

let progress = document.querySelector('#progress');

document.addEventListener("keydown", keyDownHandler);

let video = document.querySelector ('#video-player');
function keyDownHandler(e) {
    switch(e.keyCode){
    case 32 :
        e.preventDefault();
        play();
        break
    case 70:
        fullScreen();
        break
    case 74:
        remind ();
        break
    case 76 :
        fastForward ();
        break
    case 77 :
        volumeOn ();
        break
    case 75 :
        play ();
        break
    case 188 :
        if(e.shiftKey === true){
            speedDown ();
        }                 
        break
    case 190:
        if(e.shiftKey === true){
            speedUp();
        }   
        break;
    case 38:
        videoUp();
        break;
    case 40:
        volumeDown ();
        break;
    case 48:
        let zero = flex();
        video.currentTime = zero * 0;
        break
    case 49:
        let one = flex();
        video.currentTime = one * 1;
        break
    case 50:
        let two = flex();
        video.currentTime = two * 2;
        break 
    case 51:
        let three = flex();
        video.currentTime = three * 3;
        break;
    case 52:
        let four = flex();
        video.currentTime = four * 4;
        break
    case 53:
        let fife = flex();
        video.currentTime = fife * 5;
        break
    case 54:
        let six = flex();
        video.currentTime = six * 6;
        break
    case 55:
        let seven = flex();
        video.currentTime = seven * 7;
        break
    case 56:
        let eight = flex();
        video.currentTime = eight * 8;
        break     
    case 57:
        let nine = flex();
        video.currentTime = nine * 9;
        break 
    }
    console.log(e);
}
function flex () {
    return progress.value = Math.round(Math.round(video.duration) / 10);
}
function remind () {
    const currentTime = video.currentTime;
    video.currentTime = currentTime - 10;
}
function fastForward () {
    const currentTime = video.currentTime;
    video.currentTime = currentTime + 10;
    
}
function speedDown () {
    if(video.paused){
        video.play();
        video.playbackRate = video.playbackRate - 0.5;
        bigButton.classList.add('off');
        pauseButton.classList.remove('off');
        playButton.classList.add('off');
    }
}
function play () {
    if(video.paused){
        video.play();
        bigButton.classList.add('off');
        pauseButton.classList.remove('off');
        playButton.classList.add('off');
    } else {
        video.pause()
        bigButton.classList.remove('off');
        playButton.classList.remove('off');
        pauseButton.classList.add('off');
    }
}
function speedUp () {
    if(video.paused){
        video.play();
        video.playbackRate = video.playbackRate + 0.5;
        bigButton.classList.add('off');
        pauseButton.classList.remove('off');
        playButton.classList.add('off');
        console.log(video.playbackRate);
    }
}
function progressBar () {
    progress.value = (video.currentTime / video.duration) * 100;
}
function setProgress () {
    video.currentTime = (progress.value * video.duration) / 100;
}

progress.addEventListener('change', setProgress)
video.addEventListener('timeupdate', progressBar)

function volumeOn () {
    if(video.volume){
        volumeInput.value = 0;
        video.volume = 0;
        volumeOffButton.classList.remove('off');
        volumeOnButton.classList.add('off');
    } else {
        volumeInput.value = 100;
        video.volume = 1;
        volumeOnButton.classList.remove('off');
        volumeOffButton.classList.add('off');
    } 
}
function videoVolume () {
    let v = this.value;
    video.volume = v / 100;
}
function volumeUp () {
    video.volume = Math.min(video.volume + 0.1, 1);
    volumeInput.value +=10;
}
function volumeDown () {
    video.volume = Math.max(video.volume - 0.1, 0);
    volumeInput.value -=10;
}
function fullScreen () {
    if(full === false){
        video.requestFullscreen();
        full = true;
    } else {
        if (document.fullscreenElement) {
        full = false;
        video.webkitExitFullscreen();
        }
    }
}
console.log('1)Попытался воспроизвести оригинал.\nОбязательный дополнительный фукционал\n2.1)Клавиша Пробел — пауза\n  2)Клавиша M (англ) — отключение/включение звука\n  3)Клавиша > — ускорение воспроизведения ролика\n  4)Клавиша < — замедление воспроизведения ролика\n  5)Клавиша F — включение/выключение полноэкранного режима')
console.log('3)Дополнительный функционал:\nПриостановить или продолжить воспроизведение клавиша k\nПеремотка ролика на 10 секунд назад/вперед j/l\nПерейти к определенному моменту видео (например, при нажатии на цифру "7" ролик будет перемотан до временной отметки, которая соответствует 70% от длительности видео) 0...9\nУвеличение или уменьшение звука клавиши вверх/вниз.')
console.log('My feedbeck = -+23-28 Eсть много неточностей. Прошу найти и дать возможность поработать над этими вопросами.')