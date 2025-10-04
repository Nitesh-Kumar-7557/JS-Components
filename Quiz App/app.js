const options = document.querySelectorAll('.opt')
const correctOpt = document.querySelector('#correct')
let questionNum = 1;
let score = 0;
for(let option of options){
    option.addEventListener('click',()=>{
        if(option.getAttribute('id') === 'correct'){
            option.classList.add('correctOptStyle');
            score++;
        }
        else{
            option.classList.add('wrongOptStyle');
            options.forEach(opt =>{
                if(opt.getAttribute('id') === 'correct'){
                    opt.classList.add('correctOptStyle');
                }
            })
        }
        options.forEach(opt =>{
            opt.classList.add('disabled');
        })
        questionNum++;
    })
}

const questions = document.querySelectorAll('.ques');
const nextBtn = document.querySelector('.nextBtn');
const resetBtn = document.querySelector('.resetBtn');
const scoreAtLast = document.querySelector('.scoreAtLast');
nextBtn.addEventListener('click',() =>{
    if(questionNum === 1){ }
    else if(questionNum === 2){
        questions[0].classList.add('hidden');
        questions[1].classList.remove('hidden');
    }
    else if(questionNum === 3){
        questions[1].classList.add('hidden');
        questions[2].classList.remove('hidden');
    }
    else if(questionNum === 4){
        questions[2].classList.add('hidden');
        questions[3].classList.remove('hidden');
    }
    else if(questionNum === 5){
        questions[3].classList.add('hidden');
        questions[4].classList.remove('hidden');
    }
    else{
        scoreAtLast.innerText = `You scored ${score} out of 5!`;
        scoreAtLast.classList.remove('hidden')
        questions[4].classList.add('hidden');
        resetBtn.classList.remove('hidden');
        nextBtn.classList.add('hidden');
    }
    options.forEach(opt => {
        opt.classList.remove('disabled');
        opt.classList.remove('correctOptStyle');
        opt.classList.remove('wrongOptStyle');
    })
})

resetBtn.addEventListener('click', () =>{
    score = 0;
    questionNum = 1;
    scoreAtLast.classList.add('hidden');
    questions[0].classList.remove('hidden');
    resetBtn.classList.add('hidden');
    nextBtn.classList.remove('hidden');
})