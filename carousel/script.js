const slide = document.querySelectorAll(".slide");

const button = document.querySelectorAll('.btn');

const indicator =  document.querySelectorAll('.indicator-link');

let currentSlide= 0;
let maxSlide = slide.length -1 ;


const updateSlider=(number)=>{
    
    slide.forEach((item, index)=>{
    item.style.transform = `translateX(${(index - number) * 100 }%)`
    })

    indicator.forEach((item , index)=>{

        if (index === number) {
            
            item.classList.add("active")
        }else {
            item.classList.remove('active')
        }
    })
}


button.forEach((btn)=>{
    btn.addEventListener("click", ()=>{
        btn.dataset.button == "next" ? ++currentSlide : --currentSlide

        if (currentSlide > maxSlide) {
            currentSlide = 0;
        }else if (currentSlide < 0) {
            currentSlide = maxSlide;
        }

        updateSlider(currentSlide)
    })
})
