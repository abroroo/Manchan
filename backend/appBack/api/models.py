from django.db import models
from multiselectfield import MultiSelectField
from django.forms.models import model_to_dict
import json
from django import forms
# Create your models here.

food_category = ((1, 'Item title 2.1'),
               (2, 'Item title 2.2'),
               (3, 'Item title 2.3'),
               (4, 'Item title 2.4'),
               (5, 'Item title 2.5'))

drink_category = ((1, 'Item title 2.1'),
               (2, 'Item title 2.2'),
               (3, 'Item title 2.3'),
               (4, 'Item title 2.4'),
               (5, 'Item title 2.5'))


class Customer(models.Model):
    name = models.CharField(max_length=200)
    address = models.CharField(max_length=200)
    phone_number = models.IntegerField()
    #date_registered = models.DateTimeField(auto_now_add=True, default=0)
    ticket_number = models.IntegerField()

class Food(models.Model):
    name = models.CharField(max_length=200)
    price = models.IntegerField()
    category = MultiSelectField(choices=food_category, max_length=3)

class Drink(models.Model):
    name = models.CharField(max_length=200)
    price = models.IntegerField()
    category = MultiSelectField(choices=drink_category, max_length=3)

foods = []

for k in range(0, Food.objects.count()):
    #print(Food.objects.all()[k].name)
    data_food = Food.objects.all()[k]
    
    result_food = ((data_food, data_food.name))
    foods.append(result_food)
    
#print(foods)

drinks = []

for k in range(0, Drink.objects.count()):
    #print(Food.objects.all()[k].name)
    data_drink = Drink.objects.all()[k]
    
    result_drink = ((data_drink, data_drink.name))
    drinks.append(result_drink)
    

class Menu(models.Model):
    foods = MultiSelectField(choices=foods, max_length=200)
    drinks = MultiSelectField(choices=drinks, max_length=200, default=0)
    table = models.BooleanField()
    tent = models.BooleanField()
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE, blank=True, null=True)


class Date(models.Model):
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE, blank=True, null=True)
    menu = models.ManyToManyField(Menu)
    event_date = models.DateTimeField()
    
