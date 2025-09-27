# 🐳 Docker Development Guide for Beginners

Welcome to the Docker development guide for Django Starter! This guide will help you understand how to work with the containerized version of this application, even if you're new to Docker.

## 📋 Table of Contents

- [What is Docker and Why Use It?](#-what-is-docker-and-why-use-it)
- [Quick Start](#-quick-start)
- [Understanding Your Development Workflow](#-understanding-your-development-workflow)
- [Making Changes to Your App](#-making-changes-to-your-app)
- [Database Operations](#-database-operations)
- [Common Development Tasks](#-common-development-tasks)
- [Troubleshooting](#-troubleshooting)
- [Advanced Tips](#-advanced-tips)

---

## 🤔 What is Docker and Why Use It?

**Docker** packages your application and all its dependencies into lightweight, portable containers. Think of it like a "virtual environment" but for your entire application stack.

### Benefits for Beginners

- ✅ **No Setup Headaches**: No need to install Python, PostgreSQL, Redis locally
- ✅ **Consistent Environment**: Works the same on Windows, Mac, and Linux
- ✅ **Easy Sharing**: Other developers get the exact same setup
- ✅ **Clean System**: Nothing installed directly on your computer
- ✅ **Easy Reset**: Start fresh anytime with one command

### What's Running in Your Containers

```
🐳 Your Application Stack:
├── 📱 Django App (Python 3.13 + your code)
├── 🗄️ PostgreSQL Database (for storing data)
├── 🔄 Redis (for caching and sessions)
└── 🌐 Nginx (web server for production)
```

---

## 🚀 Quick Start

### Prerequisites

- Docker Desktop installed ([Download here](https://www.docker.com/products/docker-desktop/))
- Git installed
- A code editor (VS Code recommended)

### Get Started in 3 Steps

```bash
# 1. Clone and enter the project
git clone https://github.com/xttrust/django-starter.git
cd django-starter

# 2. Build and start everything
docker-compose up --build

# 3. Open your browser
# Visit: http://localhost:8000
```

That's it! Your Django app is now running with a full database and cache system.

### Admin Access

- **URL**: <http://localhost:8000/admin>
- **Username**: `admin`
- **Password**: `admin123`

---

## 🔄 Understanding Your Development Workflow

### How Container Updates Work

Your setup is designed for **easy development**. Here's what happens when you make changes:

#### ✅ **Automatic Updates** (No Action Needed)

These changes are detected instantly:

```python
📁 Python Files (.py)
├── views.py      ✅ Auto-reload in ~2 seconds
├── models.py     ✅ Auto-reload in ~2 seconds
├── urls.py       ✅ Auto-reload in ~2 seconds
├── settings.py   ✅ Auto-reload in ~2 seconds
└── any_app/*.py  ✅ Auto-reload in ~2 seconds

📁 Templates (.html)
├── base.html           ✅ Instant update
├── home/index.html     ✅ Instant update
└── account/*.html      ✅ Instant update

📁 Static Files (CSS/JS) - in DEBUG mode
├── main.css           ✅ Instant update
├── main.js            ✅ Instant update
└── any custom files   ✅ Instant update
```

**What you do**: Edit file → Save → Refresh browser ✅

#### ⚠️ **Manual Updates Required**

These changes need extra steps:

```python
🗄️ Database Changes
├── New models          ➡️ Run migrations
├── Model field changes ➡️ Run migrations
├── Database data       ➡️ Use Django admin or shell

📦 Dependencies
├── requirements.txt    ➡️ Rebuild containers
├── New Python packages ➡️ Rebuild containers

🐳 Docker Configuration
├── Dockerfile         ➡️ Rebuild containers
├── docker-compose.yml ➡️ Restart containers
```

---

## ✏️ Making Changes to Your App

### Scenario 1: Editing Views (Python Code)

**Example**: Change the homepage message

```python
# Edit: home/views.py
from django.views.generic import TemplateView

class HomeView(TemplateView):
    template_name = 'home/index.html'
    
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        # Change this message:
        context['welcome_message'] = 'Hello from my Docker app!'
        return context
```

**What happens**:

1. Save the file
2. Watch your terminal - you'll see: `Worker reloading: /app/home/views.py modified`
3. Refresh your browser - changes appear immediately! ✅

### Scenario 2: Editing Templates (HTML)

**Example**: Update the page title

```html
<!-- Edit: templates/base.html -->
<title>My Awesome Django App</title>  <!-- Change this -->
```

**What happens**:

1. Save the file
2. Refresh browser - changes appear instantly! ✅

### Scenario 3: Editing Styles (CSS)

**Example**: Change the theme color

```css
/* Edit: static/css/main.css */
:root {
    --primary-color: #00ADB5;    /* Change this color */
    --secondary-color: #393E46;
}
```

**What happens**:

1. Save the file
2. Refresh browser - new styles apply immediately! ✅

### Scenario 4: Adding a New Model (Requires Migration)

**Example**: Add a blog post model

```python
# Edit: home/models.py
from django.db import models

class BlogPost(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.title
```

**Required steps**:

```bash
# 1. Create migration files
docker-compose exec web python manage.py makemigrations

# 2. Apply migrations to database
docker-compose exec web python manage.py migrate

# 3. (Optional) Add to admin
# Edit home/admin.py and add:
# from .models import BlogPost
# admin.site.register(BlogPost)
```

---

## 🗄️ Database Operations

### Accessing the Database

#### Method 1: Django Admin Panel

- **URL**: <http://localhost:8000/admin>
- **Credentials**: admin/admin123
- **Best for**: Viewing and editing data through a web interface

#### Method 2: Django Shell

```bash
# Access Django shell inside container
docker-compose exec web python manage.py shell

# Now you can run Python/Django code:
>>> from django.contrib.auth.models import User
>>> User.objects.all()
>>> User.objects.create_user('testuser', 'test@example.com', 'password')
```

#### Method 3: Direct Database Access (PostgreSQL)

```bash
# Connect to PostgreSQL directly
docker-compose exec db psql -U django_user -d django_starter

# Now you can run SQL commands:
django_starter=# \dt                    -- List all tables
django_starter=# \d auth_user           -- Describe user table
django_starter=# SELECT * FROM auth_user;  -- View all users
django_starter=# \q                     -- Quit
```

### Essential Database Commands

```sql
-- Once in PostgreSQL (\dt commands):
\l          -- List all databases
\dt         -- List all tables
\d table    -- Show table structure
\du         -- List database users
\q          -- Quit

-- SQL queries:
SELECT * FROM auth_user;                    -- View all users
SELECT * FROM django_migrations;           -- View applied migrations
SELECT COUNT(*) FROM auth_user;            -- Count users
```

### Managing Migrations

```bash
# Check migration status
docker-compose exec web python manage.py showmigrations

# Create new migrations after model changes
docker-compose exec web python manage.py makemigrations

# Apply migrations
docker-compose exec web python manage.py migrate

# Rollback to specific migration (if needed)
docker-compose exec web python manage.py migrate app_name 0001
```

---

## 🛠️ Common Development Tasks

### Starting Your Development Day

```bash
# Start all containers (if stopped)
docker-compose up -d

# View logs to see what's happening
docker-compose logs -f web

# Check if everything is running
docker-compose ps
```

### Managing Containers

```bash
# Stop all containers
docker-compose down

# Stop and remove all data (fresh start)
docker-compose down -v

# Restart just the web app
docker-compose restart web

# Rebuild containers (after requirements.txt changes)
docker-compose build
docker-compose up -d
```

### Installing New Python Packages

```bash
# 1. Add package to requirements.txt
echo "django-crispy-forms==2.0" >> requirements.txt

# 2. Rebuild the container
docker-compose down
docker-compose build
docker-compose up -d

# 3. Package is now available in your app
```

### Creating Superusers

```bash
# Create a new admin user
docker-compose exec web python manage.py createsuperuser

# Follow the prompts to set username, email, password
```

### Collecting Static Files (for production testing)

```bash
# Collect all static files
docker-compose exec web python manage.py collectstatic --noinput
```

### Running Tests

```bash
# Run all tests
docker-compose exec web python manage.py test

# Run tests for specific app
docker-compose exec web python manage.py test home

# Run with verbose output
docker-compose exec web python manage.py test --verbosity=2
```

---

## 🐛 Troubleshooting

### Container Won't Start

```bash
# Check container status
docker-compose ps

# View error logs
docker-compose logs web
docker-compose logs db

# Common fix: restart everything
docker-compose down
docker-compose up -d
```

### Database Connection Issues

```bash
# Check if database is running
docker-compose logs db

# Check if database is ready
docker-compose exec db pg_isready -U django_user

# Reset database (WARNING: deletes all data)
docker-compose down -v
docker-compose up -d
```

### Code Changes Not Appearing

```bash
# Check if auto-reload is working
docker-compose logs -f web

# You should see messages like:
# "Worker reloading: /app/yourfile.py modified"

# If not working, try:
docker-compose restart web
```

### Port Already in Use

```bash
# Error: "port is already allocated"

# Option 1: Stop other services using the port
# Option 2: Change ports in docker-compose.yml
ports:
  - "8001:8000"  # Change 8000 to 8001
```

### Out of Disk Space

```bash
# Clean up unused Docker resources
docker system prune -a

# Remove unused volumes
docker volume prune

# Check Docker disk usage
docker system df
```

---

## 🚀 Advanced Tips

### Development Shortcuts

```bash
# Create aliases for common commands (add to your shell profile):
alias dcu="docker-compose up -d"
alias dcd="docker-compose down"
alias dcl="docker-compose logs -f web"
alias dcr="docker-compose restart web"
alias dce="docker-compose exec web"

# Now you can use:
dcu          # Start containers
dcl          # View logs
dce python manage.py shell  # Django shell
```

### Environment Customization

```bash
# Create .env file for custom settings
cp .env.example .env

# Edit .env file:
DEBUG=1
SECRET_KEY=your-secret-key
DATABASE_URL=postgresql://user:pass@db:5432/dbname
```

### Multiple Environments

```bash
# Development (current setup)
docker-compose up -d

# Production-like testing
docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d
```

### Backup and Restore Data

```bash
# Backup database
docker-compose exec db pg_dump -U django_user django_starter > backup.sql

# Restore database
docker-compose exec -T db psql -U django_user django_starter < backup.sql

# Backup uploaded files
docker cp django_starter_web:/app/media ./media_backup
```

### Performance Monitoring

```bash
# Monitor container resources
docker stats

# Check container health
docker-compose exec web python manage.py check

# Database performance
docker-compose exec db psql -U django_user -d django_starter -c "SELECT * FROM pg_stat_activity;"
```

---

## 🎯 Best Practices for Beginners

### 1. **Save Your Work Regularly**

- Your code is automatically synced, but commit to Git frequently
- Database data persists between container restarts
- Use `docker-compose down -v` only when you want to reset everything

### 2. **Watch the Logs**

```bash
# Always keep logs visible during development
docker-compose logs -f web
```

### 3. **Test Changes Incrementally**

- Make small changes and test immediately
- Use Django admin to verify database changes
- Check both <http://localhost:8000> and <http://localhost> (Nginx)

### 4. **Keep Your Requirements Updated**

```bash
# Add new packages properly:
echo "package-name==version" >> requirements.txt
docker-compose build
```

### 5. **Use Django Management Commands**

```bash
# Common commands you'll use:
docker-compose exec web python manage.py makemigrations
docker-compose exec web python manage.py migrate
docker-compose exec web python manage.py createsuperuser
docker-compose exec web python manage.py shell
docker-compose exec web python manage.py test
```

---

## 🆘 Getting Help

### Quick Health Check

```bash
# Run this if anything seems broken:
docker-compose ps              # Are containers running?
docker-compose logs web        # Any error messages?
curl http://localhost:8000     # Is the app responding?
```

### When to Restart Containers

- ✅ **Code changes**: No restart needed
- ✅ **Template changes**: No restart needed  
- ✅ **CSS/JS changes**: No restart needed
- ❌ **requirements.txt changes**: Need rebuild
- ❌ **settings.py environment changes**: Need restart
- ❌ **Docker config changes**: Need restart

### Community Resources

- [Django Documentation](https://docs.djangoproject.com/)
- [Docker Documentation](https://docs.docker.com/)
- [Project GitHub Issues](https://github.com/xttrust/django-starter/issues)

---

## 🎉 Congratulations

You now know how to develop with Docker! This setup gives you:

- **Professional development environment** that matches production
- **No conflicts** with other projects on your system
- **Easy collaboration** with other developers
- **Scalable architecture** ready for deployment

**Happy coding!** 🚀

---

*Last updated: September 2025*
*For more advanced Docker topics, see the main project documentation.*
