#!/bin/bash
echo "============================================"
echo "  ZholRules - Development Server"
echo "============================================"
echo ""

cd "$(dirname "$0")"

echo "Activating virtual environment..."
source venv/bin/activate

echo "Starting server on http://localhost:5000"
echo "Press Ctrl+C to stop"
echo ""

python server.py
