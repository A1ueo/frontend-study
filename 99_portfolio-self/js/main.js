// 새로고침 스크롤
history.scrollRestoration = "manual";

// 스크롤하면 플립 추가
sectionEl = document.querySelector('section');

sectionEl.addEventListener('scroll', function () {
    console.log('scrolled');

})
