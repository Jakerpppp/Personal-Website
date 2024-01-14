from django.shortcuts import render
from django.http import HttpResponse


def home(request):
    """Display the application's start/home screen."""
    return render(request, 'home.html')

