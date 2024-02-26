const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img");

let idx = 0;

function Carrossel() {
    idx++

    if(idx > img.length - 1) {
        idx = 0
    }

    let carouselWidth = document.querySelector('.carrossel').offsetWidth;

    imgs.style.transform = `translateX(${-idx * carouselWidth}px)`
}

setInterval(Carrossel, 1800);