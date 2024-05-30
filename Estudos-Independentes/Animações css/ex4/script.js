document.addEventListener("DOMContentLoaded", function() {
    const textElement = document.getElementById("text");
    const text = textElement.textContent;
    textElement.innerHTML = '';

    let touching = false;

    for (let char of text) {
        const span = document.createElement('span');
        span.textContent = char;
        textElement.appendChild(span);

        span.addEventListener('touchstart', function() {
            this.classList.remove('not-touch');
            touching = true;
            this.classList.add('touch');
        });

        span.addEventListener('touchend', function() {
            this.classList.remove('touch');
            touching = false;
            this.classList.add('not-touch');
        });
    }

    textElement.addEventListener('touchmove', function(event) {
        if (touching) {
            const touches = event.touches;
            for (let i=0; i < touches.length; i++) {
                const touchX = touches[i].clientX;
                const touchY = touches[i].clientY;
                const element = document.elementFromPoint(touchX, touchY);
                if (element && element.tagName === 'SPAN') {
                    element.classList.add('touch');
                }
            }
        }
    });
});