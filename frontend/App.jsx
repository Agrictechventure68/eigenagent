import { useState } from 'react';
import './App.css';

function App() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('http://127.0.0.1:8000/api/task', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt }),
    });

    const data = await res.json();
    setResponse(data.data);
  };

  return (
    <div className="App">
      <h1>EigenAgent 🧠</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ask your agent..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>

      {response && (
        <div>
          <p><strong>Intent:</strong> {response.intent}</p>
          <p><strong>Action:</strong> {response.action}</p>
        </div>
      )}
    </div>
  );
}

export default App;
