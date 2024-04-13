const buttons = document.querySelectorAll(".buttons");
const cards = document.querySelectorAll(".cards")


function filterCard(e) {


    cards.forEach((card=>{


        if (card.dataset.name === e.target.dataset.filter || e.target.dataset.filter ==="all") {
            card.style.display= "block"
        } else {
            card.style.display= "none"
        }
    }))
}





buttons.forEach((btn)=>btn.addEventListener('click', filterCard))

