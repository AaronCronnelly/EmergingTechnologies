// eliza.js

document.addEventListener('DOMContentLoaded', function() {
    const submitButton = document.getElementById('submitButton');
    const clearButton = document.getElementById('clearButton');
    const newChatButton = document.getElementById('newChatButton');
    const userInput = document.getElementById('userInput');
    const messageBox = document.getElementById('messageBox');

    const keywords = {
        "hello": [0, [
            ["hello", [
                "Hello! How are you feeling today?",
                "Hi there! How can I assist you today?",
                "Hello! What’s on your mind?",
                "Hey! It’s great to see you. How can I help?",
                "Hello! How are things going for you?",
                "Hi! How’s your day so far?"
            ]],
            ["hi", [
                "Hi! How are you today?",
                "Hello! What would you like to discuss today?",
                "Hi! How’s it going?",
                "Hello! Is there something you’d like to talk about?"
            ]],
            ["hey", [
                "Hey! What’s going on?",
                "Hey! How are you doing today?",
                "Hey! What can I do for you?",
                "Hey! What’s on your mind today?"
            ]]
        ]],
        "goodbye": [1, [
            ["goodbye", [
                "Goodbye! Take care of yourself.",
                "Bye! I hope we can talk again soon.",
                "Goodbye! Have a wonderful day.",
                "Take care! I'll be here if you want to talk again.",
                "Goodbye! Don’t hesitate to reach out when you need to."
            ]],
            ["bye", [
                "Goodbye! I’ll be here if you need me.",
                "Bye! Until next time.",
                "Bye! It was nice chatting with you.",
                "Goodbye! Stay safe and well."
            ]],
            ["see you", [
                "See you soon! Take care.",
                "Until next time! Stay well.",
                "Looking forward to talking again soon!",
                "See you! Reach out anytime."
            ]]
        ]],
        "feel": [2, [
            ["I feel *", [
                "Why do you feel {0}?",
                "Can you tell me more about feeling {0}?",
                "Do you often feel {0}?",
                "What triggers this feeling of {0}?",
                "How long have you been feeling {0}?",
                "Is there something that helps when you feel {0}?"
            ]],
            ["I am feeling *", [
                "What makes you feel {0}?",
                "Why do you think you are feeling {0}?",
                "How do you cope when you feel {0}?",
                "Can you remember a time you didn’t feel {0}?",
                "What can you do to feel less {0}?"
            ]],
            ["I am *", [
                "Why do you say that you are {0}?",
                "How long have you been {0}?",
                "What makes you feel {0}?",
                "How does being {0} affect your life?",
                "Do you think being {0} changes the way others see you?"
            ]]
        ]],
        "emotion": [3, [
            ["sad", [
                "I’m sorry you’re feeling sad. Do you know why?",
                "What’s making you feel this way?",
                "When did you start feeling sad?",
                "It’s okay to feel sad sometimes. Do you want to talk more about it?",
                "Is there anything that usually helps when you feel sad?"
            ]],
            ["happy", [
                "That’s wonderful! What’s making you feel happy?",
                "I’m glad to hear that! What’s been going well?",
                "What’s bringing you happiness?",
                "What are some other things that make you feel happy?"
            ]],
            ["angry", [
                "What’s making you feel angry?",
                "What triggers this anger?",
                "How do you usually handle anger?",
                "Do you find it hard to manage your anger?",
                "Is there a particular event that made you angry?"
            ]],
            ["anxious", [
                "What’s making you feel anxious?",
                "Do you often feel anxious?",
                "When did you start feeling anxious?",
                "How do you usually cope with anxiety?",
                "Is there anything that helps you feel less anxious?"
            ]],
            ["excited", [
                "What’s got you feeling excited?",
                "That’s great! What’s happening that’s exciting?",
                "Can you tell me more about what’s making you excited?",
                "How often do you feel this way?",
                "Excitement is contagious! What’s on your mind?"
            ]],
            ["frustrated", [
                "What’s causing your frustration?",
                "How do you usually deal with frustration?",
                "Is there something in particular that’s frustrating you?",
                "Do you often feel frustrated in this way?",
                "What do you think could help ease your frustration?"
            ]]
        ]],
        "need": [4, [
            ["I need *", [
                "Why do you need {0}?",
                "Would it help if you had {0}?",
                "What would having {0} mean for you?",
                "How important is {0} to you?",
                "What’s stopping you from getting {0}?"
            ]],
            ["I want *", [
                "Why do you want {0}?",
                "How would getting {0} change things for you?",
                "What would happen if you got {0}?",
                "Is there something else you could do instead?",
                "How badly do you want {0}?"
            ]]
        ]],
        "apology": [5, [
            ["sorry", [
                "There’s no need to apologize.",
                "Why do you feel the need to apologize?",
                "What makes you feel sorry?",
                "It’s okay. Apologies aren’t necessary.",
                "Why do you think you’ve done something wrong?"
            ]],
            ["apologize", [
                "Why do you feel like you need to apologize?",
                "What are you apologizing for?",
                "It’s alright. We all make mistakes.",
                "Don’t worry about it. No apology needed."
            ]]
        ]],
        "family": [6, [
            ["family", [
                "How is your relationship with your family?",
                "Tell me more about your family.",
                "Does your family support you?",
                "What role does your family play in your life?",
                "Are you close to your family?"
            ]],
            ["mother", [
                "Tell me about your mother.",
                "What’s your relationship like with your mother?",
                "How do you feel when you think about your mother?",
                "Do you and your mother get along?",
                "What is something you’ve learned from your mother?"
            ]],
            ["father", [
                "What is your father like?",
                "How do you feel about your father?",
                "Tell me more about your relationship with your father.",
                "Do you and your father communicate well?",
                "What’s one thing you admire about your father?"
            ]],
            ["brother", [
                "Do you get along with your brother?",
                "Tell me about your brother.",
                "How close are you to your brother?",
                "What’s something you appreciate about your brother?",
                "Do you see your brother often?"
            ]],
            ["sister", [
                "How do you feel about your sister?",
                "What’s your sister like?",
                "Do you and your sister get along?",
                "Tell me more about your sister.",
                "What’s one thing you admire about your sister?"
            ]],
            ["friend", [
                "Tell me more about your friends.",
                "Do your friends support you?",
                "How important are your friends to you?",
                "How often do you see your friends?",
                "What role do your friends play in your life?"
            ]]
        ]],
        "can_do_will": [7, [
            ["can you *", [
                "What makes you think I can {0}?",
                "Why do you ask if I can {0}?",
                "Would it make a difference if I could {0}?",
                "What if I could {0}?"
            ]],
            ["will you *", [
                "Why do you want me to {0}?",
                "What if I won’t {0}?",
                "Do you think I will {0}?",
                "Why is it important that I {0}?"
            ]],
            ["do you *", [
                "What makes you ask that?",
                "Why do you think I would {0}?",
                "Does it matter to you if I {0}?",
                "How would you feel if I said yes?"
            ]]
        ]],
        "dream": [8, [
            ["dream", [
                "What do you think this dream means?",
                "Do you often dream about {0}?",
                "How did this dream make you feel?",
                "Do you think your dream is connected to real life?",
                "What was the most vivid part of the dream?"
            ]],
            ["nightmare", [
                "What was your nightmare about?",
                "How did you feel after the nightmare?",
                "Do you often have nightmares?",
                "What’s the scariest part of your nightmare?",
                "How do you cope with bad dreams?"
            ]]
        ]],
        "negative_response": [9, [
            ["no", [
                "Why not?",
                "Are you sure?",
                "Why do you feel that way?",
                "What makes you say no?",
                "Is there something holding you back?"
            ]],
            ["never", [
                "Why do you say never?",
                "Are you absolutely sure?",
                "Have you ever felt differently?",
                "Why do you think this is impossible?",
                "Is there something preventing you from considering it?"
            ]]
        ]],
        "affirmation": [10, [
            ["yes", [
                "You seem certain. Why?",
                "What makes you feel so sure?",
                "Can you elaborate on that?",
                "Is there anything else that makes you say yes?",
                "How long have you felt this way?"
            ]],
            ["always", [
                "Why do you think this is always the case?",
                "Can you think of any exceptions?",
                "Has it always been this way?",
                "Is there something that keeps this pattern going?",
                "What would it take to change it?"
            ]]
        ]],
        "health": [11, [
            ["sick", [
                "I’m sorry you’re feeling sick. What’s going on?",
                "How long have you felt unwell?",
                "What do you think caused you to feel sick?",
                "Is there anything that helps you feel better?",
                "Have you talked to a doctor about this?"
            ]],
            ["tired", [
                "What’s making you feel tired?",
                "Do you often feel exhausted?",
                "How long have you been feeling this way?",
                "Do you know what’s causing your fatigue?",
                "What do you do when you feel this tired?"
            ]],
            ["stress", [
                "What’s causing your stress?",
                "How do you usually deal with stress?",
                "Is there something specific stressing you out?",
                "How long have you been feeling this way?",
                "Do you have ways to reduce your stress?"
            ]]
        ]],
        "misc": [12, [
            ["because", [
                "Is that the real reason?",
                "Can you think of another reason?",
                "Does that explain anything else?",
                "Is there more to it than that?",
                "Do you feel there’s a deeper cause?"
            ]],
            ["maybe", [
                "Why are you unsure?",
                "What’s keeping you from being certain?",
                "Can you think of something more definite?",
                "Why do you feel undecided?",
                "Is there something holding you back?"
            ]],
            ["I don't know", [
                "Why don’t you know?",
                "What might help you figure it out?",
                "Is there something stopping you from knowing?",
                "What do you feel uncertain about?",
                "How do you usually approach things you’re unsure about?"
            ]],
            ["I can't *", [
                "What makes you think you can’t {0}?",
                "Have you tried to {0}?",
                "Why do you believe you can’t {0}?",
                "What would happen if you could {0}?",
                "Is there something preventing you from {0}?"
            ]]
        ]]
    };

    submitButton.addEventListener('click', function() {
        const userMessage = userInput.value.trim();
        if (userMessage) {
            addMessage('You', userMessage, 'user-message');
            userInput.value = '';
            // Simulate chatbot reply
            setTimeout(function() {
                const botReply = generateElizaReply(userMessage);
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

    function generateElizaReply(userMessage) {
        const lowerCaseMessage = userMessage.toLowerCase();
        for (const key in keywords) {
            const [priority, patterns] = keywords[key];
            for (const [pattern, responses] of patterns) {
                const regex = new RegExp(pattern.replace("*", "(.*)"), "i");
                const match = lowerCaseMessage.match(regex);
                if (match) {
                    const response = responses[Math.floor(Math.random() * responses.length)];
                    if (response.includes("{0}")) {
                        return response.replace("{0}", match[1].trim());
                    } else {
                        return response;
                    }
                }
            }
        }
        return "Tell me more about that.";
    }
});