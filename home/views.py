from django.shortcuts import render


def home(request):
    """ A view to return the home page """
    context = {
        'pageTitle': 'xttrust Django Starter',
        'metaDescription': 'Django Starter is a Python-based starter template designed to accelerate your next project with Django.',
        'keywords': 'django, starter, xttrust, django starter template, template',
    }
    return render(request, 'home/home.html')
