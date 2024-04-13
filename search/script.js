const searchInput = document.querySelector('.search-input');

const cards = document.querySelectorAll('.cards')
const nothingFound = document.querySelector(".nothing-alert")


const filterValue =(searchQuery)=>{
    let found= '';
   cards.forEach((item, index)=>{
   const title=  item.querySelector(".title").textContent.toLowerCase();

   console.log(found);
    if (title.includes(searchQuery.toLowerCase())) {
        item.style.display = "block"

        found= item;
    } else {
        item.style.display = "none"
    }

 
   })

   nothingFound.style.display = `${!found ? "block" : "none"}`
}




searchInput.addEventListener("input", ()=>{
    const searchQuery = searchInput.value.trim();
    filterValue(searchQuery)

})

