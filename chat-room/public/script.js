const socket = io();  // Connect to the socket server

// Send message to the server when the user presses the send button
document.getElementById('send-btn').addEventListener('click', () => {
    const message = document.getElementById('input').value;
    if (message) {
        socket.emit('chat message', message);  // Send message to server
        document.getElementById('input').value = '';  // Clear input field
    }
});

// Display incoming messages from the server
socket.on('chat message', (msg) => {
    const li = document.createElement('li');
    li.textContent = msg;
    document.getElementById('messages').appendChild(li);
});