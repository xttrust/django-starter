from django.shortcuts import render


def home(request):
    """ A view to return the home page """
    context = {
        'pageTitle': 'xttrust Django Starter',
        'metaDescription': 'Django Starter is a Python-based starter template designed to accelerate your next project with Django.',
        'keywords': 'django, starter, xttrust, django starter template, template',
    }
    return render(request, 'home/home.html', context)


def test(request):
    welcomeMessage = 'Welcome to the test page'
    fruits = ('apple', 'banana', 'cherry', 'date', 'elderberry', 'fig', 'grape', 
              'honeydew', 'kiwi', 'lemon', 'mango', 'nectarine', 'orange', 
              'pear', 'quince', 'raspberry', 'strawberry', 'tangerine', 'ugli', 'watermelon')

    context = {
        'welcomeMessage': welcomeMessage,
        'fruits': fruits,
    }

    return render(request, 'home/test.html', context)
