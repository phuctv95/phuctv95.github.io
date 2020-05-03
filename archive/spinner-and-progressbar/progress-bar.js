function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

function incProgressBar() {
    if (progress === 100) {
        progress = 0;
    }
    progress += getRndInteger(1, 20);
    if (progress > 100) {
        progress = 100;
    }
    var ele = document.getElementsByClassName('fill');
    for (let index = 0; index < ele.length; index++) {
        ele[index].style.width = progress + '%';
    }
}
(function() {
    progress = 0;
    setInterval(() => incProgressBar(), 500);
})();