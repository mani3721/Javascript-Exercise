const cardContainer = document.querySelector(".cards");
const cards = document.querySelectorAll('.card');


cardContainer.addEventListener("mousemove",(e)=> {

    cards.forEach((card)=>{
        const rect = card.getBoundingClientRect()

        x = e.clientX  - rect.left 
        y = e.clientY - rect.top
 
        card.style.setProperty("--mouse-x",  `${x}px`)
        card.style.setProperty("--mouse-y",  `${y}px`)
    })
       
    }
)
