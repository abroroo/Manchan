from django.db import models

# Create your models here.

class Food(models.IntegerChoices):
    rice = 0
    bulgogi = 1

class Drinks(models.IntegerChoices):
    coffee = 0
    tea = 1


class Customer(models.Model):
    name = models.CharField(max_length=200)
    address = models.CharField(max_length=200)
    phone_number = models.IntegerField()
    #date_registered = models.DateTimeField(auto_now_add=True, default=0)
    ticket_number = models.IntegerField()


class Menu(models.Model):
    foods = models.IntegerField(choices=Food.choices)
    drinks = models.IntegerField(choices=Drinks.choices)
    table = models.BooleanField()
    tent = models.BooleanField()
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE, blank=True, null=True)

class Date(models.Model):
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE, blank=True, null=True)
    menu = models.ManyToManyField(Menu)
    event_date = models.DateTimeField()
    