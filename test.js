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

        tenNguoiNhan.parentNode.insertBefore(trangThaiNguoiNhan, tenNguoiNhan.nextSibling);

        // Hiển thị hộp thoại chat
        hopThoaiChat.style.display = 'block';
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
