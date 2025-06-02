function addTask() {
    const inp = document.getElementById("task");
    const taskText = inp.value.trim();

    if(taskText === ""){
        alert("Please enter the task");
        return;
    }


const ul = document.getElementById("taskList");
const li = document.createElement("li");

li.textContent = taskText;

li.addEventListener("click", ()=>{
    li.classList.toggle("done");
});

ul.appendChild(li);
inp.value = "";

}

function removeTask(){
    
}