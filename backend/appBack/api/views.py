from django.shortcuts import render, redirect
from django.http import JsonResponse, Http404
from . import models
from django.core import serializers
import random
from django.forms.models import model_to_dict
from rest_framework.decorators import api_view
from rest_framework import generics, status
from rest_framework.views import APIView
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
                    Response({'ticket_number': my_ticket_number})
            break

class CustomerViewAPIView(generics.RetrieveAPIView):
    queryset = models.Customer.objects.all()
    serializer_class = models.CustomerSerializer
    lookup_field = 'ticket_number'

@api_view(['GET'])
def check_date(request):
    date_available = True
    error = ""
    try:
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

        if (day_request in day_database):
            date_available = False
            error = "We have an event on that day!"

        if (hour_request in hour_database):
            date_available = False
            error = "We already have an event with this specific time!"
    except Exception as e:
        date_available = False
        error = str(e)
    return Response({"date_available" : date_available, "error" : error})

@api_view(['GET'])
def get_menu(request, ticket_number):
    customer = models.Customer.objects.get(ticket_number=ticket_number)
    try:
        if models.Menu.objects.get(customer=customer):
            data = models.Menu.objects.get(customer=customer)
            menu = models.MenuSerializer(data).data
            return Response({'menu' : menu})
    except Exception as e:
        foods = models.Food.objects.all()
        drinks = models.Drink.objects.all()
        print(foods, drinks)
        instance = models.Menu.objects.create(table=False, tent=False, customer=customer)
        instance.foods.set(foods)
        instance.drinks.set(drinks)
        menu = models.MenuSerializer(instance).data
        return Response({'menu' : menu, 'errors' : str(e)})


class MenuDetail(APIView):
    def get_object(self, ticket_number):
        try:
            customer = models.Customer.objects.get(ticket_number=ticket_number)
            return models.Menu.objects.get(customer=customer)
        except models.Menu.DoesNotExist:
            raise Http404
        
    def get(self, request, ticket_number, format=None):
        menu = self.get_object(ticket_number)
        serializer = models.MenuSerializer(menu)
        return Response(serializer.data)
    def put(self, request, ticket_number, format=None):
        menu = self.get_object(ticket_number)
        menu.foods.set(request.data['foods'])
        menu.drinks.set(request.data['drinks'])
        serializer = models.MenuSerializer(menu, data=request.data)
        if serializer.is_valid():
            return Response(serializer.data)
        print(serializer.errors)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class DrinkDetail(APIView):
    def get_object(self, pk):
        try:
            return models.Drink.objects.get(pk=pk)
        except models.Drink.DoesNotExist:
            raise Http404
    def get(self, request, pk, format=None):
        drink = self.get_object(pk)
        serializer = models.DrinkSerializer(drink)
        return Response(serializer.data)
    def put(self, request, pk, format=None):
        drink = self.get_object(pk)
        drinkSerializer = models.DrinkSerializer(drink, data=request.data)
        if drinkSerializer.is_valid():
            drinkSerializer.save()
            return Response(drinkSerializer.data)
        print(drinkSerializer.errors)
        print(drinkSerializer.data['category'])
        return Response(drinkSerializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

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