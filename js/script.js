const headerBtn = document.querySelector('.main-nav__toggle');
headerBtn.addEventListener('click', () => {
    headerBtn.classList.toggle("main-nav__toggle--toggled");
});;
const SLIDER_CLASS = '.slider';
const SLIDE_CLASS = '.slider__item';
const SLIDER_BTN_CLASS = '.slider__toggle';
const MODIFICATOR = '--active';
const PREV_BTN_CLASS = '.slider__prev';
const NEXT_BTN_CLASS = '.slider__next';
const SLIDE_ACTIVE = SLIDE_CLASS + MODIFICATOR;
const CONTROL_ACTIVE = SLIDER_BTN_CLASS + MODIFICATOR;

const sliders = document.querySelectorAll(SLIDER_CLASS);

for (let i = 0; i < sliders.length; i++) {
    const slider = sliders[i];
        slider.currentSlide = 0;

    const slides = slider.querySelectorAll(SLIDE_CLASS);
    const controls = slider.querySelectorAll(SLIDER_BTN_CLASS);

    slider.btnPrev = slider.querySelector(PREV_BTN_CLASS);
    slider.btnNext = slider.querySelector(NEXT_BTN_CLASS);

    if (slider.btnPrev) {
        slider.btnPrev.disabled = true;

        slider.btnPrev.addEventListener("click", function() {
            activateSlide(slider.currentSlide - 1);
        });
    }

    if (slider.btnNext) {
        slider.btnNext.addEventListener("click", function() {
            activateSlide(slider.currentSlide + 1);
        });
    }

    for (let j = 0; j < controls.length; j++) {
        const control = controls[j];

        control.addEventListener("click", function() {
            activateSlide(j);
        });
    }

    function activateSlide(n) {
        if (n < 0) return;
        if (n > slides.length - 1) return;

        slider.currentSlide = n;

        slider.querySelector(SLIDE_ACTIVE)
            .classList.remove(SLIDE_ACTIVE.slice(1));

        slides[n].classList.add(SLIDE_ACTIVE.slice(1));

        slider.querySelector(CONTROL_ACTIVE)
            .classList.remove(CONTROL_ACTIVE.slice(1));
        
        controls[n].classList.add(CONTROL_ACTIVE.slice(1));

        checkSlides();
    }

    // Проверка, какой слайд активен. Если крайний, дизейблим соотв. кнопку
    function checkSlides() {
        if (slider.btnPrev && slider.btnNext) {

            if (slider.currentSlide == 0) {
                slider.btnPrev.disabled = true;
            } else {
                slider.btnPrev.disabled = false;
            }

            if (slider.currentSlide == slides.length - 1) {
                slider.btnNext.disabled = true;
            } else {
                slider.btnNext.disabled = false;
            }
        }
    }
};
const loginBtn = document.querySelector('.user-list__login');
const modalCloseBtn = document.querySelectorAll('.modal__close');
const modalWrapper = document.querySelector('.modal__wrapper');
const modalLogin = document.querySelector('.modal__login');

if (loginBtn) loginBtn.addEventListener("click", function(e) {
  e.preventDefault();

  openModalLogin();
});

for (let i = 0; i < modalCloseBtn.length; i++) {
  modalCloseBtn[i].addEventListener("click", closeModal);
}

function closeModal() {
  let modals = document.querySelectorAll('.modal--open');
  for (let i = 0; i < modals.length; i++) {
    modals[i].classList.remove('modal--open');
  }
}

function openModal(modal) {
  modalWrapper.classList.add('modal--open');
  modal.classList.add('modal--open');
}

function openModalLogin() {
  openModal(modalLogin);
};
const nojs = document.querySelectorAll('.nojs' );

for (let i = 0; i < nojs.length; i++) {
  nojs[i].classList.remove('nojs');
};