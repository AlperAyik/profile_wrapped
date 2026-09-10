const h2Nav =  document.querySelectorAll('.navbar_logo');
let interval = '';
let timer = 0;
let lastIndex = 0;

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