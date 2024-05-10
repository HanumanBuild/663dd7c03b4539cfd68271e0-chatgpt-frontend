import React from 'react';

function ChatDisplay({ messages }) {
    return (
        <div className="chat-display bg-gray-200 p-4 rounded-lg">
            {messages.map(message => (
                <div key={message.id} className="message bg-white p-2 rounded my-2">
                    {message.text}
                </div>
            ))}
        </div>
    );
}

export default ChatDisplay;