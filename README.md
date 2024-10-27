# Django Starter Template

A simple yet effective Django starter template designed to help developers quickly set up new projects. This template includes essential configurations for Django development, `django-allauth` for user authentication, and a base HTML structure with meta tags for SEO and social sharing.

## Features

- **Django 5.1.2**: Latest Django framework version.
- **Allauth Integration**: Pre-configured with `django-allauth` for easy user authentication.
- **SQLite Database**: Uses SQLite as the default database, ideal for development.
- **SEO-Ready Base Template**: The included `base.html` template contains meta tags for Open Graph, Twitter, and canonical URLs, making it SEO-friendly from the start.
- **Bootstrap 5**: Integrated Bootstrap CSS and JavaScript for quick, responsive design.
- **jQuery**: Included for easier JavaScript handling.

## Requirements

To run this project, install the following Python dependencies:

```plaintext
asgiref==3.8.1
Django==5.1.2
django-allauth==65.1.0
sqlparse==0.5.1
tzdata==2024.2 
```

## Running the Project

```plaintext
git clone https://github.com/xttrust/django-starter

cd django-starter

pip install -r requirements.txt

python manage.py migrate

python manage.py createsuperuser

python manage.py runserver
```

- The application will be accessible at http://127.0.0.1:8000.

## File Structure Overview
 ```plaintext 
 settings.py
 ```

- Contains essential configurations for development, such as:

    **DEBUG=True:** Debug mode is enabled for development.
    **ALLOWED_HOSTS=['*']**: Allows connections from any host.



### This template serves as a foundation for other pages and includes:
```plaintext 
base.html Template
 ```

- SEO Meta Tags: Configured for Open Graph, Twitter cards, and canonical URLs.
- Bootstrap and FontAwesome: Preloaded for rapid styling.
- Blocks for Customization:
- Use {% block %} tags to add or override specific page sections (e.g., header, content, footer).

