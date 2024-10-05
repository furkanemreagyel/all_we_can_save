// Placeholder for AI chatbot integration
document.getElementById('sendBtn').addEventListener('click', function() {
    let userInput = document.getElementById('userInput').value;
    if (userInput) {
        let userMessage = `<div><strong>You:</strong> ${userInput}</div>`;
        document.getElementById('messages').innerHTML += userMessage;
        document.getElementById('userInput').value = '';

        // Simulated chatbot response (replace this with AI chatbot API call)
        setTimeout(function() {
            let botResponse = `<div><strong>AI Bot:</strong> I'm here to help! Here's some information about climate change.</div>`;
            document.getElementById('messages').innerHTML += botResponse;
        }, 1000);
    }
});
