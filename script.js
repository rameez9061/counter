let timer = document.getElementById("timer");

 timer.innerHTML = "00";
 let timedout;
 let loopstop =false
let running =(i)=>{

    if(i<61 && !loopstop){

        timedout = setTimeout(()=>{

             add(i)
             running(i+1)
        },1000)
    }
    
}



let add=(content)=>{
     if(content<"10"){

         timer.innerHTML ="0"+ content;
        }
        else{
            timer.innerHTML =content;
        }
}


let btn1 = document.getElementById("btn1");

btn1.addEventListener("click",()=>{

    console.log("clicked")
    loopstop = false;
    clearTimeout(timedout)
    running(0)
})


let btn3=document.getElementById("btn3");

btn3.addEventListener("click",()=>{
console.log("clicked")
   loopstop =true;
})


let btn2 = document.getElementById("btn2");

btn2.addEventListener("click",()=>{

    clearTimeout(timedout);
    timer.innerHTML = "00";
     console.log("clicked")
})



 






