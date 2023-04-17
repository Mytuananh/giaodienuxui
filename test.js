const userList = document.querySelector('.user-list');
const userButton = document.querySelector('.user-button');

userButton.addEventListener('click', function() {
    userList.classList.toggle('show');
});

// Lấy danh sách người dùng từ nguồn dữ liệu nào đó và hiển thị trên bảng danh sách
const userOnline = ['Người dùng 1', 'Người dùng 3'];
const userOffline = ['Người dùng 2'];
const userListUL = document.querySelector('.user-list ul');
userOnline.forEach(function(user) {
    const userItem = document.createElement('li');
    userItem.textContent = user + ' (Online)';
    userListUL.appendChild(userItem);
});
userOffline.forEach(function(user) {
    const userItem = document.createElement('li');
    userItem.textContent = user + ' (Offline)';
    userListUL.appendChild(userItem);
});