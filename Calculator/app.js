const textArea = document.querySelector('.textArea');
const btns = document.querySelectorAll('button')
let list = [];

btns.forEach((btn)=>
    {btn.addEventListener('click',()=>{
        if(btn.innerText === 'AC'){
            list = [];
        }
        else if(btn.innerText === 'DE'){
            list.pop();
        }
        else if(btn.innerText === '='){
            let result = eval(list.join(""))
            textArea.innerText = result;
            list = [result];
        }
        else{
            list.push(btn.innerText);
        }
        textArea.innerText = list.join("");
    }
)})