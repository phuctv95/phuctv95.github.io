var isCountingOrAlarming = false;
var interval = null;
var totalSecs = 0;
var audio = new Audio('Alarm-tone.mp3');
var minTemplate = [10, 15, 30, 45];
var blinkingInterval = null;
var blinkingFlag = 0;
var isBlinking = true;

window.onload = function() {
    enableAllTemplateInputs();
}

function playAlarm() {
    audio.loop = true;
    audio.play();
}

function stopAlarm() {
    audio.pause();
    audio.currentTime = 0;
}

function enableAllInputs() {
    document.getElementById("hours").disabled = false;
    document.getElementById("mins").disabled = false;
    document.getElementById("secs").disabled = false;
    enableAllTemplateInputs();
}

function disableAllInputs() {
    document.getElementById("hours").disabled = true;
    document.getElementById("mins").disabled = true;
    document.getElementById("secs").disabled = true;
    disableAllTemplateInputs();
}

function enableAllTemplateInputs() {
    var content = "";
    content += "Template mins:\n";
    for (var i = 0; i < minTemplate.length; i++) {
        content += `<a href="#" onclick="updateSettingTime(this)">${minTemplate[i]}</a>\n`;
    }
    document.getElementById("minTemplate").innerHTML = content;
}

function disableAllTemplateInputs() {
    var content = "";
    content += "Template mins:\n";
    for (var i = 0; i < minTemplate.length; i++) {
        content += `<a href="#">${minTemplate[i]}</a>\n`;
    }
    document.getElementById("minTemplate").innerHTML = content;
}

function getUI(secsNow, minsNow, hoursNow) {
    var hoursUI = hoursNow.toString().length == 1 ? "0" + hoursNow : "" + hoursNow;
    var minsUI = minsNow.toString().length == 1 ? "0" + minsNow : "" + minsNow;
    var secsUI = secsNow.toString().length == 1 ? "0" + secsNow : "" + secsNow;
    var ui = (hoursUI == "00" ? "" : hoursUI + ":") + minsUI + ":" + secsUI;
    return ui;
}

function doBlinking() {
    isBlinking = true;
    blinkingInterval = setInterval(function() {
        if (blinkingFlag == 0) {
            blinkingFlag = 1;
            document.getElementById("ui").innerText = "--:--"
            document.title = "--:--";
        }
        else {
            blinkingFlag = 0;
            document.getElementById("ui").innerText = "00:00";
            document.title = "00:00";
        }
    }, 500);
}

function stopBlinking() {
    isBlinking = false;
    clearInterval(blinkingInterval);
    blinkingFlag == 0;
    document.getElementById("ui").innerText = "00:00";
    document.title = "Countdown";
}

function doTheIntervalJob() {
    totalSecs--;
    var hoursNow = parseInt(totalSecs / 60 / 60);
    var minsNow = parseInt(totalSecs / 60) - hoursNow * 60;
    var secsNow = totalSecs - hoursNow * 60 * 60 - minsNow * 60;
    // console.log(`${totalSecs} ${hoursNow} ${minsNow} ${secsNow}`);
    var uiNow = getUI(secsNow, minsNow, hoursNow);
    document.getElementById("ui").innerText = uiNow;
    document.title = uiNow;
    if (totalSecs == 0) {
        clearInterval(interval);
        playAlarm();
        doBlinking();
    }
}

function startOrStop() {
    if (isCountingOrAlarming) {
        // Stop counting or alarming
        if (isBlinking)
            stopBlinking();
        clearInterval(interval);
        stopAlarm();
        enableAllInputs();
        document.getElementById("mainBtn").innerText = "Start";
        isCountingOrAlarming = false;
    }
    else {
        // Start counting
        disableAllInputs();
        document.getElementById("mainBtn").innerText = "Stop";
        isCountingOrAlarming = true;
        
        var hours = parseInt(document.getElementById("hours").value);
        var mins = parseInt(document.getElementById("mins").value);
        var secs = parseInt(document.getElementById("secs").value);
        totalSecs = secs + mins * 60 + hours * 60 * 60;
        
        totalSecs++;
        doTheIntervalJob();
        interval = setInterval(doTheIntervalJob, 1000);
    }
}

function handleKeyPressInInput(event) {
    if (event.keyCode == 13) {
        startOrStop();
    }
}

function updateSettingTime(clickedObject) {
    document.getElementById("mins").value = parseInt(clickedObject.innerText);
}