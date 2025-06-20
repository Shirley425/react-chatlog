import { useState } from 'react';
import './App.css';
import ChatLog from './components/ChatLog';
import messages from './data/messages.json';

const App = () => {
  const [entries, setEntries] = useState(
    messages.map((entry) => ({...entry}))
  );

  const toggleLike = (id) => {
    const updatedEntries = entries.map((entry) =>
      entry.id === id ? { ...entry, liked: !entry.liked } : entry
    );
    setEntries(updatedEntries);
  };

  const totalLikes = entries.filter((entry) => entry.liked).length;

  return (
    <div id='App'>
      <header>
        <h1>Chat Between Vladimir and Estragon</h1>
        <section>{totalLikes} ❤️s</section>
      </header>
      <main>
        <div>
          <ChatLog
            entries={entries}
            onLikeToggle={toggleLike}
          />
        </div>
      </main>
    </div>
  );
};

export default App;