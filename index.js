
// select add btn 
const todoBtn = document.getElementById('add-btn');
const todoInput = document.getElementById('todo-input');
const todoBody=document.getElementById('todo-body');

// console.log(checkBtn)

// create todo function 
const createTodo = () => {
    if(todoInput.value == ''){
        alert('Please enter something')
    }else{
        const div = document.createElement('div');
    div.classList.add('new-item')
    div.innerHTML = `
   <p>${todoInput.value}</p>
   <div class='btn-container'>
   <button class='check-btn'><i class="fa fa-check" aria-hidden="true"></i>
   </button>
   <button class='trash-btn'><i class="fa fa-trash" aria-hidden="true"></i>
   </button>
   </div>
`;
todoBody.appendChild(div)
todoInput.value='';
console.log(div);
}
}

// delete and check button function 
const checkDelete=(e)=>{
    // debugger;
    const item=e.target;
    // delete btn 
    if(item.classList[0] === 'trash-btn'){
        item.parentNode.parentNode.remove()
    }
    // check btn 
    if(item.classList[0] === 'check-btn'){
        const check=item.parentNode.parentNode;
        check.classList.toggle('line')
    }
}

todoBody.addEventListener('click',checkDelete)
// adding create todo function 
todoBtn.addEventListener('click', createTodo);

