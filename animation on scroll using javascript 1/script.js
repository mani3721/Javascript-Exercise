let sections = document.querySelectorAll('section');
const moveEl = document.querySelector(".animate-scroll")


const progressBar = document.querySelector(".progress-bar");


window.onscroll = function() {
    sections.forEach(sec => {
        let scrollDistance = window.scrollY;
        let secDistance = sec.offsetTop;
        
        // console.log(scrollDistance, secDistance);

        if (scrollDistance >= secDistance - 150 ) {
            sec.classList.add("show-animate")

        } 



    })


   
}

window.addEventListener("scroll",()=>{
    const scrollTop = window.scrollY ;

    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress =  ( scrollTop / height ) * 100;
    //   console.log(progress);
    progressBar.style.width = progress+"%";
})



function scrollDirection(e){

 const direction = e.deltaY > 0 ? "Down" :"UP"

 console.log(direction);
}

window.addEventListener("wheel", scrollDirection)


// let oldScroll= 0

// window.addEventListener("scroll", function(){

//     const currentScroll= window.scrollY;
//     console.log(currentScroll);
//     if (oldScroll > currentScroll) {
//         moveEl.style.transform = `translateX(${currentScroll}px)`
//         console.log("up");
      
//     } else {

//         moveEl.style.transform = `translateX(-${currentScroll}px)`
//         console.log('down');
//     }

//     oldScroll= currentScroll
// })
