import { useState } from "react";
import "./App.css";

function App() {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResult("Generating...");

    const res = await fetch("https://eigenagent.onrender.com/api/plan", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt }),
    });

    const data = await res.json();
    setResult(data.plan || "Error generating plan.");
  };

  return (
    <div style={{ maxWidth: 600, margin: "auto", padding: 20 }}>
      <h1>EigenAgent AI Planner</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Enter your agent prompt..."
          style={{ width: "100%", padding: 8 }}
        />
        <button type="submit" style={{ marginTop: 10 }}>Generate Plan</button>
      </form>
      <div style={{ marginTop: 20 }}>
        <strong>Generated Plan:</strong>
        <pre>{result}</pre>
      </div>
    </div>
  );
}

export default App;
