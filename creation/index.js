var headerHeight = 4; //em

document.body.style.paddingTop = headerHeight + 'em';

function getVertScrollPos() {
    return document.documentElement.scrollTop || document.body.scrollTop;
}

function setHeaderToMinimize() {
    let ele = document.querySelector('.header-content');
    ele.style.fontSize = '1em';
    ele = document.querySelector('.header');
    ele.style.boxShadow = '0px 2px 2px 0px rgba(0,0,0,0.1)';
}

function setHeaderToMaximize() {
    let ele = document.querySelector('.header-content');
    ele.style.fontSize = headerHeight + 'em';
    ele = document.querySelector('.header');
    ele.style.boxShadow = 'none';
}

window.onscroll = function() {
    let scrPos = getVertScrollPos();
    if (scrPos > 10) {
        setHeaderToMinimize();
    } else {
        setHeaderToMaximize();
    }
}