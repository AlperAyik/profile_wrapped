const h2Nav =  document.querySelectorAll('.navbar_logo');
const cards = document.querySelectorAll('.cards');
const skillsImg = document.querySelector('.skills_img');
let interval = '';
let timer = 0;
let lastIndex = 0;
let img_timer = 0;

cards.forEach((card, index) => {
    let slideUp = {
        distance: '400%',
        origin: 'left',
        opacity: null,
        delay: 500 * (index + 1),
        reset: true,
    };

    ScrollReveal().reveal(card, slideUp);
})

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