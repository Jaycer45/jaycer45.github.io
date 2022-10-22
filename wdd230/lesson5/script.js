const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener('click', () => {
    const myItem = input.value;
    input.value = "";

    const listItem = document.createElement('li');
    const delBtn = document.createElement('button'); 
    const listText = document.createElement('span');

    listItem.appendChild(listText);
    listText.textContent = myItem;
    
    listItem.appendChild(delBtn);
    delBtn.textContent = '❌';
        
    list.appendChild(listItem);

    delBtn.addEventListener('click', () => {
        list.removeChild(listItem);
    });
    input.focus();
});