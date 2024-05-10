import logo from './logo.svg';
import './App.css';
import ChatInterface from './components/ChatInterface';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1 className="text-3xl font-bold underline">
                    ChatGPT Clone
                </h1>
            </header>
            <ChatInterface />
        </div>
    );
}

export default App;