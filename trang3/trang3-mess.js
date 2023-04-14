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
