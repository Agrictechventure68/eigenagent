iimport { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { fetchBackendMessage, sendPromptToAgent } from './services/api'  // ✅ import both API functions

function App() {
  const [count, setCount] = useState(0)
  const [message, setMessage] = useState("No message yet")
  const [prompt, setPrompt] = useState("")                  // ✅ user input state
  const [agentResponse, setAgentResponse] = useState(null)  // ✅ response from AI agent

  // ✅ handle GET request to /
  const handleFetchMessage = async () => {
    const result = await fetchBackendMessage()
    setMessage(result)
  }

  // ✅ handle POST request to /api/task
  const handleSendPrompt = async () => {
    if (!prompt.trim()) {
      setAgentResponse({ status: "error", error: "Prompt is empty." });
      return;
    }
    const result = await sendPromptToAgent(prompt)
    setAgentResponse(result)
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Vite + React + FastAPI</h1>

      <div className="card">
        <button onClick={() => setCount(count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

      {/* ✅ Backend welcome message */}
      <div className="card">
        <button onClick={handleFetchMessage}>
          Fetch Backend Message
        </button>
        <p><strong>Backend says:</strong> {message}</p>
      </div>

      {/* ✅ AI Agent input */}
      <div className="card">
        <input
          type="text"
          placeholder="Enter prompt (e.g., 'send 0.5 ETH')"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          style={{ padding: '6px', width: '80%' }}
        />
        <button onClick={handleSendPrompt} style={{ marginTop: '10px' }}>
          Send to AI Agent
        </button>
        {agentResponse && (
          <div style={{ marginTop: '10px', textAlign: 'left' }}>
            <strong>Agent Response:</strong>
            <pre>{JSON.stringify(agentResponse, null, 2)}</pre>
          </div>
        )}
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App