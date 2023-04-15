var activeContentId = null;

function toggleContent(contentId) {
    if (activeContentId === contentId) {
        document.getElementById(contentId).classList.add("hidden");
        activeContentId = null;
    } else {
        if (activeContentId) {
            document.getElementById(activeContentId).classList.add("hidden");
        }
        document.getElementById(contentId).classList.remove("hidden");
        activeContentId = contentId;
    }
}
/*Đếm số lượng tin nhắn chưa đọc hoặc chưa xem*/
function updateUnreadCounts() {
    var messageUnreadCount = document.querySelectorAll("#message-list .message-item.unread").length;
    var notificationUnreadCount = document.querySelectorAll("#notification-list .notification-item.unread").length;

    updateBadge("mess", messageUnreadCount);
    updateBadge("notification", notificationUnreadCount);
}

function updateBadge(iconClass, count) {
    var icon = document.querySelector("." + iconClass);
    var notificationBadge = icon.querySelector(".notification-badge");

    if (count > 0) {
        if (!notificationBadge) {
            notificationBadge = document.createElement("span");
            notificationBadge.className = "notification-badge";
            icon.appendChild(notificationBadge);
        }
        notificationBadge.textContent = count > 5 ? "5+" : count;
    } else if (notificationBadge) {
        icon.removeChild(notificationBadge);
    }
}

// Gọi hàm updateUnreadCounts() để cập nhật số lượng chưa đọc ban đầu
updateUnreadCounts();

// Khi hover outside thì bảng tự ẩn
document.addEventListener("click", function (event) {
    var messageIcon = document.querySelector(".mess");
    var notificationIcon = document.querySelector(".notification");
    var messageList = document.getElementById("message-list");
    var notificationList = document.getElementById("notification-list");

    if (
        !messageIcon.contains(event.target) &&
        !notificationIcon.contains(event.target) &&
        !messageList.contains(event.target) &&
        !notificationList.contains(event.target)
    ) {
        messageList.classList.add("hidden");
        notificationList.classList.add("hidden");
        activeContentId = null;
    }
});
document.querySelectorAll('.message-item').forEach(function(item) {
    item.addEventListener('click', function() {
        document.getElementById('chat-box').style.display = 'flex';
    });
});

document.querySelector('.close-chat').addEventListener('click', function() {
    document.getElementById('chat-box').style.display = 'none';
});



function getCurrentTimeString() {
    var now = new Date();
    var day = now.getDate();
    var month = now.getMonth() + 1; // Lưu ý: getMonth() trả về giá trị từ 0 (tháng 1) đến 11 (tháng 12)
    var year = now.getFullYear();
    var hours = now.getHours();
    var minutes = now.getMinutes();

    // Thêm số 0 phía trước nếu ngày, tháng, giờ hoặc phút chỉ có một chữ số
    if (day < 10) {
        day = '0' + day;
    }
    if (month < 10) {
        month = '0' + month;
    }
    if (hours < 10) {
        hours = '0' + hours;
    }
    if (minutes < 10) {
        minutes = '0' + minutes;
    }

    return day + '/' + month + '/' + year + ' ' + hours + ':' + minutes;
}
function handleEnter(event) {
    if (event.keyCode === 13 || event.which === 13) {
        // Gửi tin nhắn khi ấn phím Enter
        // Bạn có thể thêm đoạn mã để xử lý gửi tin nhắn ở đây
        // Lấy nội dung tin nhắn từ input
        var message = document.querySelector('.chat-input').value;

        if (message.trim() !== '') {
            // Tạo một tin nhắn mới
            var newMessage = document.createElement('div');
            newMessage.classList.add('chat-message', 'my-message');

            var messageText = document.createElement('div');
            messageText.classList.add('message-text');
            messageText.textContent = message;
            newMessage.appendChild(messageText);

            var messageTime = document.createElement('div');
            messageTime.classList.add('message-time');
            messageTime.textContent = getCurrentTimeString(); // Sử dụng thời gian thực khi gửi tin nhắn
            // Sử dụng thời gian thực khi gửi tin nhắn
            newMessage.appendChild(messageTime);

            // Thêm tin nhắn mới vào chat-body
            document.getElementById('chat-body').appendChild(newMessage);

            // Xóa nội dung trong input
            document.querySelector('.chat-input').value = '';
        }
        event.preventDefault();
        console.log("Tin nhắn đã được gửi: " + event.target.value);
        event.target.value = "";
    }
}
document.addEventListener("DOMContentLoaded", function () {
    const messageItems = document.querySelectorAll(".message-item");
    const messageList = document.getElementById("message-list");
    const chatBoxTemplate = document.getElementById("chat-box");

    let openChatBoxes = 0;

    messageItems.forEach((item) => {
        item.addEventListener("click", function () {
            if (openChatBoxes >= 3) {
                alert("Bạn chỉ có thể mở tối đa 3 bảng chat cùng lúc.");
                return;
            }

            const username = this.dataset.username;
            const avatar = this.dataset.avatar;

            // Ẩn danh sách tin nhắn
            messageList.classList.add("hidden");

            // Tìm kiếm bảng chat đã mở hoặc tạo mới nếu chưa có
            let chatBox = document.getElementById(`chat-box-${username}`);
            if (!chatBox) {
                // Tạo một bản sao của khung chat và cập nhật thông tin
                chatBox = chatBoxTemplate.cloneNode(true);
                chatBox.id = `chat-box-${username}`;
                chatBox.querySelector(".sender-name").textContent = username;
                chatBox.querySelector(".avatar").src = avatar;

                // Thêm sự kiện 'click' cho nút đóng chat
                const closeChat = chatBox.querySelector(".close-chat");
                closeChat.addEventListener("click", function () {
                    messageList.classList.remove("hidden");
                    chatBox.remove(); // Xóa bảng chat khỏi trang
                    openChatBoxes--; // Giảm số lượng bảng chat hiện tại
                });

                // Thêm bảng chat mới vào trang và tăng số lượng bảng chat hiện tại
                document.body.appendChild(chatBox);
                openChatBoxes++;
            }

            // Hiển thị bảng chat tương ứng với người dùng
            chatBox.style.display = "block";
        });
    });

    // Thêm sự kiện 'click' cho nút đóng chat để hiện lại danh sách tin nhắn và ẩn khung chat
    const closeChat = chatBoxTemplate.querySelector(".close-chat");
    closeChat.addEventListener("click", function () {
        messageList.classList.remove("hidden");
        chatBoxTemplate.style.display = "none";
    });
});

