document.addEventListener('DOMContentLoaded', function() {
    const submitButton = document.getElementById('submitButton');
    const clearButton = document.getElementById('clearButton');
    const newChatButton = document.getElementById('newChatButton');
    const userInput = document.getElementById('userInput');
    const messageBox = document.getElementById('messageBox');

    submitButton.addEventListener('click', function() {
        const userMessage = userInput.value.trim();
        if (userMessage) {
            addMessage('You', userMessage, 'user-message');
            userInput.value = '';
            // Simulate chatbot reply
            setTimeout(function() {
                const botReply = generateBotReply(userMessage);
                addMessage('Bot', botReply, 'bot-reply');
            }, 1000);
        }
    });

    clearButton.addEventListener('click', function() {
        userInput.value = '';
    });

    newChatButton.addEventListener('click', function() {
        messageBox.innerHTML = '';
        userInput.value = '';
    });

    function addMessage(sender, message, className) {
        const messageElement = document.createElement('div');
        messageElement.className = className;
        messageElement.textContent = `${sender}: ${message}`;
        messageBox.appendChild(messageElement);
        messageBox.scrollTop = messageBox.scrollHeight; // Scroll to the bottom
    }

    function generateBotReply(userMessage) {
        // Simple bot reply logic (can be replaced with more complex logic)
        return `You said: "${userMessage}"`;
    }
});