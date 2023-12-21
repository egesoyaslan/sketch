const container = document.querySelector(`.container`);

function makeGrid(n) {
    let sqr = n * n;
    while (sqr > 0) {
        const pixel = document.createElement(`div`);
        let unit = 500 / n;
        pixel.style.cssText = `width: ${unit}px; height: ${unit}px;`;
        pixel.className = `pixel`
        container.appendChild(pixel);
        sqr--;
    }
}

makeGrid(16);

container.addEventListener('mouseover', (e) => {
    const target = e.target;
    if (target.classList.contains('pixel')) {
        target.style.backgroundColor = 'gainsboro';
    }
});

container.addEventListener('mouseout', (e) => {
    const target = e.target;
    if (target.classList.contains('pixel')) {
        target.style.backgroundColor = 'white';
    }
});