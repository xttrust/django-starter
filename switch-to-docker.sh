#!/bin/bash
# Switch to Docker development environment

echo "🐳 Switching to Docker development environment..."

# Backup current .env
if [ -f .env ]; then
    cp .env .env.local.backup
    echo "✅ Backed up current .env to .env.local.backup"
fi

# Copy Docker environment
cp .env.example .env
echo "✅ Copied .env.example to .env"

echo ""
echo "🚀 Docker development setup complete!"
echo "📋 What this does:"
echo "   • Uses PostgreSQL database in Docker"
echo "   • Redis caching and sessions"
echo "   • Nginx reverse proxy"
echo "   • Production-like environment"
echo ""
echo "▶️  Start Docker containers:"
echo "   docker-compose up -d"
echo ""
echo "💻 To switch back to local:"
echo "   ./switch-to-local.sh"