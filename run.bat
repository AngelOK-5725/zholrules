@echo off
echo ============================================
echo   ZholRules - Development Server
echo ============================================
echo.

cd /d "%~dp0"

echo Activating virtual environment...
call venv\Scripts\activate.bat

echo Starting server on http://localhost:5000
echo Press Ctrl+C to stop
echo.

python server.py
pause
