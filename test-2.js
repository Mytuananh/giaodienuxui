const input = document.querySelector('.input-container input');
const messages = document.querySelector('.chat-messages ul');

input.addEventListener('keyup', function(event) {
    if (event.keyCode === 13) {
        const message = this.value;
        this.value = '';
        const li = document.createElement('li');
        li.className = 'message right';
        li.innerHTML = `
      <div class="message-text">
        ${message}
      </div>
      <div class="message-time">
        ${new Date().toLocaleTimeString()}
      </div>
    `;
        messages.appendChild(li);
    }
});
