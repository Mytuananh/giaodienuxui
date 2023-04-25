// main.js

// Thay thế YOUR_API_KEY bằng API key của bạn
const apiKey = "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";

const chatForm = document.getElementById("chat-form");
const chatContent = document.getElementById("chat-content");
const userInput = document.getElementById("user-input");

chatForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const message = userInput.value;
    if (!message.trim()) return;

    addMessage(message, "user");
    userInput.value = "";
    const response = await getBotResponse(message);
    addMessage(response, "bot");
});

function addMessage(text, sender) {
    const messageElement = document.createElement("div");
    messageElement.classList.add("message");
    messageElement.classList.add(`${sender}-message`);

    const messageText = document.createElement("div");
    messageText.classList.add("message-text");
    messageText.innerText = text;
    messageElement.appendChild(messageText);

    chatContent.appendChild(messageElement);
    chatContent.scrollTop = chatContent.scrollHeight;
}

async function getBotResponse(message) {
    const response = await fetch("https://api.openai.com/v1/engines/davinci/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
            prompt: `User: ${message}\nChatbot: `,
            max_tokens: 50,
            n: 1,
            stop: ["User:"],
            temperature: 0.5,
        }),
    });

    const data = await response.json();
    return data.choices[0].text.trim();
}
