history.scrollRestoration = "auto";

// goTo#
function goTo(params) {
    header = document.querySelector('header .inner');
    element = document.querySelector(params);
    window.scrollTo({
        top: window.pageYOffset + element.getBoundingClientRect().top - header.offsetHeight,
        behavior: 'auto'
    });
}

// 스크롤 인식
const spyEls = document.querySelectorAll('section.scroll-spy')
const controller = new ScrollMagic.Controller();
spyEls.forEach(spyEl => {
    new ScrollMagic.Scene({
        triggerElement: spyEl,
        triggerHook: 0.5
    }).setClassToggle(spyEl, 'show').addTo(controller);
})




// 탑버튼
const toTop = document.querySelector('#to-top');
window.addEventListener('scroll', function () {
    if (window.scrollY > 100) {
        toTop.style.opacity = 1;
        toTop.style.transform = 'translateX(0)';
    } else {
        toTop.style.opacity = 0;
        toTop.style.transform = 'translateX(100px)';
    }
})
