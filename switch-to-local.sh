#!/bin/bash
# Switch to local development environment

echo "🔄 Switching to local development environment..."

# Backup current .env
if [ -f .env ]; then
    cp .env .env.docker.backup
    echo "✅ Backed up current .env to .env.docker.backup"
fi

# Copy local development environment
cp .env.local .env
echo "✅ Copied .env.local to .env"

echo ""
echo "🚀 Local development setup complete!"
echo "📋 What this does:"
echo "   • Uses SQLite database (no Docker required)"
echo "   • Email output to console"
echo "   • Local development optimizations"
echo ""
echo "▶️  Start development server:"
echo "   python manage.py runserver"
echo ""
echo "🐳 To switch back to Docker:"
echo "   ./switch-to-docker.sh"