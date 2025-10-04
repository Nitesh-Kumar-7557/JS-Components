const mainBox = document.querySelector('.box')
const successBtn = document.querySelector('#success');
const errorBtn = document.querySelector('#error');
const invalidBtn = document.querySelector('#invalid');
const btns = document.querySelectorAll('button');

for(let btn of btns){
    btn.addEventListener('click',()=>{
        const outerBox = document.createElement('div')
        const innerTopBox = document.createElement('div')
        const span = document.createElement('span')
        const innerBottomBox = document.createElement('div')
        const img = document.createElement('img')

        outerBox.classList.add('outerBox');
        mainBox.append(outerBox);
        innerTopBox.classList.add('innerTopBox');
        innerTopBox.append(img);
        innerTopBox.append(span);
        outerBox.append(innerTopBox);
        outerBox.append(innerBottomBox);

        checkBtnType(btn.getAttribute('id'), innerTopBox, img, span, innerBottomBox, outerBox);
        
    })
}

const checkBtnType = (id, innerTopBox, img, span, innerBottomBox, outerBox)=>{
    if(id == 'success'){
        span.innerText = 'Successfully submitted';
        img.setAttribute('src','success.png');
        innerBottomBox.classList.add('innerBottomBox');
        innerBottomBox.style.backgroundColor = 'green';
        innerBottomBox.classList.add('aniClass');
        outerBox.classList.add('moveClass');
        setInterval(()=>{
            innerBottomBox.remove();
        },3650)
        setInterval(()=>{
            outerBox.remove();
        },4900)
    }
    if(id == 'error'){
        span.innerText = 'Please fix the error!';
        img.setAttribute('src','error.png');
        innerBottomBox.classList.add('innerBottomBox');
        innerBottomBox.style.backgroundColor = 'red';
        innerBottomBox.classList.add('aniClass');
        outerBox.classList.add('moveClass');
        setInterval(()=>{
            innerBottomBox.remove();
        },3650)
        setInterval(()=>{
            outerBox.remove();
        },4900)
    }
    if(id == 'invalid'){
        span.innerText = 'Invalid input, check again';
        img.setAttribute('src','invalid.png');
        innerBottomBox.classList.add('innerBottomBox');
        innerBottomBox.style.backgroundColor = 'yellow';
        innerBottomBox.classList.add('aniClass');
        outerBox.classList.add('moveClass');
        setInterval(()=>{
            innerBottomBox.remove();
        },3650)
        setInterval(()=>{
            outerBox.remove();
        },4900)
    }
}