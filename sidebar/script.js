const navLink= document.querySelectorAll('.nav-list');



navLink.forEach((item)=>{
  item.addEventListener('click', function() {
    navLink.forEach((item)=>item.classList.remove('active'))
    this.classList.add('active');
  })
})