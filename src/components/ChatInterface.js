import React, { useState } from 'react';
import ChatDisplay from './ChatDisplay';
import UserInput from './UserInput';

function ChatInterface() {
    const [messages, setMessages] = useState([]);

    const handleSendMessage = (newMessage) => {
        setMessages([...messages, { id: messages.length + 1, text: newMessage }]);
    };

    return (
        <div className="container mx-auto p-4">
            <ChatDisplay messages={messages} />
            <UserInput onSendMessage={handleSendMessage} />
        </div>
    );
}

export default ChatInterface;