const chatBox = document.querySelector('.chat-box');
const minimizeBtn = document.querySelector('.minimize-btn');
const closeBtn = document.querySelector('.close-btn');

minimizeBtn.addEventListener('click', () => {
    chatBox.classList.add('hidden');
});

closeBtn.addEventListener('click', () => {
    chatBox.remove();
});