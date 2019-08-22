var btnElements = document.querySelectorAll('.f-button');
var logElement = document.querySelector('#log');

btnElements.forEach(ele => {
    ele.addEventListener('mousemove', (eve) => {
        handleMouseMove(eve, ele);
    });
});

function handleMouseMove(eve, ele) {
    // keyword: "css gradient border"
    logMouseMove(eve);
    ele.style.borderImage = `radial-gradient(circle at ${eve.offsetX}px ${eve.offsetY}px, white 0px, #aaa 100px)`;
    ele.style.borderImageSlice = '1';
    console.log(ele);
}

function logMouseMove(eve) {
    let log = "";
    log += `clientX=${eve.clientX}\tclientY=${eve.clientY}\n`;
    log += `layerX=${eve.layerX}\tlayerY=${eve.layerY}\n`;
    log += `pageX=${eve.pageX}\tpageY=${eve.pageY}\n`;
    log += `x=${eve.x}\t\ty=${eve.y}\n`;
    log += `offsetX=${eve.offsetX}\toffsetY=${eve.offsetY}\n`;
    log += `screenX=${eve.screenX}\tscreenY=${eve.screenY}\n`;
    // log += `movementX=${eve.movementX}\tmovementY=${eve.movementY}\n`;
    logElement.innerText = log;
}