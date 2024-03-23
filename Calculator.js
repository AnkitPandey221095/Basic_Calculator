let string = "";
let buttons= document.querySelectorAll('.button');
let clickAudio= new Audio('audio/1.wav');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e)=>{
        clickAudio.play();
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        document.body.style.backgroundColor = "#" + randomColor;

        if(e.target.innerHTML=="="){
            string=eval(string)
            document.querySelector('input').value=string
        }
        else if(e.target.innerHTML=="C"){
            string=""
            document.querySelector('input').value=string
        }
        else if(e.target.innerHTML=="+/-"){
            string=-string
            document.querySelector('input').value=string
        }
        else{
            string = string + e.target.innerHTML;
            document.querySelector('input').value=string
        }
       
    })
})

