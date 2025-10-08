# 🔧 Local Development Setup

## Quick Start for Local Development (No Docker)

If you want to run the Django application locally without Docker, follow these steps:

### 1. Set Up Environment

```bash
# Clone repository
git clone https://github.com/xttrust/django-starter.git
cd django-starter

# Create and activate virtual environment
python -m venv .venv

# Windows
.\.venv\Scripts\Activate.ps1

# macOS/Linux  
source .venv/bin/activate

# Install dependencies
pip install -r requirements.txt
```

### 2. Configure for Local Development

```bash
# Option A: Use local environment file
cp .env.local .env

# Option B: Temporarily disable Docker database
# Edit .env and comment out DATABASE_URL line:
# DATABASE_URL=postgresql://...  # Comment this out
```

### 3. Set Up Local Database

```bash
# Run migrations (creates SQLite database)
python manage.py migrate

# Create superuser (optional)
python manage.py createsuperuser

# Or use the default admin account:
# Username: admin
# Password: admin123 (if migrations imported existing data)
```

### 4. Run Development Server

```bash
python manage.py runserver
```

Visit: <http://127.0.0.1:8000>

## Local vs Docker Configuration

### Database Behavior

- **Local Development**: Uses SQLite (`db.sqlite3` file)
- **Docker Development**: Uses PostgreSQL container

### How It Works

The Django settings automatically detect the environment:

```python
# In settings.py:
DATABASE_URL = config('DATABASE_URL', default=None)

if DATABASE_URL:
    # Docker: Use PostgreSQL
    DATABASES = {'default': dj_database_url.parse(DATABASE_URL)}
else:
    # Local: Use SQLite
    DATABASES = {'default': {'ENGINE': 'django.db.backends.sqlite3', ...}}
```

## Switching Between Environments

### To Local Development

```bash
# Method 1: Use .env.local
cp .env.local .env
python manage.py runserver

# Method 2: Comment out DATABASE_URL in .env
# DATABASE_URL=postgresql://...  # Add # at the beginning
```

### Back to Docker

```bash
# Restore .env for Docker
cp .env.example .env
docker-compose up -d
```

## Troubleshooting Local Development

### Common Issues

1. **"No module named 'django'"**

   ```bash
   # Activate virtual environment first
   .\.venv\Scripts\Activate.ps1  # Windows
   source .venv/bin/activate     # macOS/Linux
   ```

2. **"could not translate host name 'db'"**

   ```bash
   # DATABASE_URL is set but Docker isn't running
   # Comment out DATABASE_URL in .env file
   ```

3. **"No such table" errors**

   ```bash
   # Run migrations for SQLite
   python manage.py migrate
   ```

4. **Static files not loading**

   ```bash
   # Collect static files
   python manage.py collectstatic
   ```

## Benefits of Each Approach

### Local Development

- ✅ Faster startup
- ✅ Simpler debugging
- ✅ No Docker overhead
- ✅ Direct file access

### Docker Development

- ✅ Production-like environment
- ✅ Consistent across team
- ✅ Full stack (PostgreSQL + Redis)
- ✅ Easy deployment

Choose the approach that best fits your workflow!
