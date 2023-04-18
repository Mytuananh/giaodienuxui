const friendsButton = document.querySelector('.friends-button');
const friendsList = document.querySelector('.friends-list');
const friendItems = document.querySelectorAll('.friend');
const chatBox = document.querySelector('.chat-box');

friendsButton.addEventListener('click', function() {
    friendsList.style.display = friendsList.style.display === 'none' ? 'block' : 'none';
});

friendItems.forEach(function(friend) {
    friend.addEventListener('click', function() {
        // Lấy tên và trạng thái của bạn bè được click
        const name = this.querySelector('.friend-name').textContent;
        const status = this.querySelector('.friend-status').classList.contains('online') ? 'online' : 'offline';

        // Cập nhật thông tin trong bảng chat
        const chatName = document.querySelector('.chat-name');
        chatName.textContent = name;
        chatName.classList.add(status);

        // Hiển thị bảng chat
        chatBox.style.display = 'block';
    });
});
