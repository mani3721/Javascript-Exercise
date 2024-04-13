const moon = document.querySelector('.moon');
const text = document.querySelector('.text-xl');
const train = document.querySelector('.train');
const desert = document.querySelector('.desert-moon');
const man = document.querySelector('.man')

console.log(desert);

window.addEventListener('scroll',()=> {
    let value = window.scrollY;

    // console.log(value);
    moon.style.top = `${value * .9}px`
    text.style.top = `${80 + value * -0.2}%`
    train.style.left = `${value * 1.5}px`

    desert.style.top = `${value * .3}px`


        
    // if (value > 700) {
    //     let manMovement = Math.min((value - 700) * 0.6, 200);
    //     console.log(manMovement);
    //     man.style.left = `${10 + manMovement}px`;
    // }

    if (value > 700 && value < 1000) {
   
        man.style.left = `${ 2 + (value - 700) * 0.6}px`;
    }
    

})