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
const songList1 = document.querySelector('.tab-list-1');
const scrollLeftButton1 = document.querySelector('.scroll-left-1');
const scrollRightButton1 = document.querySelector('.scroll-right-1');
let currentIndex = 0;
// Thay đổi trong phần JavaScript
const visibleSongs = 1; // Số lượng bài hát hiển thị cùng một lúc
let currentIndex1 = 0;
// Thay đổi trong phần JavaScript
const visibleSongs1 = 1; // Số lượng bài hát hiển thị cùng một lúc

// Thay đổi trong phần JavaScript
const currentYear = new Date().getFullYear(); // Lấy năm hiện tại
function scrollToCurrentYear() {
    for (let i = 0; i < songList1.childElementCount; i++) {
        const song = songList1.children[i];
        const songYear = parseInt(song.getAttribute('data-year'), 10);

        if (songYear === currentYear) {
            currentIndex1 = Math.max(0, i - (i % visibleSongs1)); // Đảm bảo index là bội số của visibleSongs
            break;
        }
    }
    updateCarousel1();
}
// Khai báo biến
const selectTab = document.querySelector('#select-tab');
const tabNamHS = document.querySelector('#tab-nam-hs');
const tabNamHS1 = document.querySelector('#tab-nam-hs-1');

// Xử lý sự kiện change của phần tử select
selectTab.addEventListener('change', () => {
    if (selectTab.value === 'tab-nam-hs') {
        tabNamHS.style.display = 'block';
        tabNamHS1.style.display = 'none';
    } else if (selectTab.value === 'tab-nam-hs-1') {
        tabNamHS.style.display = 'none';
        tabNamHS1.style.display = 'block';
        scrollToCurrentYear(); // Cuộn danh sách về năm hiện tại
    }
});

// Thêm mã JavaScript để xử lý việc cuộn danh sách bài hát tại đây

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
// Thay đổi trong phần JavaScript
scrollLeftButton1.addEventListener('click', () => {
    if (currentIndex1 > 0) {
        currentIndex1 -= visibleSongs1;
        if (currentIndex1 < 0) {
            currentIndex1 = 0;
        }
        updateCarousel1();
    }
});

scrollRightButton1.addEventListener('click', () => {
    if (currentIndex1 < songList1.childElementCount - visibleSongs1) {
        currentIndex1 += visibleSongs1;
        if (currentIndex1 > songList1.childElementCount - visibleSongs1) {
            currentIndex1 = songList1.childElementCount - visibleSongs1;
        }
        updateCarousel1();
    }
});

function updateCarousel1() {
    const transformValue = -currentIndex1 * 29.3;
    songList1.style.transform = `translateX(${transformValue}vh)`;

    // Cập nhật trạng thái nút mũi tên
    scrollLeftButton1.classList.toggle('hidden', currentIndex1 === 0);
    scrollLeftButton1.classList.toggle('visible', currentIndex1 !== 0);
    scrollRightButton1.classList.toggle('hidden', currentIndex1 >= songList1.childElementCount - visibleSongs1);
    scrollRightButton1.classList.toggle('visible', currentIndex1 < songList1.childElementCount - visibleSongs1);
}

document.addEventListener("DOMContentLoaded", function () {
    var optionSelect = document.getElementById("select-tab");

    optionSelect.addEventListener("change", function () {
        var selectedValue = this.value;
        var div1 = document.getElementById("tab-nam-hs");
        var div2 = document.getElementById("tab-nam-hs-1");

        if (selectedValue === "tab-nam-hs") {
            div1.style.display = "flex";
            div2.style.display = "none";
        } else if (selectedValue === "tab-nam-hs-1") {
            div1.style.display = "none";
            div2.style.display = "flex";
        }
    });
});



