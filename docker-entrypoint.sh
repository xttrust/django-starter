#!/bin/bash

# Exit on any error
set -e

echo "🐳 Django Docker Entrypoint Script"
echo "=================================="

# Function to wait for database
wait_for_db() {
    echo "⏳ Waiting for database connection..."
    while ! python manage.py dbshell --command="SELECT 1;" >/dev/null 2>&1; do
        echo "   Database is unavailable - sleeping for 2 seconds"
        sleep 2
    done
    echo "✅ Database is ready!"
}

# Function to run migrations
run_migrations() {
    echo "🔄 Running database migrations..."
    python manage.py migrate --noinput
    echo "✅ Migrations completed!"
}

# Function to collect static files
collect_static() {
    echo "📦 Collecting static files..."
    python manage.py collectstatic --noinput --clear
    echo "✅ Static files collected!"
}

# Function to create superuser if it doesn't exist
create_superuser() {
    echo "👤 Creating superuser if needed..."
    python manage.py shell << EOF
from django.contrib.auth import get_user_model
User = get_user_model()
if not User.objects.filter(username='admin').exists():
    User.objects.create_superuser('admin', 'admin@example.com', 'admin123')
    print('✅ Superuser created: admin/admin123')
else:
    print('ℹ️  Superuser already exists')
EOF
}

# Main execution
echo "🚀 Starting Django application setup..."

# Wait for database to be ready
wait_for_db

# Run migrations
run_migrations

# Collect static files
collect_static

# Create superuser in development
if [ "$DEBUG" = "1" ]; then
    create_superuser
fi

echo "🎉 Setup completed! Starting application..."
echo "=================================="

# Execute the main command
exec "$@"