const sliderContainer = document.querySelector('[slider-container]');
const sliderBody = document.querySelector('[slider-body]');
const child = document.querySelectorAll('[slider-body] > [slider-body__item]');
const sliderButtonPrev = document.querySelector('[slider-button_prev]');
const sliderButtonNext = document.querySelector('[slider-button_next]');

// Enumeration all list of children of container and add classes(active/nonactive)
if (sliderBody.hasChildNodes) {
    for (item of child) {
        item.toggleAttribute('slider-nonactive');
    }
    sliderBody.firstElementChild.toggleAttribute('slider-active');
    sliderBody.firstElementChild.toggleAttribute('slider-nonactive');
}

sliderButtonNext.addEventListener('click', () => {
    // disable button when we have animation    
    sliderButtonNext.disabled = true;
    setTimeout(() => {
        sliderButtonNext.disabled = false;
    }, 1000)

    const nowActive = document.querySelector('[slider-active]');

    nowActive.toggleAttribute('slider-nonactive_next');
    // check to make a slider a cycle
    if (nowActive == sliderBody.lastElementChild) {
        sliderBody.firstElementChild.toggleAttribute('slider-active');
        sliderBody.firstElementChild.toggleAttribute('slider-nonactive');
        sliderBody.firstElementChild.toggleAttribute('slider-active_next');  
    } else {
        nowActive.nextElementSibling.toggleAttribute('slider-active');
        nowActive.nextElementSibling.toggleAttribute('slider-nonactive');
        nowActive.nextElementSibling.toggleAttribute('slider-active_next');    
    }
    //change attr from active to nonactive(vice versa)
    setTimeout(() => {
        nowActive.toggleAttribute('slider-active');
        nowActive.toggleAttribute('slider-nonactive');
    }, 1000)
    // removeAnimation
    setTimeout(() => {
        for (item of child) {
            item.removeAttribute('slider-active_next')
            item.removeAttribute('slider-nonactive_next')
        }        
    }, 1000)
})

sliderButtonPrev.addEventListener('click', () => {
    // disable button when we have animation
    sliderButtonPrev.disabled = true;
    setTimeout(() => {
        sliderButtonPrev.disabled = false;
    }, 1000)

    const nowActive = document.querySelector('[slider-active]');

    nowActive.toggleAttribute('slider-nonactive_prev');
    // check to make a slider a cycle
    if (nowActive == sliderBody.firstElementChild) {
        sliderBody.lastElementChild.toggleAttribute('slider-active');
        sliderBody.lastElementChild.toggleAttribute('slider-nonactive');
        sliderBody.lastElementChild.toggleAttribute('slider-active_prev');  
    } else{
        nowActive.previousElementSibling.toggleAttribute('slider-active');
        nowActive.previousElementSibling.toggleAttribute('slider-nonactive');
        nowActive.previousElementSibling.toggleAttribute('slider-active_prev');    
    }
    //change attr from active to nonactive(vice versa)
    setTimeout(() => {
        nowActive.toggleAttribute('slider-active');
        nowActive.toggleAttribute('slider-nonactive');
    }, 1000)
    // removeAnimation
    setTimeout(() => {
        for (item of child) {
            item.removeAttribute('slider-active_prev')
            item.removeAttribute('slider-nonactive_prev')
        }        
    }, 1000)
})


// console.log(sliderBody.lastElementChild);