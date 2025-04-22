// 새로고침 스크롤
// history.scrollRestoration = "auto";

// 스크롤하면 플립 추가
const spyEls = document.querySelector('section.scroll-spy');

const controller = new ScrollMagic.Controller();
spyEls.forEach(spyEl => {
    new ScrollMagic.Scene({
        triggerElement: spyEl,
        triggerHook: 0.5
    }).setClassToggle(spyEl, 'show')
        .addTo(controller);
});
