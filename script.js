const input = document.getElementById('input');
const tasklist = document.getElementById('tasklist');
const btn = document.getElementById('task');
btn.addEventListener('click',function(){
const values = input.value.trim();
if(values==='')return;
if(values){
    tasklist.innerHTML+=`
    <div class="first">${values}</div>
    <button onclick="deleteTask(this)">Delete</button>
    `
    input.value = '';
}


})
function deleteTask(button) {
    
}function deleteTask(button) {
    button.parentElement.style.display = "none";
}
function completeTask(taskDiv) {
    taskDiv.classList.toggle("completed");
}