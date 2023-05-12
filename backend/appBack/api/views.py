from django.shortcuts import render, redirect
from django.http import JsonResponse
from . import models
from django.core import serializers
import random
from django.forms.models import model_to_dict
from rest_framework.decorators import api_view
from rest_framework import generics
from rest_framework.response import Response
from datetime import datetime

@api_view(['GET'])
def api(request):
    return Response({"message": "Welcome to the API"})

class CustomerCreateAPIView(generics.CreateAPIView):
    queryset = models.Customer.objects.all()
    serializer_class = models.CustomerSerializer
    def perform_create(self, serializer):
        all_customers = models.Customer.objects.values()
        all_tickets = []

        for k in all_customers:
            all_tickets.append(k['ticket_number'])

        while True:
            my_ticket_number = random.randint(1, 100000000)
            if my_ticket_number not in all_tickets:
                    serializer.save(ticket_number=my_ticket_number)
            break

class CheckDateAPIView(generics.RetrieveAPIView):
    queryset = models.Date.objects.all()
    serializer_class = models.DateSerializer
    lookup_field = 'ticket_number'

@api_view(['GET'])
def check_date(request):
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

    return Response({"date_available" : date_available, "warnings" : warnings})

@api_view(['GET'])
def get_menu(request):
    customer = models.Customer.objects.get(ticket_number=request.GET.get('ticket_number'))
    try:
        if models.Menu.objects.get(customer=customer):
            data = models.Menu.objects.get(customer=customer)
            menu = models.MenuSerializer(data).data
            return Response({'menu' : menu})
    except Exception as e:
        foods = models.Food.objects.all()
        drinks = models.Drink.objects.all()
        instance = models.Menu.objects.create(table=False, tent=False, customer=customer)
        instance.foods.set(foods)
        instance.drinks.set(drinks)
        menu = models.MenuSerializer(instance).data
        return Response({'menu' : menu, 'errors' : str(e)})
    


class CustomerViewAPIView(generics.RetrieveAPIView):
    queryset = models.Customer.objects.all()
    serializer_class = models.CustomerSerializer
    lookup_field = 'ticket_number'



class UpdateMenuAPIView(generics.UpdateAPIView):
    queryset = models.Menu.objects.all()
    serializer_class = models.MenuSerializer

    def perform_update(self, serializer):
        instance = serializer.save(customer=self.request.data.menu.customer)
        if not instance.content:
            instance.content = instance.title



#@api_view(['GET'])
# def new_customer(request):
#     all_customers = models.Customer.objects.values()
#     all_tickets = []

#     for k in all_customers:
#         all_tickets.append(k['ticket_number'])

#     while True:
#         ticket_number = random.randint(1, 100000000)
#         if ticket_number not in all_tickets:
#             models.Customer.objects.create(name=request.GET.get('name'), address=request.GET.get('address'), \
#                                         phone_number=request.GET.get('phone_number'), ticket_number=ticket_number)
#         break
#     return Response({'ticket_number' : ticket_number})