// DOM
const h2Nav =  document.querySelectorAll('.navbar_logo');
const audio = document.getElementById('audio');
const vinly = document.getElementById('vinlyPlayer');
const muziekBtns = document.querySelectorAll('.muziekBtn');

// variables
let timer = 0;
let lastIndex = 0;
let rotation = 0;
let stopped = false;
const audios = ['./Assets/audio/Interstellar_alper.mp3', './Assets/audio/KaraSevda_alper.mp3', './Assets/audio/Last_of_us_alper.mp3'];

// muziek afspelen
muziekBtns.forEach((btn, index) => {
    let playing = false
    let savedTime = 0;
    
    btn.addEventListener('click', () => {
        muziekBtns.forEach((songbtn) => {
            songbtn.disabled = true
            songbtn.style.backgroundColor = '#EF9F27'
        })
        if (playing) {
            audio.pause();
            savedTime = audio.currentTime

            playing = false;
            stopped = true;

            muziekBtns.forEach((songbtn) => {
                songbtn.disabled = false
            })
        } else {
            playing = true;
            stopped = false;

            btn.style.backgroundColor = '#573a0e'
            btn.disabled = false
            
            audio.src = audios[index];
            if(savedTime > 0) {
                audio.currentTime = savedTime
            }
            audio.play();

            rotateVinly();
        }
    });
});

audio.addEventListener('ended', () => {
    playing = false;
    stopped = true;
});

function rotateVinly() {
    if(rotation < 359) {
        rotation += 1;
        vinly.style.transform = `rotate(${rotation}deg)`;
    } else {
        rotation = 0;
    }
    
    if(!stopped) {
        requestAnimationFrame(rotateVinly)
    }
}

// Logo naam
setInterval(() => {
    if(timer < 4) {
        timer++;
    } else {
        timer = 0;
                
        if(lastIndex === 4) {
            lastIndex = 0;
        } else  {
            lastIndex++;
        }

        animation();
    }
}, 100)

function animation() {
    h2Nav.forEach((char) => {
        char.classList.remove('navbar_logo');
    })
    
    h2Nav[lastIndex].classList.add('navbar_logo');
}
        
animation();