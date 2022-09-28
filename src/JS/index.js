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
        sliderBody.firstElementChild.toggleAttribute('slider-active');
        sliderBody.firstElementChild.toggleAttribute('slider-nonactive');
    }
}

const toggleNowActive = (now) => {
    now.toggleAttribute('slider-active');
    now.toggleAttribute('slider-nonactive');
}

addAttr()

sliderButtonNext.addEventListener('click', () => {
    const nowActive = document.querySelector('[slider-active]');

    if (nowActive == sliderBody.lastElementChild) {
        sliderBody.firstElementChild.toggleAttribute('slider-active');
        sliderBody.firstElementChild.toggleAttribute('slider-nonactive');
    } else {
        nowActive.nextElementSibling.toggleAttribute('slider-active');
        nowActive.nextElementSibling.toggleAttribute('slider-nonactive');        
    }

    toggleNowActive(nowActive);
})

sliderButtonPrev.addEventListener('click', () => {
    const nowActive = document.querySelector('[slider-active]');

    if (nowActive == sliderBody.firstElementChild) {
        sliderBody.lastElementChild.toggleAttribute('slider-active');
        sliderBody.lastElementChild.toggleAttribute('slider-nonactive');
    } else{
        nowActive.previousElementSibling.toggleAttribute('slider-active');
        nowActive.previousElementSibling.toggleAttribute('slider-nonactive');
    }

    toggleNowActive(nowActive);
})

console.log(sliderBody.lastElementChild);
