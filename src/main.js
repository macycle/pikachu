import string from './css.js';

let n=0;
let t=100;   //速度控制
function run(){
    n+=1;
    if(n>string.length){
        clearInterval(timer)
        return;
    }
    console.log(`n:${n},string.substr:${string.substr(0,n)}`)
    demo1.innerText=string.substr(0,n);
    demo2.innerHTML=string.substr(0,n);
    demo1.scrollTop=demo1.scrollHeight;
}
let timer=setInterval(run,t);    //timer明显是一个函数调用的结果； 

btnPause.onclick=()=>{
    clearInterval(timer)
}

btnPlay.onclick=()=>{
    
    if(timer){         //先判断有没有计时器，有的话就清除，没有的话就设置一个
        clearInterval(timer)
    }
    timer=setInterval(run,t)
}


btnSlow.onclick=()=>{
    clearInterval(timer)
    t=300
    timer=setInterval(run,t)
}

btnNormal.onclick=()=>{
    clearInterval(timer)
    t=100
    timer=setInterval(run,t)
}

btnFast.onclick=()=>{
    clearInterval(timer)
    t=0
    timer=setInterval(run,t)
}

