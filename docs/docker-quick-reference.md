# 🚀 Docker Quick Reference

## Essential Commands

### Starting & Stopping

```bash
docker-compose up -d          # Start all containers in background
docker-compose down           # Stop all containers
docker-compose restart web    # Restart just the Django app
docker-compose logs -f web    # View Django app logs
```

### Development Workflow

```bash
# Your daily workflow:
1. docker-compose up -d       # Start containers
2. Edit your code             # Changes auto-reload!
3. Refresh browser           # See changes immediately
4. docker-compose down       # Stop when done
```

### Django Management

```bash
docker-compose exec web python manage.py migrate
docker-compose exec web python manage.py makemigrations
docker-compose exec web python manage.py createsuperuser
docker-compose exec web python manage.py shell
docker-compose exec web python manage.py test
```

### Database Access

```bash
# PostgreSQL command line
docker-compose exec db psql -U django_user -d django_starter

# Inside PostgreSQL:
\dt                          # List tables
\d table_name               # Show table structure
SELECT * FROM auth_user;    # View users
\q                          # Quit
```

## What Updates Automatically?

- ✅ Python files (.py) - Auto-reload in ~2 seconds
- ✅ Templates (.html) - Instant update
- ✅ Static files (CSS/JS) - Instant update in DEBUG mode
- ❌ requirements.txt - Need to rebuild: `docker-compose build`
- ❌ Dockerfile changes - Need to rebuild: `docker-compose build`

## Access Points

- **Django app**: <http://localhost:8000>
- **Admin panel**: <http://localhost:8000/admin> (admin/admin123)
- **Via Nginx**: <http://localhost>
- **Database**: localhost:5432
- **Redis**: localhost:6379

## Troubleshooting

```bash
# Container not starting?
docker-compose logs web

# Need fresh start?
docker-compose down -v
docker-compose up --build

# Port already in use?
# Change ports in docker-compose.yml:
ports:
  - "8001:8000"  # Use port 8001 instead
```

## Pro Tips

- Keep logs open: `docker-compose logs -f web`
- Most code changes don't need container restart
- Use Django admin for database operations
- Backup data: `docker-compose exec db pg_dump -U django_user django_starter > backup.sql`
