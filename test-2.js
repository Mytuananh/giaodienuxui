const songList = document.querySelector('.song-list');
const scrollLeftButton = document.querySelector('.scroll-left');
const scrollRightButton = document.querySelector('.scroll-right');
let currentIndex = 0;
// Thay đổi trong phần JavaScript
const visibleSongs = 6; // Số lượng bài hát hiển thị cùng một lúc


// Thay đổi trong phần JavaScript
scrollLeftButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
});

scrollRightButton.addEventListener('click', () => {
    if (currentIndex < songList.childElementCount - 1) {
        currentIndex++;
        updateCarousel();
    }
});

function updateCarousel() {
    const transformValue = -currentIndex * 100;
    songList.style.transform = `translateX(${transformValue}px)`;

    // Cập nhật trạng thái nút mũi tên
    scrollLeftButton.classList.toggle('hidden', currentIndex === 0);
    scrollLeftButton.classList.toggle('visible', currentIndex !== 0);
    scrollRightButton.classList.toggle('hidden', currentIndex === songList.childElementCount - 1);
    scrollRightButton.classList.toggle('visible', currentIndex !== songList.childElementCount - 1);
}
