const items = document.querySelectorAll(".slider .list .item")
const prev = document.querySelector(".prev");
const next = document.querySelector(".next")

const thumbnail = document.querySelectorAll(".thumbnail .item")

let itemActive = 0;


next.onclick = function () {
    itemActive =  ( itemActive + 1 ) % items.length
    showSlider();
}

prev.onclick = () => {
    itemActive = ( itemActive - 1 + items.length ) % items.length;
    
    showSlider();
};


const refreshInterval = setInterval(() => next.onclick(), 3000);


function showSlider() {
  
    items.forEach((item)=> item.classList.remove("active"))
  
    thumbnail.forEach((item)=> item.classList.remove("active"))

  items[itemActive].classList.add("active")
  thumbnail[itemActive].classList.add("active")


  clearInterval(refreshInterval)
}

thumbnail.forEach((item, index)=>{
    item.addEventListener("click", () => {
         itemActive = index;
         showSlider()
    })
})