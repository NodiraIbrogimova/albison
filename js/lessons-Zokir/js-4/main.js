function main() {
    // callElem(1000, shape, color);
    // callElem(2000, shape, color);
    // callElem(3000, shape, color);
    setTimeout(() => {
        console.log('Create circle with red background color', createElem('circle', 'red'));
    }, 1000);

    setTimeout(() => {
        console.log('Create square with blue background color', createElem('square', 'blue'));
    }, 2000);
    setTimeout(() => {
        console.log('Create square with blue background color', createElem('ellipse', 'green'));
    }, 3000);
}

function callElem(delay, shape, color) {
    setTimeout(() => {
        console.log(`Create ${shape} with ${color} background color`, createElem(shape, color));
    }, delay);
}

function createElem(shape, color) {
    const elem = document.createElement('div');
    document.body.appendChild(elem);
    elem.classList.add(shape, 'item');
    elem.style.backgroundColor = color;
}

main();