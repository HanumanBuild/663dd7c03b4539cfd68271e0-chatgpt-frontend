import React, { useState } from 'react';
import axios from '../api/axios';

function UserInput({ onSendMessage }) {
    const [input, setInput] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (input.trim()) {
            try {
                const response = await axios.post('/messages', { message: input });
                onSendMessage(response.data);
            } catch (error) {
                console.error('Error sending message:', error);
            }
            setInput('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="input-form mt-4">
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="input bg-gray-100 p-2 rounded w-full"
                placeholder="Type your message here..."
            />
            <button type="submit" className="submit-btn bg-blue-500 text-white p-2 rounded mt-2">
                Send
            </button>
        </form>
    );
}

export default UserInput;