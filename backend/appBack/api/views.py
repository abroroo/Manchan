from django.shortcuts import render, redirect
from django.http import JsonResponse, Http404
from . import models
from django.core import serializers
import random, json
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

class FoodListAPIView(generics.ListAPIView):
    queryset = models.Food.objects.all()
    serializer_class = models.FoodSerializer

class SetListAPIView(generics.ListAPIView):
    queryset = models.Set.objects.all()
    serializer_class = models.SetSerializer

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
        mydata = serializer.data

        custom_menu_index = mydata['custom_menu']
        custom_menu = []
        for k in custom_menu_index:
            food_object = models.Food.objects.get(id=k)
            serialized_food_object = models.FoodSerializer(food_object)
            custom_menu.append(serialized_food_object.data)
        
        mydata['custom_menu'] = custom_menu

        food_set_index = mydata['food_set']
        food_set_object = models.Set.objects.get(id=food_set_index)
        serialized_food_set = models.SetSerializer(food_set_object)
        mydata['food_set'] = serialized_food_set.data

        return Response(mydata)
    def put(self, request, ticket_number, format=None):
        customer = models.Customer.objects.get(ticket_number=ticket_number)
        menu = models.Menu.objects.get(customer=customer)
        serializer = models.MenuSerializer(menu, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        print(serializer.errors)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


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