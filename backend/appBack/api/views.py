from django.shortcuts import render, redirect
from django.http import JsonResponse
from . import models
from django.core import serializers
import random
from django.forms.models import model_to_dict

# Create your views here.
from datetime import datetime
def api(request):
    return JsonResponse({"message": "Hello World"})

def get_ticket_number(request):
    all_customers = models.Customer.objects.values()
    all_tickets = []

    for k in all_customers:
        all_tickets.append(k['ticket_number'])

    while True:
        ticket_number = random.randint(1, 100000000)
        if ticket_number not in all_tickets:
            models.Customer.objects.create(name=request.GET.get('name'), address=request.GET.get('address'), \
                                        phone_number=request.GET.get('phone_number'), ticket_number=ticket_number)
        break
    return JsonResponse({'ticket_number' : ticket_number})

def check_date(request):
    customer = models.Customer.objects.get(ticket_number=request.GET.get('ticket_number'))
    date_request = datetime.fromisoformat(request.GET.get('datetime'))

    database_dates = models.Date.objects.all()
    dates = []
    hours = []
    for k in database_dates:
        day_database = datetime.strftime(k.event_date, '%Y-%m-%d')
        hour_database = datetime.strftime(k.event_date, '%Y:%m:%d:%H:%M:%S')
        dates.append(day_database)
        hours.append(hour_database)

    day_request = datetime.strftime(date_request, '%Y-%m-%d')
    hour_request = datetime.strftime(date_request, '%Y:%m:%d:%H:%M:%S')
    warnings = []
    date_available = True
    if (day_request in day_database):
        date_available = False
        warnings.append("We have an event on that day!")

    if (hour_request in hour_database):
        date_available = False
        warnings.append("We already have an event with this specific time!")

    return JsonResponse({"date_available" : date_available, "warnings" : warnings})


def get_menu(request):
    errors = []
    try:
        customer = models.Customer.objects.get(ticket_number=request.GET.get('ticket_number'))
        menu = models.Menu.objects.get(customer=customer)
        customer_foods = []
        customer_drinks = []

        for f in range(0, models.Food.objects.count()):
            data_food = models.Food.objects.all()[f]
            customer_foods.append(model_to_dict(data_food))

        for d in range(0, models.Drink.objects.count()):
            data_drink = models.Drink.objects.all()[d]
            customer_drinks.append(model_to_dict(data_drink))

        menu = model_to_dict(menu)
        menu['foods'] = customer_foods
        menu['drinks'] = customer_drinks

        return JsonResponse({'menu' : menu})
    except models.Menu.DoesNotExist:
        models.Menu.objects.create(table=False, tent=False, customer=customer)
        errors.append("Menu does not exist, so creating new menu!")
        return redirect('/api/choose_menu?ticket_number=' + request.GET.get('ticket_number'))
    except models.Customer.DoesNotExist:
        errors.append("Customer does not exist")

    except IndexError:
        errors.append("Index Error")

    return JsonResponse({"errors" : errors})


    