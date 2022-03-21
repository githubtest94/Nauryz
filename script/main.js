let tabsBtn = document.querySelectorAll('.header__lang');
let tabsItem = document.querySelectorAll('.main__tabs-content');
let slides = document.querySelectorAll('.main__slider-upper-track-img');
let count = 0;
let prevBtn = document.querySelector('.main__slider-upper-prev-btn');
let nextBtn = document.querySelector('.main__slider-upper-next-btn');
let dots = document.querySelectorAll('.main__slider-dots-item');
let dotsIndex = document.querySelectorAll('.main__slider-dots-item-index');
let countDots = 0;

tabsBtn.forEach(tabsSwitch);

function tabsSwitch (n) {
    n.addEventListener('click', function() {
        let currentBtn = n;
        let tabIndex = currentBtn.getAttribute('data-lang');
        let currentTab = document.querySelector(tabIndex);

        if (! currentBtn.classList.contains('tabs-btn-active')) {
            tabsBtn.forEach(function(n) {
                n.classList.remove('tabs-btn-active');
            });

            tabsItem.forEach(function(n) {
                n.classList.remove('tabs-item-active');
            });

            currentBtn.classList.add('tabs-btn-active');
            currentTab.classList.add('tabs-item-active');
        }
    });
}

document.querySelector('.header__lang').click();

function slideSwitch(item) {
    slides[count].classList = 'main__slider-upper-track-img ';
    count = (item + slides.length) % slides.length;
    slides[count].classList = 'main__slider-upper-track-img slider-active';
    dotsIndex[countDots].classList = 'main__slider-dots-item-index';
    countDots = (item + dotsIndex.length) % dotsIndex.length;
    dotsIndex[countDots].classList = 'main__slider-dots-item-index dots-active';
}

prevBtn.addEventListener('click', function() {
    slideSwitch(count - 1);
});

nextBtn.addEventListener('click', function() {
    slideSwitch(count + 1);
});