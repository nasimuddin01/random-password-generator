from django.http import HttpResponse
from django.shortcuts import render
import random


# Create your views here.
def home(request):
    return render(request, 'generator/home.html')


def password(request):
    sample_field = []
    if request.GET.get('lowercase'):
        sample_field.extend(list('abcefghijklmnopqrstuvwxyz'))
    if request.GET.get('uppercase'):
        sample_field.extend(list('ABCDEFGHIJKLMNOPQRSTUVWXYZ'))
    if request.GET.get('number'):
        sample_field.extend(list('1234567890'))
    if request.GET.get('symbol'):
        sample_field.extend(list('!@#$%^&*()_+|}{[]\'";:/><'))

    random_password = ''
    length = int(request.GET.get('length'))

    for x in range(length):
        random_password += random.choice(sample_field)

    return render(request, 'generator/result.html', { 'password': random_password })
