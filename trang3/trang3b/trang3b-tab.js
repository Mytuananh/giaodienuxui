const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$(".tab-item-hs");
const panes = $$(".tab-pane-hs");


// SonDN fixed - Active size wrong size on first load.
// Original post: https://www.facebook.com/groups/649972919142215/?multi_permalinks=1175881616551340


tabs.forEach((tab, index) => {
    const pane = panes[index];

    tab.onclick = function () {
        $(".tab-item-hs.active").classList.remove("active");
        $(".tab-pane-hs.active").classList.remove("active");


        this.classList.add("active");
        pane.classList.add("active");
    };
});
/*-------------------------------------------------------------------------------------------------------------------*/
const songList = document.querySelector('.tab-list');
const scrollLeftButton = document.querySelector('.scroll-left');
const scrollRightButton = document.querySelector('.scroll-right');
let currentIndex = 0;
// Thay đổi trong phần JavaScript
const visibleSongs = 1; // Số lượng bài hát hiển thị cùng một lúc


// Thay đổi trong phần JavaScript
scrollLeftButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex -= visibleSongs;
        if (currentIndex < 0) {
            currentIndex = 0;
        }
        updateCarousel();
    }
});

scrollRightButton.addEventListener('click', () => {
    if (currentIndex < songList.childElementCount - visibleSongs) {
        currentIndex += visibleSongs;
        if (currentIndex > songList.childElementCount - visibleSongs) {
            currentIndex = songList.childElementCount - visibleSongs;
        }
        updateCarousel();
    }
});

function updateCarousel() {
    const transformValue = -currentIndex * 29.2;
    songList.style.transform = `translateX(${transformValue}vh)`;

    // Cập nhật trạng thái nút mũi tên
    scrollLeftButton.classList.toggle('hidden', currentIndex === 0);
    scrollLeftButton.classList.toggle('visible', currentIndex !== 0);
    scrollRightButton.classList.toggle('hidden', currentIndex >= songList.childElementCount - visibleSongs);
    scrollRightButton.classList.toggle('visible', currentIndex < songList.childElementCount - visibleSongs);
}