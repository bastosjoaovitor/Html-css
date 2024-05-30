document.addEventListener("DOMContentLoaded", function() {
    const textElement = document.getElementById("text");
    const text = textElement.textContent;
    textElement.innerHTML = '';

    for (let char of text) {
        const span = document.createElement('span');
        span.textContent = char;
        textElement.appendChild(span);

        span.addEventListener('touchstart', function() {
            this.classList.remove('not-touch');
            this.classList.add('touch');
        });

        span.addEventListener('touchend', function() {
            this.classList.remove('touch');
            this.classList.add('not-touch');
        });
    }
});