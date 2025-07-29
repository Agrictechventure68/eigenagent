from fastapi import FastAPI, Request
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

# Web3 tools (if needed later)
# from web3 import Web3

app = FastAPI()

# Allow frontend requests
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Or restrict to your frontend domain
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Define a model for input tasks
class TaskRequest(BaseModel):
    prompt: str

# Dummy AI agent function (replace with real logic)
def process_prompt(prompt):
    if "send" in prompt.lower():
        return {"intent": "SendTransaction", "action": "send ETH"}
    return {"intent": "Unknown", "action": "none"}

@app.post("/api/task")
async def handle_task(req: TaskRequest):
    result = process_prompt(req.prompt)
    return {"status": "success", "data": result}

@app.get("/")
def root():
    return {"message": "EigenAgent AI Core is running 🚀"}