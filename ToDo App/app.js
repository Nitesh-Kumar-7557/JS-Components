const input = document.querySelector('input');
const addBtn = document.querySelector('.addBtn');
const tasksList = document.querySelector('.tasks');

addBtn.addEventListener('click',() => {
    const task = document.createElement('div');
    const img = document.createElement('img');
    const cancelBtn = document.createElement('button');

    task.innerText = input.value;
    img.setAttribute('src', 'images/unchecked.png');
    cancelBtn.innerText = 'x';

    task.classList.add('task');
    task.addEventListener('click',(e) =>{
        task.classList.toggle('line-through');
        if(e.target === cancelBtn){
            task.remove();
        }
        else if (img.getAttribute('src') === 'images/unchecked.png') {
            img.setAttribute('src', 'images/checked.png');
        } else {
            img.setAttribute('src', 'images/unchecked.png');
        }
    })

    tasksList.insertAdjacentElement('afterbegin', task);
    task.insertAdjacentElement('afterbegin', img);
    task.insertAdjacentElement('beforeend', cancelBtn);
    input.value = '';
})
