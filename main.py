from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

# Initialize app
app = FastAPI()

# Allow frontend requests (Vite/React runs at localhost:5173)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # 🔒 More secure than "*"
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Pydantic model for POST input
class TaskRequest(BaseModel):
    prompt: str

# Dummy AI agent logic
def process_prompt(prompt):
    if "send" in prompt.lower():
        return {"intent": "SendTransaction", "action": "send ETH"}
    return {"intent": "Unknown", "action": "none"}

# Route for frontend to fetch a test message
@app.get("/message")
async def get_message():
    return {"message": "EigenAgent AI Core is running 🚀"}

# Route for AI task handling
@app.post("/api/task")
async def handle_task(req: TaskRequest):
    result = process_prompt(req.prompt)
    return {"status": "success", "data": result}

# Optional root route
@app.get("/")
def root():
    return {"message": "Welcome to the EigenAgent API"}