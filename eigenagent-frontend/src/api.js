// Fetch welcome message from backend
export async function fetchBackendMessage() {
  try {
    const response = await fetch("https://eigenagent.onrender.com/"); // ✅ LIVE URL
    if (!response.ok) throw new Error("Network response was not ok");
    const data = await response.json();
    return data.message;
  } catch (error) {
    console.error("Error fetching message:", error);
    return "Failed to fetch message.";
  }
}

// Send user prompt to AI agent backend
export async function sendPromptToAgent(prompt) {
  try {
    const response = await fetch("https://eigenagent.onrender.com/api/task", { // ✅ LIVE URL
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ prompt })
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error contacting AI Agent:", error);
    return { status: "error", error: error.message };
  }
}
