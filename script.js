const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const taskInput = document.getElementById("taskInput");

function addIteam(){
    
    const value = taskInput.value.trim();
    if (value === '') return;

    const li = document.createElement("li");
    li.textContent = value;

   

    const deletBtn = document.createElement("button");

    deletBtn.textContent = 'X';
    deletBtn.classList.add('delete-btn');


    deletBtn.addEventListener('click', function (e){
       e.stopPropagation();
       li.remove();
    }); 
    li.addEventListener("click", function () {
        li.classList.toggle("completed");
    });
     
    taskList.appendChild(li);
    li.appendChild(deletBtn);
    

    taskInput.value = "";    
}   
   
addBtn.addEventListener('click', addIteam);
taskInput.addEventListener('keyup', function (e){
    if(e.key === 'Enter'){
         addIteam();
         console.log("Task added");
    }
 });

