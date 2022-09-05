let fsm = {
    "initial" : "red",

    "states" : {

        "red":  {
            "rc": '#FF0101',
            "yc": '#766B01',
            "gc": '#0F7601',
            "limit": 20000
        },
        "yellow": {
            "rc": '#5F0101',
            "yc": '#F0FF01',
            "gc": '#0F7601',
            "limit": 5000
        },
        "green": {
            "rc": '#5F0101',
            "yc": '#766B01',
            "gc": '#33FF01',
            "limit": 15000

        }
    },
    "current": "red"
}

function immediate(color){
    
    if(color === 'red') {
        document.getElementById('red').style.backgroundColor = fsm.states.red.rc;
        document.getElementById('yellow').style.backgroundColor = fsm.states.red.yc;
        document.getElementById('green').style.backgroundColor = fsm.states.red.gc;   
    }
    else if(color === 'yellow') {
        document.getElementById('red').style.backgroundColor = fsm.states.yellow.rc;
        document.getElementById('yellow').style.backgroundColor = fsm.states.yellow.yc;
        document.getElementById('green').style.backgroundColor = fsm.states.yellow.gc;
    }
    else if(color === 'green'){
        document.getElementById('red').style.backgroundColor = fsm.states.green.rc;
        document.getElementById('yellow').style.backgroundColor = fsm.states.green.yc;
        document.getElementById('green').style.backgroundColor = fsm.states.green.gc;
    }
}

var seconds = 0;
function countdown(){
    document.getElementById("timer").innerText = seconds;
    seconds--;
}
setInterval(countdown, 1000);

var timer = 0;

function red(){
    immediate('red');
    clearTimeout(timer);
    seconds = 20;
    timer = setTimeout(green, fsm.states.red.limit);
}
function yellow(){
    immediate('yellow');
    clearTimeout(timer);
    seconds = 5;
    timer = setTimeout(red, fsm.states.yellow.limit);
}
function green(){
    immediate('green');
    clearTimeout(timer);
    seconds = 15;
    timer = setTimeout(yellow, fsm.states.green.limit);
}
