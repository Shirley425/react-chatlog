import './App.css';
import ChatLog from './components/ChatLog';
import messages from './data/messages.json';

const App = () => {
  return (
    <div id='App'>
      <header>
        <h1>Chat Between Vladimir and Estragon</h1>
        <h2>❤️s</h2>
      </header>
      <main>
        <div>
          <ChatLog entries={messages}/>
        </div>
      </main>
    </div>
  );
};

export default App;
