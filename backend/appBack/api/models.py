from django.db import models
from django.forms.models import model_to_dict
import json
from django import forms
from rest_framework import serializers
from multiselectfield import MultiSelectField

event_types = (
    ('1', '개인 행사'),
    ('2', '기업 행사'),
    ('3', '지역 행사'),
    ('4', '홍보 행사'),
    ('5', '강연/간담회'),
    ('6', '기타')
)

event_places = (
    ('1', '호텔'),
    ('2', '이벤트/컨벤션홀'),
    ('3', '주거 공간'),
    ('4', '사내 공간'),
    ('5', '기타 실내'),
    ('6', '기타 야외'),
    ('7', '미정'),
    ('8', '기타')
)

people_counts = (
    ('1', '30명 미만'),
    ('2', '50명 미만'),
    ('3', '100명 미만'),
    ('4', '200명 미만'),
    ('5', '300명 미만'),
    ('6', '400명 미만'),
    ('7', '기타')
)

event_durations = (
    ('1', '1시간'),
    ('2', '2시간'),
    ('3', '3시간'),
    ('4', '4시간'),
    ('5', '5시간'),
    ('6', '하루 이상'),
    ('7', '기타')
)

meal_costs = (
    ('1', '10.000 원'),
    ('2', '15.000 원'),
    ('3', '20.000 원'),
    ('4', '30.000 원'),
    ('5', '40.000 원'),
    ('6', '50.000 원'),
    ('7', '기타')
)

class Tool(models.Model):
    name = models.CharField(max_length=200, blank=True, null=True)
    def __str__(self):
        return self.name

class Customer(models.Model):
    name = models.CharField(max_length=200, blank=True, null=True)
    phone_number = models.IntegerField(blank=True, null=True)

    event_type = models.CharField(max_length=200, choices=event_types, blank=True, null=True)
    event_place = models.CharField(max_length=200, choices=event_places, blank=True, null=True)
    people_count = models.CharField(max_length=200, choices=people_counts, blank=True, null=True)
    event_duration = models.CharField(max_length=200, choices=event_durations, blank=True, null=True)
    event_date = models.DateTimeField(blank=True, null=True)
    address = models.CharField(max_length=200, blank=True, null=True)
    meal_cost = models.CharField(max_length=200, choices=meal_costs, blank=True, null=True)
    tool = models.ManyToManyField(Tool, blank=True)

    date_registered = models.DateTimeField(auto_now_add=True)
    ticket_number = models.IntegerField(blank=True, null=True)

    def __str__(self):
        return str(self.ticket_number)

class CustomerSerializer(serializers.ModelSerializer):
    tool = serializers.PrimaryKeyRelatedField(queryset=Tool.objects.all(), many=True)
    class Meta:
        model = Customer
        fields = '__all__'

# class FoodCategory(models.Model):
#     name = models.CharField(max_length=200, unique=True)
#     def __str__(self):
#         return self.name

# class Food(models.Model):
#     name = models.CharField(max_length=200)
#     description = models.CharField(max_length=200, blank=True, null=True)
#     price = models.IntegerField(default=5000)
#     image_location = models.CharField(max_length=200, blank=True, null=True, default='images/food_images/')
#     category = models.ForeignKey(FoodCategory, on_delete=models.CASCADE, blank=True, null=True)
#     def __str__(self):
#         return self.name

# class Set(models.Model):
#     name = models.CharField(max_length=200)
#     price = models.IntegerField()
#     foods = models.ManyToManyField(Food)
#     def __str__(self):
#         return self.name
    
# class Menu(models.Model):
#     custom_menu = models.ManyToManyField(Food)
#     table = models.BooleanField()
#     tent = models.BooleanField()
#     customer = models.ForeignKey(Customer, on_delete=models.CASCADE, blank=True, null=True)
#     is_set = models.BooleanField(default=False)
#     food_set = models.ForeignKey(Set, on_delete=models.CASCADE, blank=True, null=True)

# class FoodSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Food
#         fields = "__all__"

# class MenuSerializer(serializers.ModelSerializer):
#     custom_menu = serializers.PrimaryKeyRelatedField(queryset=Food.objects.all(), many=True)
#     customer = CustomerSerializer(read_only=True)
#     class Meta:
#         model = Menu
#         fields = "__all__"

# class SetSerializer(serializers.ModelSerializer):
#     foods = FoodSerializer(many=True)
#     class Meta:
#         model = Set
#         fields = "__all__"

# class Date(models.Model):
#     menu = models.ForeignKey(Menu, on_delete=models.CASCADE, blank=True, null=True)
#     event_date = models.DateTimeField()