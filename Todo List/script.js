const addBtn = document.querySelector('.add-btn');
const input = document.querySelector('.form-input');
const taskList = document.querySelector('.task');




const addTask =()=>{
    const value =  input.value.trim();
    if (!value =="") {
      const task = `<div>
      <h2>${value}</h2>
      <button class="btn-edit">Edit</button>
      <button class="btn-delete">Delete</button>
      </div>`

        // taskList.insertAdjacentHTML("beforeend", task);
         taskList.innerHTML += task;
         input.value =''
        // let div= document.createElement('div')
        // div.innerHTML = task
        // taskList.appendChild(div)
    }else {
        document.querySelector('.error').textContent="please Enter Value"
    }

    const deleteBtn = document.querySelectorAll('.btn-delete')

    deleteBtn.forEach((btn)=>{
        btn.addEventListener("click",()=>{
            btn.parentNode.remove();
        })
    })


    
    const editBtn = document.querySelectorAll('.btn-edit')

    editBtn.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            let editValue = e.target;
    
            if (!e.target.classList.contains('btn-edit')) {
                editValue = e.target.parentElement;
            }

            input.value = editValue.previousElementSibling?.innerHTML;
        
            editValue.parentNode.remove();
        });
    });
}

addBtn.addEventListener("click", addTask)

