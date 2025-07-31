from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
import os
import openai

app = FastAPI()

# Allow all CORS for dev; restrict for production
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Optional: Set your OpenAI API key in your environment or replace below
openai.api_key = os.getenv("OPENAI_API_KEY", "sk-...")  # Replace with yours

@app.get("/")
def root():
    return {"message": "EigenAgent AI Core is running 🚀"}

@app.post("/api/plan")
async def generate_plan(request: Request):
    data = await request.json()
    prompt = data.get("prompt", "")

    # If OpenAI API key is invalid, return fallback
    if not openai.api_key or openai.api_key.startswith("sk-...") is False:
        return {
            "status": "success",
            "plan": f"📌 Strategy for: '{prompt}'\n\n1. Deploy ERC-4337 smart contract\n2. Use an AI Agent with custom prompt injection\n3. Integrate transaction relayer with gasless wallet\n4. Monitor token balances with Chainlink\n5. Automate distribution logic with event triggers"
        }

    # If OpenAI key works, generate real response
    try:
        response = openai.ChatCompletion.create(
            model="gpt-4",
            messages=[
                { "role": "system", "content": "You are an expert in blockchain automation and smart contracts." },
                { "role": "user", "content": f"Generate a step-by-step strategy to: {prompt}" }
            ]
        )
        content = response["choices"][0]["message"]["content"]
        return { "status": "success", "plan": content }
    except Exception as e:
        return {
            "status": "error",
            "message": f"AI failed: {str(e)}",
        }