
const  text = document.querySelector('.text-xl')



const leaf = document.querySelector('.leaf-img')
const hill_1 = document.querySelector('.hill-img-1')
const hill_2 = document.querySelector('.hill-img-2')
const hill_3 = document.querySelector('.hill-img-3')
const hill_4 = document.querySelector('.hill-img-4')
const hill_5 = document.querySelector('.hill-img-5')
const women = document.querySelector('.women-img');
let sections = document.querySelectorAll('section');
const zoomImg = document.querySelector('.zoom-img');
const range = document.querySelector('.range');

console.log(range);

window.addEventListener('scroll',()=> {
    const scrollY = window.scrollY ;

    // console.log(scrollY);

    if (scrollY <= 200) {
        text.style.marginTop = `${scrollY * 1.5}px`;
    } 

    if (scrollY > 1200) {
        let val = Math.min( (scrollY - 1200) * 0.6 , 200 );

        // console.log(-val);
        women.style.transform = `translateX(${ 2 + (scrollY - 1200) * -0.6  }px)`
    } 

 
    leaf.style.top = `${scrollY * -1.5}px`
    leaf.style.left = `${scrollY * 1.5}px`

    hill_1.style.top =  `${scrollY * 1}px`
    hill_4.style.left =  `${scrollY * -1.5}px`
    hill_5.style.left =  `${scrollY * 1.5}px`
})

let speed = 0.1;
let zoom = 1;

zoomImg.addEventListener('wheel', (e)=> {

    if (e.deltaY > 0) {
        zoom += speed
    }else {
       zoom -= speed
    }

    zoomImg.style.transform = `scale(${zoom})`

   
})

range.addEventListener('wheel', (e)=> {

    let value = +range.value + Math.sign(- e.deltaY)

    range.value = `${ value}`

})