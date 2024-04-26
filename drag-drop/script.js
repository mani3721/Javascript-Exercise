 function onStartDrag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

 function onDrop(ev) {
        ev.preventDefault();
        const id = ev.dataTransfer.getData("text");

        if (id.startsWith("source") && ev.target.id == "destination" && !document.getElementById("newId_" + id)) {
            const clone = document.getElementById(id).cloneNode(true);
            clone.id = "newId_" + id;
            ev.target.appendChild(clone);
            document.getElementById(id).classList.add("dragged"); 
            document.getElementById(id).style.display = "none"; 
        }
        ev.currentTarget.style.background = "";
    }

function onDragOver(ev) {
    ev.preventDefault();
}

function onDragEnter(ev) {
    ev.currentTarget.style.background = '#0a0a15';
}

function onDragLeave(ev) {
    ev.currentTarget.style.background = '#2b002b';
}

function onEndDrag(ev) {
    ev.target.style.border = "3px dashed #ff00ff";
}

document.querySelector('.parent').addEventListener('click', function(e){
    console.log(e.currentTarget.id, "currentTarget");
    console.log(e.target.id, "Target");
})