const sliderContainer = document.querySelector('[slider-container]');
const sliderBody = document.querySelector('[slider-body]');
const child = document.querySelectorAll('[slider-body] > div');
const sliderButtonPrev = document.querySelector('[slider-button_prev]');
const sliderButtonNext = document.querySelector('[slider-button_next]');

const addAttr = () => {
    if (sliderBody.hasChildNodes) {
        for (item of child) {
            item.toggleAttribute('slider-nonactive');
        }
    }
}

const activeAttr = () => {
    sliderBody.firstElementChild.toggleAttribute('slider-active');
    sliderBody.firstElementChild.toggleAttribute('slider-nonactive');
}

addAttr()
activeAttr()

sliderButtonNext.addEventListener('click', (e) => {
    const nowActive = document.querySelector('[slider-active]');
    nowActive.nextElementSibling.toggleAttribute('slider-active');
    nowActive.nextElementSibling.toggleAttribute('slider-nonactive');
    nowActive.toggleAttribute('slider-active');
    nowActive.toggleAttribute('slider-nonactive');
})

sliderButtonPrev.addEventListener('click', (e) => {
    const nowActive = document.querySelector('[slider-active]');

    nowActive.previousElementSibling.toggleAttribute('slider-active');
    nowActive.previousElementSibling.toggleAttribute('slider-nonactive');

    nowActive.toggleAttribute('slider-active');
    nowActive.toggleAttribute('slider-nonactive');
})

