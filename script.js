const container = document.querySelector(`.container`);

function makeGrid(n) {
    while (n > 0) {
        const pixel = document.createElement(`div`);
        pixel.className = `pixel`;
        container.appendChild(pixel);
        n--;
    }
}

makeGrid(256);

container.addEventListener(`mouseover`, (e) => {
    const target = (e.target);
    target.style.cssText = `background-color: gainsboro`
});

container.addEventListener(`mouseout`, (e) => {
    const target = (e.target);
    target.style.cssText = `background-color: white`
});