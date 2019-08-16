var headerHeight = 4; //em

document.body.style.paddingTop = headerHeight + 'em';

function getVertScrollPos() {
    return document.documentElement.scrollTop || document.body.scrollTop;
}

function setHeaderToMinimize() {
    let ele = document.querySelector('.header');
    ele.style.boxShadow = '0px 2px 2px 0px rgba(0,0,0,0.1)';
    ele.style.background = 'linear-gradient(45deg, #fff494, #8aff9a, #4f93ff)';

    ele = document.querySelector('.header-content');
    ele.style.fontSize = '1em';
    ele.style.background = 'transparent';
    ele.style.backgroundClip = 'content-box';
    ele.style.color = 'black';
}

function setHeaderToMaximize() {
    let ele = document.querySelector('.header');
    ele.style.boxShadow = 'none';
    ele.style.background = 'transparent';

    ele = document.querySelector('.header-content');
    ele.style.fontSize = headerHeight + 'em';
    ele.style.background = 'linear-gradient(45deg, #fff494, #8aff9a, #4f93ff)';
    ele.style.backgroundClip = 'text';
    ele.style.webkitBackgroundClip = 'text';
    ele.style.color = 'transparent';
}

window.onscroll = function() {
    let scrPos = getVertScrollPos();
    if (scrPos > 10) {
        setHeaderToMinimize();
    } else {
        setHeaderToMaximize();
    }
}
