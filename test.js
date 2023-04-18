const nutBanBe = document.querySelector('.friends-button');
const danhSachBanBe = document.querySelector('.friends-list');
const cacMucBanBe = document.querySelectorAll('.friend');
const hopThoaiChat = document.querySelector('.chat-box');


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
    } else {
        danhSachBanBe.style.display = 'none';
    }
});

danhSachBanBe.addEventListener('click', function(event) {
    event.stopPropagation();
});

cacMucBanBe.forEach(function(banBe) {
    banBe.addEventListener('click', function() {
        // Lấy tên và trạng thái của bạn bè được click
        const ten = this.querySelector('.friend-name').textContent;
        const trangThai = this.querySelector('.friend-status').classList.contains('online') ? 'online' : 'offline';

        // Cập nhật thông tin trong hộp thoại chat
        const tenNguoiNhan = document.querySelector('.chat-name');
        tenNguoiNhan.textContent = ten;
        tenNguoiNhan.classList.add(trangThai);

        // Hiển thị hộp thoại chat
        hopThoaiChat.style.display = 'block';
    });
});

document.addEventListener('click', function() {
    danhSachBanBe.style.display = 'none';
});


cacMucBanBe.forEach(function(banBe) {
    banBe.addEventListener('click', function() {
        // Lấy tên và trạng thái của bạn bè được click
        const ten = this.querySelector('.friend-name').textContent;
        const trangThai = this.querySelector('.friend-status').classList.contains('online') ? 'online' : 'offline';

        // Cập nhật thông tin trong hộp thoại chat
        const tenNguoiNhan = document.querySelector('.chat-name');
        tenNguoiNhan.textContent = ten;
        tenNguoiNhan.classList.add(trangThai);

        // Thêm dấu tròn trên avatar
        const avatarNguoiNhan = this.querySelector('img');
        if (trangThai === 'online') {
            avatarNguoiNhan.style.border = "2px solid #4CAF50";
        } else {
            avatarNguoiNhan.style.border = "2px solid #f44336";
        }

        // Hiển thị trạng thái online/offline dưới tên người dùng
        const trangThaiText = this.querySelector('.friend-status-text');
        trangThaiText.textContent = trangThai.toUpperCase();

        // Hiển thị hộp thoại chat
        hopThoaiChat.style.display = 'block';
    });
});
