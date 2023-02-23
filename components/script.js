const mario = document.querySelector('.mario_bross')
const tubo1 = document.querySelector('.tubo')
const clouds = document.querySelector('.clouds')
const over = document.querySelector('.game-over')
const reiniciar = document.querySelector('.reiniciar')
const score = document.querySelector('.score')

const jump =  () => {
    mario.classList.add('jump');

    setTimeout(() => {

        mario.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {

    const marioPossition = +window.getComputedStyle(mario).bottom.replace('px','')
    const tuboPosition = tubo1.offsetLeft;
    

    if (tuboPosition <= 100 && marioPossition < 78) {

        tubo1.style.animation = 'none'
        tubo1.style.left = `${tuboPosition}px`

        mario.style.animation = 'none'
        mario.style.bottom = `${marioPossition}px`

        mario.src = './img/game.png';
        mario.style.width = '65px'
        mario.style.marginLeft = '50px'

        clouds.style.animation = 'none'

        over.innerHTML = 'GAME OVER'
        reiniciar.classList.remove('hide')
        reiniciar.addEventListener('click', () => {
            location.reload()
        })

        clearInterval(loop)
    }

}, 10)

document.addEventListener('keydown', jump);
document.addEventListener('click', jump);

