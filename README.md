# 🚀 Django Starter Template

A modern, production-ready Django starter template that accelerates your web development process. Built with best practices, this template provides a solid foundation for building scalable Django applications with authentication, responsive design, and deployment-ready configurations.

## ✨ Features

### 🔧 Core Framework
- **Django 5.1.2**: Latest stable Django framework with enhanced performance and security
- **Python 3.13+**: Modern Python version with improved performance and features
- **SQLite**: Default database for development (easily configurable for PostgreSQL, MySQL, etc.)

### 🔐 Authentication & Security
- **Django Allauth 65.1.0**: Complete authentication solution with:
  - Email verification
  - Social authentication support (Google, Facebook, GitHub, etc.)
  - Password reset functionality
  - User registration and login
- **CSRF Protection**: Built-in cross-site request forgery protection
- **Security Headers**: Configured security middleware

### 🎨 Frontend & Styling
- **Bootstrap 5.3.3**: Modern, responsive CSS framework
- **Font Awesome 6.6.0**: Comprehensive icon library
- **Animate.css 4.1.1**: CSS animation library for smooth transitions
- **Modern Dark Theme**: Custom color palette with cyan accents
  - Dark Primary: `#222831`
  - Dark Secondary: `#393E46` 
  - Accent Cyan: `#00ADB5`
  - Light Gray: `#EEEEEE`
- **Advanced Animations**: Glass morphism effects, hover transitions, and micro-interactions
- **Custom CSS/JS**: Organized static files structure with custom stylesheets and JavaScript
- **SEO Optimized**: Meta tags for search engines and social media sharing

### 🗂️ Project Structure
- **Modular Apps**: Clean separation with dedicated `home` app
- **Template Inheritance**: Well-structured base template with extensible blocks
- **Static Files Management**: Organized CSS, JavaScript, and image directories
- **Production Ready**: Gunicorn configuration and static files collection

## 📋 Requirements

This project requires Python 3.13+ and the following dependencies:

```txt
asgiref==3.8.1
Django==5.1.2
django-allauth==65.1.0
gunicorn==23.0.0
packaging==24.1
psycopg2-binary==2.9.10
sqlparse==0.5.1
tzdata==2024.2
```

## 🚀 Quick Start

### 1. Clone the Repository
```bash
git clone https://github.com/xttrust/django-starter.git
cd django-starter
```

### 2. Set Up Virtual Environment
```bash
# Create virtual environment
python -m venv .venv

# Activate virtual environment
# On Windows:
.\.venv\Scripts\Activate.ps1
# On macOS/Linux:
source .venv/bin/activate
```

### 3. Install Dependencies
```bash
pip install -r requirements.txt
```

### 4. Configure Database
```bash
# Run initial migrations
python manage.py migrate

# Create superuser account
python manage.py createsuperuser
```

### 5. Development Admin Account
For **development purposes only**, a default admin account is included:
- **Username**: `admin`
- **Password**: `@MyLocalSuper`
- **Access**: Visit `http://127.0.0.1:8000/admin/` to login

> ⚠️ **SECURITY WARNING**: This is for development only! Always create new admin accounts for production environments with strong, unique passwords.

### 6. Collect Static Files (for production)

```bash
python manage.py collectstatic --noinput
```

### 7. Run Development Server

```bash
python manage.py runserver
```

Visit `http://127.0.0.1:8000/` to see your application running!

## 📁 Project Structure

```
django-starter/
├── 📁 core/                    # Main project configuration
│   ├── settings.py            # Django settings
│   ├── urls.py               # URL routing
│   ├── wsgi.py               # WSGI configuration
│   └── asgi.py               # ASGI configuration
├── 📁 home/                   # Home application
│   ├── views.py              # View functions
│   ├── urls.py               # App-specific URLs
│   ├── models.py             # Database models
│   └── 📁 templates/home/    # App templates
├── 📁 templates/             # Global templates
│   ├── base.html             # Base template with SEO meta tags
│   └── 📁 account/           # Allauth templates
├── 📁 static/                # Static files (development)
│   ├── 📁 css/               # Custom stylesheets
│   ├── 📁 js/                # Custom JavaScript
│   └── 📁 images/            # Image assets
├── 📁 staticfiles/           # Collected static files (production)
├── requirements.txt          # Python dependencies
├── manage.py                # Django management script
└── Procfile                 # Deployment configuration
```

## ⚙️ Configuration Details

### Django Settings (`core/settings.py`)
- **DEBUG**: Set to `True` for development, change to `False` for production
- **ALLOWED_HOSTS**: Currently set to `['*']` for development
- **STATIC_URL**: `/static/` for serving static files
- **STATICFILES_DIRS**: Points to development static files directory
- **STATIC_ROOT**: Collection directory for production static files

### Template System
- **Base Template**: `templates/base.html` includes:
  - SEO-optimized meta tags
  - Open Graph and Twitter Card support
  - Responsive viewport configuration
  - Bootstrap and Font Awesome integration
  - Extensible template blocks

### Authentication
- **Allauth Configuration**: Pre-configured for email-based authentication
- **Login/Logout URLs**: Integrated with Django's authentication system
- **User Registration**: Email verification required by default

## 🎨 Frontend Features

### Custom Styling
- **CSS Variables**: Organized color scheme and theming
- **Responsive Design**: Mobile-first approach with Bootstrap
- **Custom Components**: Enhanced form controls and buttons

### JavaScript Functionality
- **Smooth Scrolling**: Enhanced navigation experience
- **Message System**: Toast notifications for user feedback
- **Progressive Enhancement**: Graceful degradation for better accessibility

### Template Blocks
The base template provides these extensible blocks:
- `{% block meta %}`: Additional meta tags
- `{% block extra_css %}`: Page-specific stylesheets
- `{% block content %}`: Main page content
- `{% block extra_js %}`: Page-specific JavaScript
- `{% block post_load_js %}`: Scripts that run after page load

## � Security Considerations

### Development vs Production Credentials

This README includes development credentials for convenience during setup. **This is NOT a security best practice for production environments.** Here's why and what you should do:

#### ❌ What NOT to do in Production:
- **Never use default passwords** like `@MyLocalSuper`
- **Never commit real credentials** to version control
- **Don't use personal emails** in public repositories
- **Avoid predictable usernames** like project names

#### ✅ Security Best Practices:

1. **Environment Variables**: Store sensitive data in environment variables
   ```bash
   # Use .env files (never commit these!)
   DJANGO_SECRET_KEY=your-random-secret-key
   DATABASE_URL=your-database-url
   ADMIN_EMAIL=your-secure-admin@yourdomain.com
   ```

2. **Strong Passwords**: Use password managers to generate secure passwords
   - Minimum 12 characters
   - Mix of uppercase, lowercase, numbers, and symbols
   - Unique for each service

3. **Email Privacy**: For public repositories:
   - Use placeholder emails like `admin@yourdomain.com`
   - Or use GitHub's no-reply email: `username@users.noreply.github.com`
   - Never expose personal emails in public code

4. **Production Admin Setup**:
   ```bash
   # Always create new admin accounts for production
   python manage.py createsuperuser
   # Use organization emails, not personal ones
   # Example: admin@yourcompany.com
   ```

### Development Credentials Explanation

The development credentials provided (`xttrust` / `@MyLocalSuper`) are:
- **Safe for local development only**
- **Should be changed immediately** when deploying
- **Not connected to any real accounts**
- **Included for quick setup convenience**

> 💡 **Pro Tip**: Remove this entire section from your README when forking this project for your own use, and never commit real production credentials to version control.

## �🚀 Deployment

### Production Checklist
1. **Environment Variables**: Set `DEBUG=False` and configure `SECRET_KEY`
2. **Allowed Hosts**: Update `ALLOWED_HOSTS` with your domain
3. **Database**: Configure production database (PostgreSQL recommended)
4. **Static Files**: Run `python manage.py collectstatic`
5. **Security**: Review security settings and enable HTTPS

### Gunicorn Configuration
The project includes Gunicorn for production deployment:
```bash
gunicorn core.wsgi:application --bind 0.0.0.0:8000
```

## 🔧 Customization

### Adding New Apps
```bash
python manage.py startapp your_app_name
```
Don't forget to add your app to `INSTALLED_APPS` in `settings.py`.

### Custom Static Files
- Add CSS files to `static/css/`
- Add JavaScript files to `static/js/`
- Add images to `static/images/`
- Reference in templates: `{% static 'css/your-file.css' %}`

### Extending Templates
```html
{% extends 'base.html' %}
{% load static %}

{% block extra_css %}
<link rel="stylesheet" href="{% static 'css/custom.css' %}">
{% endblock %}

{% block content %}
<!-- Your content here -->
{% endblock %}
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes and commit: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

If you encounter any issues or have questions:
- Create an issue on GitHub
- Check the Django documentation: https://docs.djangoproject.com/
- Review Allauth documentation: https://django-allauth.readthedocs.io/

## 🙏 Acknowledgments

- Django team for the amazing framework
- Django Allauth contributors for authentication solutions
- Bootstrap team for responsive design components
- Font Awesome for comprehensive icon library

---

**Happy coding!** 🎉 Built with ❤️ by [xttrust](https://github.com/xttrust)

