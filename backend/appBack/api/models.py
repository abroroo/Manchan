from django.db import models
#from multiselectfield import MultiSelectField
from django.forms.models import model_to_dict
import json
from django import forms
from rest_framework import serializers
from drf_writable_nested.serializers import WritableNestedModelSerializer

class Customer(models.Model):
    name = models.CharField(max_length=200)
    address = models.CharField(max_length=200, blank=True, null=True)
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
    name = models.CharField(max_length=200, unique=True)
    def __str__(self):
        return self.name

class Food(models.Model):
    name = models.CharField(max_length=200)
    description = models.CharField(max_length=200, blank=True, null=True)
    price = models.IntegerField(default=5000)
    image_location = models.CharField(max_length=200, blank=True, null=True, default='images/food_images/')
    category = models.ForeignKey(FoodCategory, on_delete=models.CASCADE, blank=True, null=True)
    def __str__(self):
        return self.name

class Menu(models.Model):
    foods = models.ManyToManyField(Food)
    table = models.BooleanField()
    tent = models.BooleanField()
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE, blank=True, null=True)

class Set(models.Model):
    name = models.CharField(max_length=200)
    price = models.IntegerField()
    foods = models.ManyToManyField(Food)
    def __str__(self):
        return self.name
    


# class FoodCategorySerializer(serializers.ModelSerializer):
#     class Meta:
#         model = FoodCategory
#         fields = "__all__"

class FoodSerializer(serializers.ModelSerializer):
    class Meta:
        model = Food
        fields = ['name', 'description', 'price', 'image_location', 'category']

class MenuSerializer(serializers.ModelSerializer):
    foods = FoodSerializer(many=True)
    customer = CustomerSerializer()
    class Meta:
        model = Menu
        fields = "__all__"

class SetSerializer(serializers.ModelSerializer):
    foods = FoodSerializer(many=True)
    class Meta:
        model = Set
        fields = ['name', 'price', 'foods']

class Date(models.Model):
    menu = models.ManyToManyField(Menu)
    event_date = models.DateTimeField()

class DateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Date
        fields = ['event_date']