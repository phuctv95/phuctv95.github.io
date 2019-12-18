function main() {
    console.log('main()');
    var listFBtn = document.querySelectorAll('.f-button');
    listFBtn.forEach(el => {
        el.addEventListener('mousemove', event => {
            el.style.background = `radial-gradient(circle at ${event.x}px ${event.y}px, #eee, #aaa 100px)`
        })
    });
    listFBtn.forEach(el => {
        el.addEventListener('mouseleave', event => {
            el.style.background = `#aaa`
        })
    });
    document.body.addEventListener('mousemove', event => {
        console.log(event);
        document.querySelector('#log').innerText = `${event.x} ${event.y}`;
    })
}

main();