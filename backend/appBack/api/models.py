from django.db import models
from django.forms.models import model_to_dict
import json
from django import forms
from rest_framework import serializers
from multiselectfield import MultiSelectField

event_types = (
    ('가족 개인행사', '가족 개인행사'),
    ('기업 이벤트', '기업 이벤트'),
    ('사회 단체행사', '사회 단체행사'),
    ('기관, 축제등', '기관, 축제등'),
    ('스몰웨딩, 야외결혼', '스몰웨딩, 야외결혼'),
    ('스테이크 행사', '스테이크 행사'),
    ('핑거푸드', '핑거푸드'),
    ('키타 행사', '키타 행사')
)

event_places = (
    ('실내', '실내'),
    ('야외', '야외'),
    ('체육관', '체육관'),
    ('연회장', '연회장'),
    ('호텔', '호텔'),
    ('미정', '미정'),
    ('기타', '기타')
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

class Tool(models.Model):
    name = models.CharField(max_length=200, blank=True, null=True)
    def __str__(self):
        return self.name

class Customer(models.Model):
    name = models.CharField(max_length=200, blank=True, null=True)
    phone_number = models.IntegerField(blank=True, null=True)

    event_type = models.CharField(max_length=200, choices=event_types, blank=True, null=True)
    event_place = models.CharField(max_length=200, choices=event_places, blank=True, null=True)
    people_count = models.IntegerField(blank=True, null=True)
    event_duration = models.CharField(max_length=200, choices=event_durations, blank=True, null=True)
    event_date = models.DateTimeField(blank=True, null=True)
    address = models.CharField(max_length=200, blank=True, null=True)
    meal_cost = models.IntegerField(blank=True, null=True)
    tool = models.ManyToManyField(Tool, blank=True, null=True)

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