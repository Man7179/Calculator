let string="";
let buttons=document.querySelectorAll('.btn ');
Array.from(buttons).forEach((button) => {
button.addEventListener('click',(e)=>{
    if(e.target.innerHTML=="="){
        string=eval(string);
        document.querySelector('input').value=string;
    }
    else if(e.target.innerHTML=="sin"){
        string=Math.sin(string);
        document.querySelector('input').value=string;
    }
    else if(e.target.innerHTML=="cos"){
        string=Math.cos(string);
        document.querySelector('input').value=string;
    }
    else if(e.target.innerHTML=="tan"){
        string=Math.tan(string);
        document.querySelector('input').value=string;
    }
    else if(e.target.innerHTML=="cosine"){
        string=Math.tanh(string);
        document.querySelector('input').value=string;
    }

    else if(e.target.innerHTML=="C"){
        string="";
        document.querySelector('input').value=string;
    }
    else if(e.target.innerHTML=="M+"){
        string=+(string);
        document.querySelector('input').value=string;
    }
    else if(e.target.innerHTML=="M-"){
        string=-(string);
        document.querySelector('input').value=string;
    }
    else{
    console.log(e.target);
    string=string + e.target.innerHTML;
    document.querySelector('input').value=string;
    }
})
})