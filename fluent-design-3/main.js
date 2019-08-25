var logEle = document.querySelector('#log');
var fBtnEles = document.querySelectorAll('.f-btn');

window.addEventListener('mousemove', (eve) => onWindowMouseMove(eve));

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
        ele.style.background = `radial-gradient(circle at ${localMouseX}px ${localMouseY}px, #eee 0px, lightgray 100px)`;
    }
    
    logEle.innerText = message;
}