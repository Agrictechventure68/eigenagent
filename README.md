# EigenAgent 🧠🔗

**EigenAgent** is a decentralized crypto-AI sidekick built for the Ethereum ecosystem, integrating artificial intelligence, smart contracts (ERC-4337), and web interfaces for crypto-native interactions.

Developed as a hackathon submission for the Ethereum group, EigenAgent showcases the future of AI-augmented onchain automation and account abstraction.

---

## 🌟 Project Highlights

- 🤖 **AI-Powered Decision Engine** (FastAPI + Python)
- 📝 **ERC-4337 Smart Contract Integration** (Account Abstraction)
- 🔐 **User Operation & Wallet Abstraction**
- 🌐 **Frontend Interface** (React / Static HTML)
- 📦 **Modular, Scalable Architecture** for Web3 apps

---

## 🔧 Tech Stack

| Layer      | Tooling                          |
|------------|----------------------------------|
| Backend    | FastAPI (Python), Uvicorn        |
| Smart Contract | Solidity, ERC-4337, Hardhat   |
| Frontend   | React or HTML/CSS/JS             |
| Hosting    | Render (API) / GitHub Pages      |
| Scripts    | Python (web3.py), Node.js (if used) |

---

## 🗂️ Project Structure

eigenagent/
├── app/ # FastAPI application logic
├── contracts/ # Smart contracts (Solidity)
├── docs/ # Architecture, diagrams, pitch
├── frontend/ # React or static frontend files
├── scripts/ # Deployment, interaction, automation scripts
├── main.py # FastAPI entry point
├── requirements.txt # Python dependencies
├── .gitignore
└── README.md # This file
---

## 🚀 Getting Started

### 🔧 Backend Setup

```bash
# 1. Install dependencies
pip install -r requirements.txt

# 2. Start the FastAPI server
uvicorn main:app --reload

# 3. Visit the API at:
http://127.0.0.1:8000/
📡 Sample Endpoint
Method	Endpoint	Description
GET	/	Returns "EigenAgent AI Core is running 🚀"

📜 Smart Contract (ERC-4337)
Implements account abstraction via ERC-4337

Handles user operations and gasless transactions

Deployed on: [Goerli / Sepolia / Local Hardhat]

✅ Contract Address (Testnet): 0xYourContractHere
✅ Contract Type: AccountFactory, UserAccount, etc.

🧠 AI Agent Overview
Prompt-based command execution

Dynamic interaction with smart wallet (under development)

Designed to operate securely and autonomously onchain

📸 Screenshots / Demo
(Include a screenshot or gif of the frontend or terminal responses here)

🧪 Future Integrations
AI Agent + MetaMask Snap

WalletConnect + MPC wallet support

DeFi interaction via Aave/Uniswap

zkSync / Scroll L2 compatibility

⚖️ License
This project is licensed under the MIT License.

💡 Inspiration
EigenAgent was built to demonstrate how AI agents can intelligently manage Web3 wallets and autonomously interact with smart contracts via account abstraction — making crypto usable even for non-technical users.

👥 Author & Team
Developed by Bright Doro
ETH Hackathon Group: Ethereum Agent Pioneers

🔗 GitHub Repo
📁 View the Codebase