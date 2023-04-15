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
    // Thêm đoạn mã sau để chắc chắn rằng phần tử HTML đã được tải đầy đủ trước khi thực hiện đếm
    setTimeout(() => {
        var messageUnreadCount = document.querySelectorAll("#message-list .message-item.unread").length;
        var notificationUnreadCount = document.querySelectorAll("#notification-list .notification-item.unread").length;

        updateBadge("mess", messageUnreadCount);
        updateBadge("notification", notificationUnreadCount);
    }, 100);
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
        notificationBadge.style.display = "block"; // Thêm dòng này để hiển thị hình tròn đỏ khi có tin nhắn chưa đọc
    } else if (notificationBadge) {
        notificationBadge.style.display = "none"; // Thêm dòng này để ẩn hình tròn đỏ khi không còn tin nhắn chưa đọc
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
function sendMessage(chatBox) {
    var messageInput = chatBox.querySelector(".chat-input");
    var message = messageInput.value;

    if (message.trim() !== "") {
        // Tạo một tin nhắn mới
        var newMessage = document.createElement("div");
        newMessage.classList.add("chat-message", "my-message");

        var messageText = document.createElement("div");
        messageText.classList.add("message-text");
        messageText.textContent = message;
        newMessage.appendChild(messageText);

        var messageTime = document.createElement("div");
        messageTime.classList.add("message-time");
        messageTime.textContent = getCurrentTimeString(); // Sử dụng thời gian thực khi gửi tin nhắn
        newMessage.appendChild(messageTime);

        // Thêm tin nhắn mới vào chat-body
        var chatBody = chatBox.querySelector("#chat-body");
        chatBody.appendChild(newMessage);

        // Xóa nội dung trong input
        messageInput.value = "";
    }

}
function handleEnter(event) {
    if (event.keyCode === 13 || event.which === 13) {
        event.preventDefault();
        sendMessage(chatBox);
    }
    event.preventDefault();
}
// Hàm cập nhật trạng thái của tin nhắn khi ấn vào
function markAsRead(messageItem) {
    messageItem.classList.remove("unread");
    // Chờ một chút để cập nhật trạng thái của tin nhắn trước khi cập nhật số lượng tin nhắn chưa đọc
    setTimeout(() => {
        updateUnreadCounts();
    }, 100);
    event.preventDefault();
}
document.addEventListener("DOMContentLoaded", function () {
    let openChatBoxes = [];
    const chatBoxTemplate = document.getElementById("chat-box");
    const chatBoxSpacing = 31;
    const messageList = document.getElementById("message-list");
    const messageItems = messageList.querySelectorAll(".message-item");

    chatBoxTemplate.style.display = "none";

    function updateChatBoxPositions() {
        openChatBoxes.forEach((box, index) => {
            const chatBox = document.getElementById(`chat-box-${box}`);
            chatBox.style.right = `${(index + 1) * chatBoxSpacing}vh`;
        });
    }

    messageItems.forEach((item) => {
        if (item.classList.contains("message-item")) {
            item.addEventListener("click", function () {

                // Cập nhật trạng thái tin nhắn khi ấn vào
                markAsRead(this);

                if (openChatBoxes.length >= 3) {
                    alert("Bạn chỉ có thể mở tối đa 3 bảng chat cùng lúc.");
                    return;
                }

                const username = this.dataset.username;
                const avatar = this.dataset.avatar;
                messageList.classList.add("hidden");

                let chatBox = document.getElementById(`chat-box-${username}`);
                if (!chatBox) {
                    chatBox = chatBoxTemplate.cloneNode(true);
                    chatBox.id = `chat-box-${username}`;
                    chatBox.querySelector(".sender-name").textContent = username;
                    chatBox.querySelector(".avatar").src = avatar;
                    const closeChat = chatBox.querySelector(".close-chat");
                    closeChat.addEventListener("click", function () {
                        chatBox.style.display = "none";
                        openChatBoxes = openChatBoxes.filter(box => box !== username);
                        updateChatBoxPositions();
                    });
                    document.body.appendChild(chatBox);
                }

                if (!openChatBoxes.includes(username)) {
                    openChatBoxes.push(username);
                }
                chatBox.style.display = "flex";
                chatBox.querySelector(".chat-input").addEventListener("keydown", function (event) {
                    if (event.keyCode === 13 || event.which === 13) {
                        event.preventDefault();
                        sendMessage(chatBox);
                    }
                });
                updateChatBoxPositions();
            });
        }
    });

});

