const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener('click', () =>{
    const scripture = input.value;
    input.value = '';

    const listItem = document.createElement('li');
    const listText = document.createElement('span');
    const listButton = document.createElement('button');

    listItem.appendChild(listText);
    listText.textContent = scripture;
    listItem.appendChild(listButton);
    listButton.textContent = '&#10005;'
    list.appendChild(listItem);

    listButton.addEventListener('click', () =>{
        list.removeChild(listItem);
    });

    input.focus();
});