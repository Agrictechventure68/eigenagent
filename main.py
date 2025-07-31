from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

# Initialize FastAPI app
app = FastAPI()

# Allow requests from local frontend and deployed version
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",                # Local frontend
        "https://eigenagent.vercel.app"         # Deployed frontend
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Request models
class TaskRequest(BaseModel):
    prompt: str

class PlanRequest(BaseModel):
    prompt: str

# Dummy AI agent task logic
def process_prompt(prompt):
    prompt = prompt.lower()
    if "send" in prompt:
        return {"intent": "SendTransaction", "action": "send ETH"}
    elif "balance" in prompt:
        return {"intent": "CheckBalance", "action": "check ETH balance"}
    elif "swap" in prompt:
        return {"intent": "TokenSwap", "action": "swap tokens"}
    else:
        return {"intent": "Unknown", "action": "none"}

# Route: Root
@app.get("/")
def root():
    return {"message": "Welcome to the EigenAgent API"}

# Route: Simple test
@app.get("/message")
async def get_message():
    return {"message": "EigenAgent AI Core is running 🚀"}

# Route: Handle AI prompt
@app.post("/api/task")
async def handle_task(req: TaskRequest):
    result = process_prompt(req.prompt)
    return {"status": "success", "data": result}

# Route: API status
@app.get("/api/status")
def status():
    return {
        "status": "online",
        "version": "1.0",
        "message": "EigenAgent API is operational 🔧"
    }

# ✅ Route: Plan creation (fixed version)
@app.post("/api/plan")
async def generate_plan(req: PlanRequest):
    prompt = req.prompt
    return {
        "status": "success",
        "plan": f"Generated strategy for prompt: '{prompt}'"
    }