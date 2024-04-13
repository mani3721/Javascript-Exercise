const next  = document.querySelector(".next");
const prev = document.querySelector(".prev");
const carousel = document.querySelector(".carousel");
const listItem = document.querySelector(".carousel .list");
const thumbnail = document.querySelector(".carousel .thumbnail");


next.onclick = ()=>{
    showSlider("next")
}

prev.onclick = ()=>{
    showSlider("prev")
}

let timeRunning = 3000;
let timeAutoNext = 1000;

function showSlider(type) {

    let  itemSlider = listItem.querySelectorAll('.carousel .list .item');
    let itemThumbnail = document.querySelectorAll('.carousel .thumbnail .item');

    if (type === "next") {
        listItem.appendChild(itemSlider[0])
        thumbnail.appendChild(itemThumbnail[0])
        carousel.classList.add("next")
    }else {
        let lastItem = itemSlider.length -1 ;
        listItem.prepend(itemSlider[lastItem])
        thumbnail.prepend(itemThumbnail[lastItem])
        carousel.classList.add("prev")
    }

    // clearTimeout(runTimeOut);
    // runTimeOut = setTimeout(() => {
    //     carousel.classList.remove('next');
    //     carousel.classList.remove('prev');
    // }, timeRunning);

    // clearTimeout(runNextAuto);
    // runNextAuto = setTimeout(() => {
    //     next.click();
    // }, timeAutoNext)
    
}