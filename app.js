var times;
var interval;
function runLoop(){
    times = document.getElementById("pop-input").value
    if(times != 0){
        document.getElementById("pop-up").style.display = "none"
        interval = setInterval(line,200)    
    }
    else{
        alert("Enter a number")
    }
}
var i = 0;
function line(){
    if(i == times){
        clearInterval(interval)
    }
    else {
        document.getElementById("loop-container").innerHTML += `🎂 Happy Birthday <span>Rushik</span> 🎂(${i+1}) <br>`
        window.scrollBy(0,100); 
    }
    i++
}
