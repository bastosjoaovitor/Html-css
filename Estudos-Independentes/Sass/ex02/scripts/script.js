const html = document.querySelector('html');
const btn = document.querySelector('#btn-darkmode');

btn.addEventListener('click', function() {
    html.classList.toggle('darkmode');
});