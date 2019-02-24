let rootNode = document.getElementById('root');

// Your code goes here
let inputTag = document.getElementById('todo');
let button = document.getElementById('buttonPlus');
let element = document.getElementById('todoAded');

if (inputTag.value === '') {
    button.setAttribute('disabled', 'disabled')
}
// if(inputTag.onfocus) {
//     button.removeAttribute('disabled');
// }
inputTag.addEventListener('keypress', inputType)
button.addEventListener('click', click)

function inputType() {
    if (inputTag.value === '') {
        button.setAttribute('disabled', 'disabled')
    } else {
        button.removeAttribute('disabled');
    }
}

function click(e) {
    if (inputTag.value === '') {
        button.setAttribute('disabled', 'disabled')
    }

    let elementDiv = document.createElement('div'); // added div element
    elementDiv.className = 'append-div'

    let iconCheck = document.createElement('i'); // add icon check-box
    iconCheck.className = 'material-icons chekboxing'
    iconCheck.innerHTML = 'check_box_outline_blank'

    let span = document.createElement('span');
    span.innerHTML = inputTag.value;


    if (inputTag.value !== '') {
        button.removeAttribute('disabled');
    }

    element.appendChild(elementDiv);

    elementDiv.appendChild(span);
    elementDiv.insertBefore(iconCheck, span);
}