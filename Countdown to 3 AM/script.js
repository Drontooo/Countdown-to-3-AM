function update() {
    let timer = document.getElementById("cdt");
    let time = new Date();
    let hour = time.getHours(), minute = time.getMinutes(), second = time.getSeconds();
    
    if(hour > 3) {
        timer.innerHTML = (27 - hour) + ":" + (59 - minute) + ":" + (59 - second);
    }
    else if(hour < 3) {
        timer.innerHTML = (3 - hour) + ":" + (60 - minute) + ":" + (60 - second);
    }
    else if(hour == 3) {
        stop = true;
        timer.innerHTML = "0:0:0";
        let alarm = new Audio("./resources/alarm.mp3");
        alarm.playbackRate = 0.3;
        alarm.volume = 0.1;
        alarm.play();
        note.innerHTML = "(when it is no longer 3 am refresh the page to restart the countdown)";
    }
}

function caller() {
    update();
    if(stop == false) {
        setTimeout(caller, 1);
    }
}

function begin() {
    let main = document.getElementById("main");
    let note = document.getElementById("note");
    let time = new Date();
    let check = time.getHours();
    if(check == 3) {
        alert("Warning: When the countdown ends (when 3 AM comes) a loud sound (alarm) plays but it seems that it's already 3 AM for you.\nOnce you press OK a very loud alarm will play");
    } 
    main.removeChild(main.children[2]);
    note.innerHTML = "(this is based on the time in your device & loud alarm will play when countdown ends)";
    caller();
}

var stop = false;
