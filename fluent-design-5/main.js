// Global variables.
var logEle = document.querySelector('#log');
var fBtnEles = document.querySelectorAll('.f-btn');

main();

function main() {
    init();

    window.addEventListener('mousemove', (eve) => onWindowMouseMove(eve));
}

function init() {
    for (const ele of fBtnEles) {
        ele.innerHTML = `<div class="f-btn-content">${ele.innerHTML}</div>`;
    }
}

function onWindowMouseMove(eve) {
    let message = "## body";
    message += `\noffsetX=${eve.offsetX} offsetY=${eve.offsetY}`;
    message += `\npageX=${eve.pageX} pageY=${eve.pageY}`;

    let i = 0;
    for (const ele of fBtnEles) {
        message += `\n## button ${++i}`;
        message += `\noffsetLeft=${ele.offsetLeft} offsetTop=${ele.offsetTop}`;

        let localMouseX = eve.pageX - ele.offsetLeft;
        let localMouseY = eve.pageY - ele.offsetTop;
        message += `\ncalculated local=(${localMouseX}, ${localMouseY})`;
        ele.style.background = `radial-gradient(circle at ${localMouseX}px ${localMouseY}px, #eee 0px, transparent 100px)`;
    }
    
    logEle.innerText = message;
}