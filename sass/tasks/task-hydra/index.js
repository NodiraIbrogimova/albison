var innerWidth = window.innerWidth;
var sliderItems = document.querySelectorAll('.item');
var arrowLeft = document.querySelector('#arrow-left');
var arrowRight = document.querySelector('#arrow-right');
var current = 0;

function reset() {
    for (let i = 0; i < sliderItems.length; i++) {
        sliderItems[i].style.display = 'none';
    }
}

function init() {
    if (document.body.clientWidth <= 890) {
        reset();
        addStyleToCurrElem(sliderItems[0]);
    }
}

function slideLeft() {
    reset();
    addStyleToCurrElem(sliderItems[current - 1]);
    current--;
}

arrowLeft.addEventListener('click', function () {
    if (current === 0) {
        current = sliderItems.length;
    }
    slideLeft();
});

function slideRight() {
    reset();
    addStyleToCurrElem(sliderItems[current + 1]);
    current++;
}

arrowRight.addEventListener('click', function () {
    if (current === sliderItems.length - 1) {
        current = -1;
    }
    slideRight();
});

function addStyleToCurrElem(el) {
    el.style.display = 'flex';
    el.style.justifyContent = 'center';
}

init();