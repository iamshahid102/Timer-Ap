var h = document.getElementById('hour');
var m = document.getElementById('minute');
var s = document.getElementById('sec');

var startTimer = null;

function timer(){
    if(h.value == 0 && m.value == 0 && s.value == 0){
        h.value = 0;
        m.value = 0;
        s.value = 0; 
    } else if(s.value != 0){
        s.value--;
    } else if(m.value != 0 && s.value == 0){
        s.value = 59;
        m.value--;
    } else if(h.value != 0 && m.value == 0){
        m.value = 60;
        h.value--;
    }
    return;
}

var interval;

function start() {
    interval = setInterval(timer, 1000);

}

function pause() {
    clearInterval(interval)
}

function reset() {
    pause()
    h.value = 0
    m.value = 0
    s.value = 0
    
}