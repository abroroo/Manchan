from django.shortcuts import render
from django.http import JsonResponse
from . import models
from django.core import serializers
# Create your views here.
from datetime import datetime
def api(request):
    return JsonResponse({"message": "Hello World"})

def check_date(request):
    customer = models.Customer.objects.get(ticket_number=request.GET.get('ticket_number'))
    date_request = datetime.fromisoformat(request.GET.get('datetime'))
    date_database = models.Date.objects.filter(customer=customer)
    day_request = datetime.strftime(date_request, '%Y-%m-%d')
    day_database = datetime.strftime(date_database.first().event_date, '%Y-%m-%d')

    hour_request = datetime.strftime(date_request, '%H:%M:%S')
    hour_database = datetime.strftime(date_database.first().event_date, '%H:%M:%S')

    # print("Date request {}, Date from database {}\n Day request : {} Database day : {} \n Hour request : {} Database hour : {}\
    #         ".format(date_request, date_database.first().event_date, day_request, day_database, hour_request, hour_database))

    # if (day_request == day_database):
    #     print("[WARNING] : We already have an event on that day!")

    database_data = {
        "day" : day_database,
        "hour" : hour_database
    }
    request_data = {
        "day" : day_request,
        "hour" : hour_request
    }

    return JsonResponse({"database_data" : database_data, "request_data" : request_data})


def choose_menu(request):
    customer = models.Customer.objects.get(ticket_number=request.GET.get('ticket_number'))
    menu = models.Menu.objects.filter(customer=customer)
    if len(menu) == 0:
        print("Customer has no menu")
        print(serializers.serialize("json", menu))
    else:
        print(menu)
    return JsonResponse({"message": "Here is the menu"})