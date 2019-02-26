const rootNode = document.getElementById('root');

const todoItems = [
    {isDone: false, id: 12345, description: 'Todo 1'}
];

// Your code goes here

// rootNode.appendChild(/* Append your list item node*/);

let h1 = document.createElement('h1');
h1.innerHTML = 'Simple TODO applcation';
h1.style.textAlign = 'center';
h1.className = 'h1'
rootNode.appendChild(h1);

let addNewTaskButton = document.createElement('button');
addNewTaskButton.innerHTML = 'Add new task'
addNewTaskButton.className = 'addNewTaskButton'
rootNode.appendChild(addNewTaskButton)

// let inputElem = document.createElement('input');
// inputElem.setAttribute('type', 'text');
// inputElem.className = 'input'
// rootNode.appendChild(inputElem);


addNewTaskButton.addEventListener('click', addNewTask);

function addNewTask(e) {
    location.href = '#/add'

    let inputElem = document.createElement('input');
    inputElem.setAttribute('type', 'text');
    inputElem.className = 'input'
    rootNode.appendChild(inputElem);
    
} 