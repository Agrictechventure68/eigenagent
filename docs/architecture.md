# System Architecture – EigenAgent

## 🧠 Overview

EigenAgent integrates:
- A FastAPI AI backend
- ERC-4337 smart contracts
- A wallet abstraction logic layer
- A user frontend (React or static)

## 🏗️ Components

- **AI Agent Core**: NLP and logic processing
- **Wallet Factory**: Deploys accounts with ERC-4337
- **Smart Contract**: Solidity-based smart wallet
- **Frontend**: Connects user → agent → contract

## 🔄 Flow

1. User interacts via frontend
2. Agent receives intent
3. Contract executes on user’s behalf
4. Result is displayed

## 🔗 Communication Channels

- REST API between frontend and backend
- Web3.py or Hardhat for contract interface
