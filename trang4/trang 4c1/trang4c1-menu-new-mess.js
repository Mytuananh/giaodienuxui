const filesTab = document.getElementById('files-tab');
const imagesTab = document.getElementById('images-tab');
const linksTab = document.getElementById('links-tab');
const mapsTab = document.getElementById('maps-tab');
const sharesTab = document.getElementById('shares-tab');
const historiesTab = document.getElementById('histories-tab');
const fileContent = document.getElementById('file-content');
const imageContent = document.getElementById('image-content');
const linkContent = document.getElementById('link-content');
const mapContent = document.getElementById('map-content');
const shareContent = document.getElementById('shares-content');
const historyContent = document.getElementById('history-content');

filesTab.addEventListener('click', function() {
    if (!filesTab.classList.contains('active')) {
        filesTab.classList.add('active');
        imagesTab.classList.remove('active');
        linksTab.classList.remove('active');
        mapsTab.classList.remove('active');
        sharesTab.classList.remove('active');
        historiesTab.classList.remove('active');
        fileContent.classList.add('active');
        imageContent.classList.remove('active');
        linkContent.classList.remove('active');
        mapContent.classList.remove('active');
        shareContent.classList.remove('active');
        historyContent.classList.remove('active');
    }
});

imagesTab.addEventListener('click', function() {
    if (!imagesTab.classList.contains('active')) {
        imagesTab.classList.add('active');
        filesTab.classList.remove('active');
        linksTab.classList.remove('active');
        mapsTab.classList.remove('active');
        sharesTab.classList.remove('active');
        historiesTab.classList.remove('active');
        imageContent.classList.add('active');
        fileContent.classList.remove('active');
        linkContent.classList.remove('active');
        mapContent.classList.remove('active');
        shareContent.classList.remove('active');
        historyContent.classList.remove('active');
    }
});
linksTab.addEventListener('click', function() {
    if (!linksTab.classList.contains('active')) {
        linksTab.classList.add('active');
        filesTab.classList.remove('active');
        imagesTab.classList.remove('active');
        mapsTab.classList.remove('active');
        sharesTab.classList.remove('active');
        historiesTab.classList.remove('active');
        linkContent.classList.add('active');
        fileContent.classList.remove('active');
        imageContent.classList.remove('active');
        mapContent.classList.remove('active');
        shareContent.classList.remove('active');
        historyContent.classList.remove('active');
    }
});
mapsTab.addEventListener('click', function() {
    if (!mapsTab.classList.contains('active')) {
        mapsTab.classList.add('active');
        filesTab.classList.remove('active');
        imagesTab.classList.remove('active');
        linksTab.classList.remove('active');
        sharesTab.classList.remove('active');
        historiesTab.classList.remove('active');
        mapContent.classList.add('active');
        fileContent.classList.remove('active');
        imageContent.classList.remove('active');
        linkContent.classList.remove('active');
        shareContent.classList.remove('active');
        historyContent.classList.remove('active');
    }
});

sharesTab.addEventListener('click', function() {
    if (!sharesTab.classList.contains('active')) {
        sharesTab.classList.add('active');
        filesTab.classList.remove('active');
        imagesTab.classList.remove('active');
        linksTab.classList.remove('active');
        mapsTab.classList.remove('active');
        historiesTab.classList.remove('active');
        shareContent.classList.add('active');
        fileContent.classList.remove('active');
        imageContent.classList.remove('active');
        linkContent.classList.remove('active');
        mapContent.classList.remove('active');
        historyContent.classList.remove('active');
    }
});
historiesTab.addEventListener('click', function() {
    if (!historiesTab.classList.contains('active')) {
        historiesTab.classList.add('active');
        filesTab.classList.remove('active');
        imagesTab.classList.remove('active');
        linksTab.classList.remove('active');
        mapsTab.classList.remove('active');
        sharesTab.classList.remove('active');
        historyContent.classList.add('active');
        fileContent.classList.remove('active');
        imageContent.classList.remove('active');
        linkContent.classList.remove('active');
        mapContent.classList.remove('active');
        shareContent.classList.remove('active');
    }
});
/*-------------------------------------------------mess---------------------------------------------------------------*/
const nutBanBe = document.querySelector('.icon-primary');
const newMess = document.querySelector('.icon-secondary');
const danhSachBanBe = document.querySelector('.friends-list');
const newList = document.querySelector('.new-mess');
const cacMucBanBe = document.querySelectorAll('.friend');

const personalTab = document.getElementById('personal-tab');
const groupTab = document.getElementById('group-tab');
const personalContent = document.getElementById('personal-content');
const groupContent = document.getElementById('group-content');

personalTab.addEventListener('click', function() {
    if (!personalTab.classList.contains('active')) {
        personalTab.classList.add('active');
        groupTab.classList.remove('active');
        personalContent.classList.add('active');
        groupContent.classList.remove('active');
    }
});

groupTab.addEventListener('click', function() {
    if (!groupTab.classList.contains('active')) {
        groupTab.classList.add('active');
        personalTab.classList.remove('active');
        groupContent.classList.add('active');
        personalContent.classList.remove('active');
    }
});

nutBanBe.addEventListener('click', function(event) {
    event.stopPropagation();
    if (danhSachBanBe.style.display === '' || danhSachBanBe.style.display === 'none') {
        danhSachBanBe.style.display = 'block';
        newList.style.display = 'none';
    } else {
        danhSachBanBe.style.display = 'none';
    }
});

danhSachBanBe.addEventListener('click', function(event) {
    event.stopPropagation();
});

newMess.addEventListener('click', function(event) {
    event.stopPropagation();
    if (newList.style.display === '' || newList.style.display === 'none') {
        newList.style.display = 'block';
        danhSachBanBe.style.display = 'none';
    } else {
        newList.style.display = 'none';
    }
});
newList.addEventListener('click', function(event) {
    event.stopPropagation();
});


cacMucBanBe.forEach(function(banBe) {
    banBe.addEventListener('click', function() {
        // Lấy tên và trạng thái của bạn bè được click
        const ten = this.querySelector('.friend-name').textContent;
        const trangThai = this.querySelector('.friend-status').classList.contains('online') ? 'online' : 'offline';

        // Xóa trạng thái cũ (nếu có)
        const trangThaiCu = document.querySelector('.chat-header .online, .chat-header .offline');
        if (trangThaiCu) {
            trangThaiCu.remove();
        }

        // Hiển thị trạng thái online hoặc offline dưới tên người dùng
        const trangThaiNguoiNhan = document.createElement('span');
        trangThaiNguoiNhan.textContent = trangThai === 'online' ? 'trực tuyến' : 'ngoại tuyến';
        trangThaiNguoiNhan.className = trangThai;
        trangThaiNguoiNhan.style.marginLeft = '5px';
    });
});
const cacNhom = document.querySelectorAll('.group');

cacNhom.forEach(function(nhom) {
    const soThanhVienOnline = nhom.querySelector('.group-info .group-number').dataset.membersOnline;
    const trangThaiNhom = nhom.querySelector('.group-status');

    if (soThanhVienOnline > 0) {
        trangThaiNhom.classList.add('online');
    } else {
        trangThaiNhom.classList.add('offline');
    }
});
document.addEventListener('click', function() {
    danhSachBanBe.style.display = 'none';
});

const searchInput = document.getElementById("search-input-new");
const friendList = document.getElementById("friend-list-new");

searchInput.addEventListener("keyup", (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const friends = friendList.querySelectorAll(".friend-new");

    friendList.style.display = searchTerm.length > 0 ? "block" : "none";

    friends.forEach((friend) => {
        const friendName = friend.textContent.toLowerCase();
        friend.style.display = friendName.includes(searchTerm) ? "block" : "none";
    });
});
/*-----------------------------------------------------------delete-share--------------------------------------------*/
document.getElementById('share-cancel').addEventListener("click", function() {
    let deleteColumns = document.getElementsByClassName("delete-user-share");
    for (let i = 0; i < deleteColumns.length; i++) {
        if (deleteColumns[i].style.display === "none") {
            deleteColumns[i].style.display = "table-cell";
        } else {
            deleteColumns[i].style.display = "none";
        }
    }
});
