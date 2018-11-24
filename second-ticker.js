// PP_Init
var audio = new Audio('second-ticker-sound.wav');
var tickingIntervalObject = null;
var isTicking = false;
var hoursNow = 0;
var minsNow = 0;
var secsNow = 0;

function startOrPauseTicking() {
	if (isTicking) {
		pauseTicking();
	} else {
		startTicking();
	}
}

function startTicking() {
	document.getElementById('startOrPauseBtn').innerText = "Pause";
	isTicking = true;
	tickingIntervalObject = setInterval(tickingInterval, 1000);
}

function pauseTicking() {
	document.getElementById('startOrPauseBtn').innerText = "Start";
	isTicking = false;
	audio.pause();
	clearInterval(tickingIntervalObject);
}

function tickingInterval() {
	audio.currentTime = 0.4;
	audio.play();
	increaseASecond();
}

function increaseASecond() {
	secsNow++;
	if (secsNow == 60) {
		secsNow = 0;
		minsNow++;
		if (minsNow == 60) {
			minsNow = 0;
			hoursNow++;
		}
	}
	updateUI();
}

function updateUI() {
    var hoursUI = hoursNow.toString().length == 1 ? "0" + hoursNow : "" + hoursNow;
    var minsUI = minsNow.toString().length == 1 ? "0" + minsNow : "" + minsNow;
    var secsUI = secsNow.toString().length == 1 ? "0" + secsNow : "" + secsNow;
    var now = (hoursUI == "00" ? "" : hoursUI + ":") + minsUI + ":" + secsUI;
	document.getElementById('count').innerText = now;
	document.title = now;
}