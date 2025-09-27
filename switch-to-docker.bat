@echo off
REM Switch to Docker development environment

echo 🐳 Switching to Docker development environment...

REM Backup current .env
if exist .env (
    copy .env .env.local.backup > nul
    echo ✅ Backed up current .env to .env.local.backup
)

REM Copy Docker environment
copy .env.example .env > nul
echo ✅ Copied .env.example to .env

echo.
echo 🚀 Docker development setup complete!
echo 📋 What this does:
echo    • Uses PostgreSQL database in Docker
echo    • Redis caching and sessions
echo    • Nginx reverse proxy
echo    • Production-like environment
echo.
echo ▶️  Start Docker containers:
echo    docker-compose up -d
echo.
echo 💻 To switch back to local:
echo    switch-to-local.bat