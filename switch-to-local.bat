@echo off
REM Switch to local development environment

echo 🔄 Switching to local development environment...

REM Backup current .env
if exist .env (
    copy .env .env.docker.backup > nul
    echo ✅ Backed up current .env to .env.docker.backup
)

REM Copy local development environment
copy .env.local .env > nul
echo ✅ Copied .env.local to .env

echo.
echo 🚀 Local development setup complete!
echo 📋 What this does:
echo    • Uses SQLite database (no Docker required)
echo    • Email output to console
echo    • Local development optimizations
echo.
echo ▶️  Start development server:
echo    python manage.py runserver
echo.
echo 🐳 To switch back to Docker:
echo    switch-to-docker.bat