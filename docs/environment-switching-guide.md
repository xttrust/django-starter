# 🔄 Environment Switching Guide

Easily switch between local development and Docker environments with our convenient switching scripts.

## Quick Start

### 🖱️ **Double-Click Method (Recommended)**

Simply double-click the batch files in Windows Explorer:

- **`switch-to-local.bat`** - For local development with SQLite
- **`switch-to-docker.bat`** - For Docker development with PostgreSQL

### 💻 **Terminal Method**

From VS Code terminal or Command Prompt:

```bash
# Navigate to project directory
cd "path\to\django-starter"

# Switch to local development
.\switch-to-local.bat

# Switch to Docker development  
.\switch-to-docker.bat
```

## Environment Comparison

| Feature | Local Development | Docker Development |
|---------|-------------------|-------------------|
| **Database** | SQLite (file-based) | PostgreSQL (container) |
| **Caching** | None | Redis (container) |
| **Web Server** | Django dev server | Gunicorn + Nginx |
| **Setup Time** | ~10 seconds | ~2 minutes |
| **Resource Usage** | Low | Medium |
| **Production Similarity** | Basic | High |
| **Team Consistency** | Varies by system | Identical |

## Detailed Workflows

### 🏠 Local Development Workflow

**Best for**: Quick development, prototyping, learning Django

```bash
# 1. Switch environment
.\switch-to-local.bat

# 2. Activate virtual environment (if not already active)
.\.venv\Scripts\Activate.ps1

# 3. Run migrations (first time only)
python manage.py migrate

# 4. Start development server
python manage.py runserver

# 5. Access application
# Visit: http://127.0.0.1:8000
```

**What you get**:
- ✅ SQLite database (`db.sqlite3` file)
- ✅ Console email output (for testing)
- ✅ Fast startup and restart
- ✅ Direct file system access
- ✅ Simple debugging

### 🐳 Docker Development Workflow

**Best for**: Production-like testing, team development, full-stack features

```bash
# 1. Switch environment
.\switch-to-docker.bat

# 2. Start Docker containers
docker-compose up -d

# 3. Check container status (optional)
docker-compose ps

# 4. View logs (optional)
docker-compose logs -f web

# 5. Access application
# Visit: http://localhost:8000 (Nginx)
# Or: http://localhost:8000 (Direct Django)
```

**What you get**:
- ✅ PostgreSQL database with persistent data
- ✅ Redis caching and session storage
- ✅ Nginx reverse proxy with compression
- ✅ Gunicorn application server
- ✅ Production-like environment
- ✅ Automatic migrations and static file collection

## Script Details

### switch-to-local.bat

```batch
🔄 Switching to local development environment...
✅ Backed up current .env to .env.docker.backup
✅ Copied .env.local to .env

🚀 Local development setup complete!
📋 What this does:
   • Uses SQLite database (no Docker required)
   • Email output to console
   • Local development optimizations

▶️  Start development server:
   python manage.py runserver

🐳 To switch back to Docker:
   switch-to-docker.bat
```

### switch-to-docker.bat

```batch
🐳 Switching to Docker development environment...
✅ Backed up current .env to .env.local.backup
✅ Copied .env.example to .env

🚀 Docker development setup complete!
📋 What this does:
   • Uses PostgreSQL database in Docker
   • Redis caching and sessions
   • Nginx reverse proxy
   • Production-like environment

▶️  Start Docker containers:
   docker-compose up -d

💻 To switch back to local:
   switch-to-local.bat
```

## Safety Features

### Automatic Backups
- **Current `.env` always backed up** before switching
- **`.env.docker.backup`** - Backup when switching from Docker
- **`.env.local.backup`** - Backup when switching from local
- **Never lose your configuration**

### Environment Files
- **`.env`** - Active environment configuration
- **`.env.local`** - Template for local development
- **`.env.example`** - Template for Docker development

## Troubleshooting

### "File not found" error
```bash
# Make sure you're in the project root directory
cd "d:\Live Workspace\django-starter"
dir *.bat  # Should show both switch files
```

### Scripts don't run
```bash
# Ensure execution policy allows batch files
# Run as administrator if needed
.\switch-to-local.bat
```

### Database errors after switching
```bash
# For local development - run migrations
python manage.py migrate

# For Docker development - restart containers
docker-compose down
docker-compose up -d
```

### Port conflicts
```bash
# Local development uses port 8000
# Docker development uses ports 80, 5432, 6379, 8000
# Stop other services using these ports if needed
```

## Advanced Usage

### Custom Environment Variables

You can edit the environment templates:

```bash
# Edit local development template
notepad .env.local

# Edit Docker development template  
notepad .env.example
```

### Manual Switching

If you prefer manual control:

```bash
# To local development
copy .env.local .env

# To Docker development
copy .env.example .env
```

### Integration with IDEs

**VS Code**: 
- Right-click batch files in Explorer → "Open in Integrated Terminal"
- Or use Command Palette: `Terminal: Run Active File in Active Terminal`

**PyCharm/IntelliJ**:
- Right-click batch files → "Open in Terminal"
- Or add as External Tools

## Best Practices

### Daily Development
1. **Start with local** for quick iteration
2. **Test with Docker** before committing
3. **Use version control** for environment templates
4. **Document custom changes** in team wiki

### Team Collaboration
1. **Standardize on Docker** for feature development
2. **Use local** for quick bug fixes
3. **Share custom `.env.local`** configurations
4. **Document environment-specific setup**

### Production Deployment
1. **Always test with Docker** first
2. **Use production environment variables**
3. **Never commit real `.env`** files
4. **Use CI/CD with Docker images**

---

## 📚 Related Documentation

- [Docker Development Guide](docker-development-guide.md) - Comprehensive Docker tutorial
- [Local Development Guide](local-development-guide.md) - Local setup instructions
- [Docker Quick Reference](docker-quick-reference.md) - Command cheat sheet
- [Main README](../README.md) - Project overview and features

---

**Need help?** Check our [troubleshooting guides](../docs/) or [create an issue](https://github.com/xttrust/django-starter/issues) on GitHub!