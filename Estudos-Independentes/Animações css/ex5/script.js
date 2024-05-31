var text = document.getElementById('text');
var img4 = document.getElementById('img4');
var img3 = document.getElementById('img3');
var img2 = document.getElementById('img2');

window.addEventListener('scroll', function() {
    let value = window.scrollY;
    text.style.marginTop = value * -1.5+'px';
    img4.style.top = value * 0.75+'px';
    img3.style.top = value * 0.5+'px';
    img2.style.top = value * 0.25+'px';
});