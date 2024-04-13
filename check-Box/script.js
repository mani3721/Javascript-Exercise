const checkbox = document.querySelectorAll('.checkbox');


const checkAll = document.querySelector('.checkAll');



checkbox.forEach((check)=>{
    check.addEventListener('change',()=>{

        const isChecked = document.querySelectorAll('.checkbox:checked').length === checkbox.length

           checkAll.checked = isChecked
         if (check.checked) {
            check.classList.add('active')
         } else {
            check.classList.remove('active')
         }
    })
})

checkAll.addEventListener('change', ()=>{
    checkbox.forEach((check)=>{


        check.checked = checkAll.checked

       

    })
})