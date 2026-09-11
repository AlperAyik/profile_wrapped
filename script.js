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
const audios = ['/Assets/audio/Interstellar_alper.mp3', '/Assets/audio/KaraSevda_alper.mp3', '/Assets/audio/Last_of_us_alper.mp3']

// muziek afspelen
muziekBtns.forEach((btn, index) => {
    let playing = false;
    btn.addEventListener('click', () => {
        if(playing) {
            audio.pause()
            playing = !playing;
            stopped = true;
        } else {
            playing = !playing;
            stopped = false;
            audio.src = audios[index];
            audio.play();
            rotateVinly();
        }
    })
})

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
    interval = setInterval(() => {
        if(img_timer < 2) {
            img_timer++;
        } else {
            clearInterval(interval);
            img_timer = 0;
            skillsImg.style.transform = 'rotate(0deg)';
        }
    }, 1000)
})

skillsImg.addEventListener('mouseout', () => {
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