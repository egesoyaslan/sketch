const container = document.querySelector(`.container`);

function makeGrid(n) {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    let sqr = n * n;
    while (sqr > 0) {
        const pixel = document.createElement(`div`);
        let unit = 80 / n;
        pixel.style.cssText = `width: ${unit}vh; height: ${unit}vh;`;
        pixel.className = `pixel`
        container.appendChild(pixel);
        sqr--;
    }
}

function getValue() {
    const field = document.querySelector(`#user`);
    const inputValue = field.value;
    return inputValue;
}

const button = document.querySelector(`#send`);
button.addEventListener(`click`, () => {
    const x = getValue();
    if (x <= 100 && x > 0) {
        makeGrid(x);
    } else if (x > 100 || x <= 0) {
        alert(`Plese enter a value between 1 and 100.`);
    } else {
        alert(`Please only enter number values.`);
    }
});

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