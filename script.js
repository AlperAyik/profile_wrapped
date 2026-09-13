// DOM
const h2Nav =  document.querySelectorAll('.navbar_logo');
const skillsImg = document.querySelector('.skills_img');
const audio = document.getElementById('audio');
const vinly = document.getElementById('vinlyPlayer');
const muziekBtns = document.querySelectorAll('.muziekBtn');

// variables
let interval = '';
let timer = 0;
let lastIndex = 0;
let img_timer = 0;
let rotation = 0;
let stopped = false;

const audios = ['./Assets/audio/Interstellar_alper.mp3', './Assets/audio/KaraSevda_alper.mp3', './Assets/audio/Last_of_us_alper.mp3']

// muziek afspelen
muziekBtns.forEach((btn, index) => {
    let playing = false
    let savedTime = 0;
    
    btn.addEventListener('click', () => {
        muziekBtns.forEach((songbtn) => {
            songbtn.disabled = true
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

// Maak active class voor button

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

// Img bewegen
skillsImg.addEventListener('mouseover', () => {
    clearInterval(interval);
    img_timer = 0;

    interval = setInterval(() => {
        if(img_timer < 2) {
            img_timer++;
        } else {
            clearInterval(interval);
            skillsImg.style.transform = 'rotate(0deg)';
        }
    }, 1000)
})

skillsImg.addEventListener('mouseout', () => {
    img_timer = 0;
    clearInterval(interval);
})


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