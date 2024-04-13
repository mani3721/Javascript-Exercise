const navLinks = document.querySelectorAll(".nav-link")

const toggleBtn = document.querySelector('.checkbox');
const body = document.body;


navLinks.forEach((link)=>{
    link.addEventListener('click',(e)=>{
        navLinks.forEach((link)=>link.classList.remove('active'))
        link.classList.add('active')
    })
})

// Dark Mode

let isDarkMode = localStorage.getItem("darkMode") === "true";
    isDarkMode && body.classList.add('dark-mode'); 

toggleBtn.addEventListener('click', ()=>{
    
    body.classList.toggle("dark-mode")
    localStorage.setItem("darkMode", body.classList.contains("dark-mode"))
})