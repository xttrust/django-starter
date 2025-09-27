# 📚 Documentation Index

Welcome to the Django Starter documentation! This guide will help you navigate all available documentation and choose the right path for your needs.

## 🚀 Getting Started

### New to Django Starter?
Start here to understand the project and get up and running quickly.

| Document | Description | Audience |
|----------|-------------|----------|
| [**Main README**](../README.md) | Project overview, features, and quick start guide | Everyone |
| [**Local Development Guide**](local-development-guide.md) | Simple setup without Docker | Beginners, Quick prototyping |
| [**Docker Development Guide**](docker-development-guide.md) | Complete containerization tutorial | Production-like development |

## 🔄 Environment Management

### Switching Between Development Modes
Choose between local (SQLite) and Docker (PostgreSQL) environments.

| Document | Description | Use Case |
|----------|-------------|----------|
| [**Environment Switching Guide**](environment-switching-guide.md) | Easy switching with batch scripts | Daily development workflow |
| [**Docker Quick Reference**](docker-quick-reference.md) | Command cheat sheet | Docker power users |

## 📖 Detailed Guides

### Development Approaches

#### 💻 Local Development
Perfect for beginners and quick development cycles.

- **Guide**: [Local Development Guide](local-development-guide.md)
- **Features**: SQLite database, fast startup, simple debugging
- **Best For**: Learning Django, rapid prototyping, individual development
- **Requirements**: Python 3.13+, pip, virtual environment

#### 🐳 Docker Development  
Production-like environment with full infrastructure stack.

- **Guide**: [Docker Development Guide](docker-development-guide.md)
- **Features**: PostgreSQL, Redis, Nginx, auto-migrations
- **Best For**: Team development, production testing, complex features
- **Requirements**: Docker Desktop, docker-compose

## 🔧 Quick Reference

### Essential Commands

#### Local Development
```bash
# Switch to local environment
.\switch-to-local.bat

# Start development
python manage.py runserver
# Visit: http://127.0.0.1:8000
```

#### Docker Development
```bash
# Switch to Docker environment
.\switch-to-docker.bat

# Start containers
docker-compose up -d
# Visit: http://localhost:8000
```

### Environment Switching Scripts

| Script | Purpose | Result |
|--------|---------|--------|
| `switch-to-local.bat` | Enable local development | Uses SQLite, console email |
| `switch-to-docker.bat` | Enable Docker development | Uses PostgreSQL, Redis, Nginx |

## 📋 Documentation by Topic

### 🔰 Beginner Resources

1. **[Main README](../README.md#quick-start)** - Start here for project overview
2. **[Local Development Guide](local-development-guide.md)** - Simple setup guide
3. **[Environment Switching Guide](environment-switching-guide.md)** - Easy switching between modes

### 🐳 Docker Resources

1. **[Docker Development Guide](docker-development-guide.md)** - Comprehensive Docker tutorial
2. **[Docker Quick Reference](docker-quick-reference.md)** - Command cheat sheet
3. **[Environment Switching Guide](environment-switching-guide.md)** - Switch to Docker mode

### ⚙️ Advanced Configuration

1. **[Main README](../README.md#configuration-details)** - Django settings explanation
2. **[Local Development Guide](local-development-guide.md#troubleshooting-local-development)** - Local troubleshooting
3. **[Docker Development Guide](docker-development-guide.md#troubleshooting)** - Docker troubleshooting

## 🎯 Choose Your Path

### I'm New to Django
1. Read the [Main README](../README.md) for project overview
2. Follow [Local Development Guide](local-development-guide.md) for simple setup
3. Use [Environment Switching Guide](environment-switching-guide.md) when ready for Docker

### I Want Production-Like Development
1. Read the [Main README](../README.md) for project features
2. Follow [Docker Development Guide](docker-development-guide.md) for full setup
3. Use [Docker Quick Reference](docker-quick-reference.md) for daily commands

### I'm Part of a Development Team
1. Standardize on [Docker Development Guide](docker-development-guide.md)
2. Use [Environment Switching Guide](environment-switching-guide.md) for flexibility
3. Reference [Docker Quick Reference](docker-quick-reference.md) for team onboarding

## 📁 File Structure Reference

```
django-starter/
├── 📄 README.md                           # Main project documentation
├── 📁 docs/                               # Documentation directory
│   ├── 📄 README.md                       # This documentation index
│   ├── 📄 local-development-guide.md      # Local development setup
│   ├── 📄 docker-development-guide.md     # Docker development tutorial
│   ├── 📄 docker-quick-reference.md       # Docker command cheat sheet
│   ├── 📄 environment-switching-guide.md  # Environment switching tutorial
│   └── 📁 img/                            # Documentation images
├── 🔧 switch-to-local.bat                 # Switch to local development
├── 🔧 switch-to-docker.bat                # Switch to Docker development
├── ⚙️ .env.local                          # Local development template
├── ⚙️ .env.example                        # Docker development template
└── 🐳 docker-compose.yml                  # Docker orchestration
```

## 🔍 Quick Navigation

### By Development Stage

#### Project Setup
- [Project Overview](../README.md)
- [Local Setup](local-development-guide.md)
- [Docker Setup](docker-development-guide.md)

#### Daily Development
- [Environment Switching](environment-switching-guide.md)
- [Docker Commands](docker-quick-reference.md)
- [Troubleshooting](docker-development-guide.md#troubleshooting)

#### Production Preparation
- [Docker Production](docker-development-guide.md#production-deployment)
- [Deployment Guide](../README.md#docker-deployment)

### By Experience Level

#### Beginner (New to Django/Docker)
1. [Main README](../README.md) → Overview
2. [Local Development](local-development-guide.md) → Simple start
3. [Environment Switching](environment-switching-guide.md) → Easy switching

#### Intermediate (Know Django, Learning Docker)
1. [Docker Development Guide](docker-development-guide.md) → Full tutorial
2. [Environment Switching](environment-switching-guide.md) → Flexible workflow
3. [Docker Quick Reference](docker-quick-reference.md) → Daily commands

#### Advanced (Production Deployment)
1. [Docker Production Setup](docker-development-guide.md#production-deployment)
2. [Advanced Configuration](../README.md#configuration-details)
3. [Custom Environment Setup](environment-switching-guide.md#advanced-usage)

## 🆘 Getting Help

### Documentation Issues
- **Unclear instructions?** [Create an issue](https://github.com/xttrust/django-starter/issues)
- **Missing information?** [Suggest improvements](https://github.com/xttrust/django-starter/issues)
- **Found errors?** [Submit corrections](https://github.com/xttrust/django-starter/pulls)

### Technical Support
- **Setup problems?** Check troubleshooting sections in guides
- **Docker issues?** See [Docker Troubleshooting](docker-development-guide.md#troubleshooting)
- **Django questions?** Visit [Django Documentation](https://docs.djangoproject.com/)

### Community Resources
- **GitHub Issues**: [Report bugs and request features](https://github.com/xttrust/django-starter/issues)
- **Discussions**: [Ask questions and share experiences](https://github.com/xttrust/django-starter/discussions)
- **Pull Requests**: [Contribute improvements](https://github.com/xttrust/django-starter/pulls)

## 🔗 External Resources

### Django Learning
- [Django Official Tutorial](https://docs.djangoproject.com/en/5.1/intro/tutorial01/)
- [Django Best Practices](https://django-best-practices.readthedocs.io/)
- [Django Packages](https://djangopackages.org/)

### Docker Learning
- [Docker Official Tutorial](https://docs.docker.com/get-started/)
- [Docker Compose Guide](https://docs.docker.com/compose/gettingstarted/)
- [Docker Best Practices](https://docs.docker.com/develop/best-practices/)

### Development Tools
- [VS Code Django Extension](https://marketplace.visualstudio.com/items?itemName=ms-python.python)
- [Git Documentation](https://git-scm.com/doc)
- [Bootstrap Documentation](https://getbootstrap.com/docs/5.3/getting-started/introduction/)

---

**Happy coding!** 🎉 Choose your path above and start building amazing Django applications!