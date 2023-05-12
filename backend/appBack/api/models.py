from django.db import models
#from multiselectfield import MultiSelectField
from django.forms.models import model_to_dict
import json
from django import forms
from rest_framework import serializers

class Customer(models.Model):
    name = models.CharField(max_length=200)
    address = models.CharField(max_length=200)
    phone_number = models.IntegerField()
    #date_registered = models.DateTimeField(auto_now_add=True, default=0)
    ticket_number = models.IntegerField(blank=True, null=True)

    def __str__(self):
        return self.name

class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = ['name', 'address', 'phone_number', 'ticket_number']

class FoodCategory(models.Model):
    name = models.CharField(max_length=200)

    def __str__(self):
        return self.name

class DrinkCategory(models.Model):
    name = models.CharField(max_length=200)

    def __str__(self):
        return self.name

class Food(models.Model):
    name = models.CharField(max_length=200)
    price = models.IntegerField()
    category = models.ManyToManyField(FoodCategory)

    def __str__(self):
        return self.name

class Drink(models.Model):
    name = models.CharField(max_length=200)
    price = models.IntegerField()
    category = models.ManyToManyField(DrinkCategory)
    
    def __str__(self):
        return self.name

class Menu(models.Model):
    foods = models.ManyToManyField(Food)
    drinks = models.ManyToManyField(Drink)
    table = models.BooleanField()
    tent = models.BooleanField()
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE, blank=True, null=True)

class FoodCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = FoodCategory
        fields = ['name']

class DrinkCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = DrinkCategory
        fields = ['name']

class FoodSerializer(serializers.ModelSerializer):
    category = FoodCategorySerializer(many=True)
    class Meta:
        model = Food
        fields = ['name', 'price', 'category']

class DrinkSerializer(serializers.ModelSerializer):
    category = DrinkCategorySerializer(many=True)
    class Meta:
        model = Drink
        fields = ['name', 'price', 'category']

class MenuSerializer(serializers.ModelSerializer):
    foods = FoodSerializer(many=True)
    drinks = DrinkSerializer(many=True)
    customer = CustomerSerializer()
    class Meta:
        model = Menu
        fields = "__all__"

class Date(models.Model):
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE, blank=True, null=True)
    menu = models.ManyToManyField(Menu)
    event_date = models.DateTimeField()

class DateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Date
        fields = ['event_date']