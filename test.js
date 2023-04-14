const socket = io(); // Kết nối đến server socket.io

let currentUserId; // Id người dùng đang mở chat
const messages = {}; // Lưu trữ tin nhắn của các người dùng
const images = {}; // Lưu trữ các ảnh được gửi đi
const files = {}; // Lưu trữ các file được gửi đi

// Hàm mở chat của một người dùng
function openChat(element) {
    const userId = element.dataset.userId;
    if (userId === currentUserId) {
        return;
    }
    currentUserId = userId;
    const chat = document.getElementById('chat');
    const userName = element.innerText.trim();
    const status = element.querySelector('.status').classList.contains('online') ? 'Trực tuyến' : 'Ngoại tuyến';
    document.getElementById('user-name').innerText = userName;
    document.getElementById('user-status').innerText = status;
    chat.style.display = 'flex';
    const messageInput = document.getElementById('message-input');
    messageInput.focus();
    messageInput.value = '';
    const messageContainer = document.getElementById('messages');
    messageContainer.innerHTML = '';
    const userMessages = messages[userId] || [];
    userMessages.forEach(message => addMessageToContainer(message, userId));
}

// Hàm thêm một tin nhắn vào container
function addMessageToContainer(message, userId) {
    const messageContainer = document.getElementById('messages');
    const msgElem = document.createElement('div');
    msgElem.classList.add('message');
    if (message.sender === userId) {
        msgElem.classList.add('my-message');
    } else {
        msgElem.classList.add('other-message');
    }
    const content = message.content;
    if (content.type === 'text') {
        msgElem.innerText = content.text;
    } else if (content.type === 'image') {
        const imageElem = document.createElement('img');
        imageElem.classList.add('image');
        imageElem.src = content.url;
        imageElem.alt = 'Ảnh';
        msgElem.appendChild(imageElem);
    } else if (content.type === 'file') {
        const fileElem = document.createElement('div');
        fileElem.classList.add('file-container');
        fileElem.dataset.fileId = content.fileId;
        fileElem.onclick = downloadFile;
        const fileIconElem = document.createElement('i');
        fileIconElem.classList.add('fas', 'fa-file');
        fileIconElem.classList.add(getFileIconClass(content.filename));
        const fileNameElem = document.createElement('span');
        fileNameElem.classList.add('file-name');
        fileNameElem.innerText = content.filename;
        fileElem.appendChild(fileIconElem);
        fileElem.appendChild(fileNameElem);
        msgElem.appendChild(fileElem);
    }
    const timestampElem = document.createElement('span');
    timestampElem.classList.add('timestamp');
    timestampElem.innerText = formatTimestamp(message.timestamp);
    msgElem.appendChild(timestampElem);
    messageContainer.appendChild(msgElem);
    messageContainer.scrollTop = messageContainer.scrollHeight;
}

// Hàm tạo một tin nhắn mới
function createMessage(content, sender) {
    return {
        content,
        sender,
        timestamp: Date.now()
    };
}

// Hàm gửi tin nhắn đến server socket.io
function sendMessage(message) {
    if (currentUserId) {
        socket.emit('message', {
            recipient: currentUserId,
            message
        });
        addMessageToContainer(message, 'me');
    }
}

// Hàm xử lý sự kiện ấn phím Enter trong ô nhập tin nhắn
function handleEnter(event) {
    if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault();
        const input = document.getElementById('message-input');
        const messageText = input.value.trim();
        if (messageText || images[currentUserId] || files[currentUserId]) {
            const content = {
                type: 'text',
                text: messageText
            };
            if (images[currentUserId]) {
                const image = images[currentUserId];
                content.type = 'image';
                content.url = image.url;
                images[currentUserId] = null;
                const imageInput = document.getElementById('image-input');
                imageInput.value = '';
            }
            if (files[currentUserId]) {
                const file = files[currentUserId];
                content.type = 'file';
                content.fileId = file.fileId;
                content.filename = file.filename;
                files[currentUserId] = null;
            }
            const message = createMessage(content, 'me');
            sendMessage(message);
            input.value = '';
            input.style.height = 'auto';
        }
    }
}

// Hàm format thời gian dưới dạng chuỗi
function formatTimestamp(timestamp) {
    const date = new Date(timestamp);
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
}

// Hàm tải file từ server
function downloadFile(event) {
    const fileId = event.currentTarget.dataset.fileId;
    const link = document.createElement('a');
    link.href = `/download/${fileId}`;
    link.download = true;
    link.click();
}

// Hàm lấy tên class icon cho file dựa trên đuôi file
function getFileIconClass(filename) {
    const ext = filename.split('.').pop().toLowerCase();
    if (['pdf', 'doc', 'docx'].includes(ext)) {
        return 'fa-file-word';
    } else if (['xls', 'xlsx'].includes(ext)) {
        return 'fa-file-excel';
    } else if (['ppt', 'pptx'].includes(ext)) {
        return 'fa-file-powerpoint';
    } else if (['zip', 'rar', '7z'].includes(ext)) {
        return 'fa-file-archive';
    } else if (['mp3', 'wav', 'ogg', 'flac'].includes(ext)) {
        return 'fa-file-audio';
    } else if (['mp4', 'avi', 'mov', 'wmv'].includes(ext)) {
        return 'fa-file-video';
    } else if (['jpg', 'jpeg', 'png', 'gif'].includes(ext)) {
        return 'fa-file-image';
    } else {
        return 'fa-file';
    }
}

// Kết nối đến server socket.io
socket.on('connect', () => {
    console.log('Connected to server');
});

// Nhận tin nhắn từ server và hiển thị trên giao diện
socket.on('message', data => {
    const sender = data.sender;
    const message = data.message;
    const userMessages = messages[sender] || [];
    userMessages.push(message);
    messages[sender] = userMessages;
    if (sender === currentUserId) {
        addMessageToContainer(message, sender);
    }
});

// Xử lý sự kiện khi có file được chọn để upload
const fileInput = document.getElementById('file-input');
fileInput.addEventListener('change', event => {
    const files = event.target.files;
    if (files.length > 0) {
        const file = files[0];
        const fileId = Math.random().toString(36).substr(2, 9);
        const filename = file.name;
        const formData = new FormData();
        formData.append('file', file);
        fetch('/upload', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                const {success, message} = data;
                if (success) {
                    files[currentUserId] = {
                        fileId,
                        filename
                    };
                    const input = document.getElementById('message-input');
                    input.focus();
                } else {
                    alert(message);
                }
            })
            .catch(error => console.log(error));
    }
});

// Xử lý sự kiện khi có ảnh được chọn để upload
const imageInput = document.getElementById('image-input');
imageInput.addEventListener('change', event => {
    const files = event.target.files;
    if (files.length > 0) {
        const file = files[0];
        const formData = new FormData();
        formData.append('file', file);
        fetch('/upload-image', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                const {success, message, url} = data;
                if (success) {
                    images[currentUserId] = {url};
                    const input = document.getElementById('message-input');
                    input.focus();
                } else {
                    alert(message);
                }
            })
            .catch(error => console.log(error));
    }
});

// Xử lý sự kiện khi người dùng đóng chat
const closeButton = document.getElementById('close-button');
closeButton.addEventListener('click', event => {
    currentUserId = null;
    const chat = document.getElementById('chat');
    chat.style.display = 'none';
});

// Xử lý sự kiện khi có người dùng mới kết nối đến server
socket.on('new-user', data => {
    const userElem = createUserElement(data);
    const userContainer = document.getElementById('users');
    userContainer.appendChild(userElem);
});

// Xử lý sự kiện khi người dùng có trạng thái thay đổi
socket.on('user-status-changed', data => {
    const userId = data.userId;
    const status = data.status;
    const userElem = document.querySelector(`[data-user-id="${userId}"]`);
    const statusElem = userElem.querySelector('.status');
    if (status) {
        statusElem.classList.remove('offline');
        statusElem.classList.add('online');
    } else {
        statusElem.classList.remove('online');
        statusElem.classList.add('offline');
    }
});

// Xử lý sự kiện khi người dùng kết nối bị ngắt
socket.on('disconnect', () => {
    console.log('Disconnected from server');
});

// Xử lý sự kiện khi có lỗi kết nối đến server
socket.on('connect_error', error => {
    console.log(`Connection error: ${error}`);
});

// Xử lý sự kiện khi có lỗi server trả về
socket.on('error', error => {
    console.log(`Server error: ${error}`);
});

// Xử lý sự kiện khi đăng nhập thành công
const loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit', event => {
    event.preventDefault();
    const nameInput = document.getElementById('name-input');
    const name = nameInput.value.trim();
    if (name) {
        fetch('/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({name})
        })
            .then(response => response.json())
            .then(data => {
                const {success, message, userId} = data;
                if (success) {
                    const loginContainer = document.getElementById('login-container');
                    loginContainer.style.display = 'none';
                    const userContainer = document.getElementById('user-container');
                    userContainer.style.display = 'flex';
                    currentUserId = userId;
                    const messageContainer = document.getElementById('messages');
                    messageContainer.innerHTML = '';
                    const userListContainer = document.getElementById('users');
                    userListContainer.innerHTML = '';
                    const userList = data.userList || [];
                    userList.forEach(user => {
                        const userElem = createUserElement(user);
                        userListContainer.appendChild(userElem);
                    });
                    socket.emit('login', {userId});
                } else {
                    alert(message);
                }
            })
            .catch(error => console.log(error));
    }
});

// Xử lý sự kiện khi người dùng click vào một người dùng trong danh sách
document.addEventListener('click', event => {
    const userElem = event.target.closest('.user');
    if (userElem) {
        const userId = userElem.dataset.userId;
        const userName = userElem.querySelector('.name').innerText;
        const chatTitle = document.getElementById('chat-title');
        chatTitle.innerText = userName;
        const chat = document.getElementById('chat');
        chat.style.display = 'block';
        const messageContainer = document.getElementById('messages');
        messageContainer.innerHTML = '';
        const userMessages = messages[userId] || [];
        userMessages.forEach(message => addMessageToContainer(message, userId));
        currentUserId = userId;
        const input = document.getElementById('message-input');
        input.focus();
    }
});

// Hàm tạo phần tử HTML cho một người dùng
function createUserElement(user) {
    const userElem = document.createElement('div');
    userElem.classList.add('user');
    userElem.dataset.userId = user.userId;
    const avatarElem = document.createElement('div');
    avatarElem.classList.add('avatar');
    const nameElem = document.createElement('div');
    nameElem.classList.add('name');
    nameElem.innerText = user.name;
    const statusElem = document.createElement('div');
    statusElem.classList.add('status');
    if (user.status) {
        statusElem.classList.add('online');
    } else {
        statusElem.classList.add('offline');
    }
    userElem.appendChild(avatarElem);
    userElem.appendChild(nameElem);
    userElem.appendChild(statusElem);
    return userElem;
}

// Hàm khởi tạo giao diện
function init() {
    const input = document.getElementById('message-input');
    input.addEventListener('input', resizeInput);
    input.addEventListener('keydown', handleEnter);
    const closeButton = document.getElementById('close-button');
    closeButton.addEventListener('click', event => {
        currentUserId = null;
        const chat = document.getElementById('chat');
        chat.style.display = 'none';
    });
    const sendImageButton = document.getElementById('send-image-button');
    sendImageButton.addEventListener('click', event => {
        const imageInput = document.getElementById('image-input');
        imageInput.click();
    });
    const sendFileButton = document.getElementById('send-file-button');
    sendFileButton.addEventListener('click', event => {
        const fileInput = document.getElementById('file-input');
        fileInput.click();
    });
}

init();



