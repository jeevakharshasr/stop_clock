var timer=document.querySelector(".container-2");


var min="00";
var sec="00";
var ms="00";

timer.innerHTML=min+":"+sec+"."+ms;

function startWatch() {
    interval=setInterval(startTimer,10)}
 


function startTimer(){
    if(ms<9){
        ms++
        timer.innerHTML=min+":"+sec+"."+ms
    }
    if(ms<99){
        ms++;
        timer.innerHTML=min+":"+sec+"."+ms
        
    }
    
    if(ms>=99){
        sec++
        timer.innerHTML=min+":"+sec+"."+ms
        ms=0
    }
    
    if(sec>=60){
        min++
        timer.innerHTML=min+":"+sec+"."+ms
        sec=0

    }

}
function stopWatch(){
    clearInterval(interval)
}
function reset(){
    timer.innerHTML="00:00.00";
}



