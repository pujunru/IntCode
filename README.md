# IntCode Project

This project consists of a React frontend and Python backend.

## Project Structure
- `frontend/`: React application
- `backend/`: Python server

## Setup Instructions

### Frontend Setup
```bash
cd frontend
npm install
npm start
```

### Backend Setup
```bash
# Install uv if you haven't already
curl -LsSf https://astral.sh/uv/install.sh | sh

# Setup the backend
cd backend
uv venv
source .venv/bin/activate  # On Windows use: .venv\Scripts\activate
uv pip install -r requirements.txt
python app.py
```

## Development
- Frontend runs on: http://localhost:3000
- Backend runs on: http://localhost:5000 