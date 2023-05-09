from django.contrib import admin
from . import models
# Register your models here.

class CustomerAdmin(admin.ModelAdmin):
    list_display = ['ticket_number', 'name', 'phone_number']

class MenuAdmin(admin.ModelAdmin):
    list_display = ['customer', 'foods', 'drinks']

class DateAdmin(admin.ModelAdmin):
    list_display = ['event_date','customer']

class FoodAdmin(admin.ModelAdmin):
    list_display = ['name', 'price', 'category']

class DrinkAdmin(admin.ModelAdmin):
    list_display = ['name', 'price', 'category']

admin.site.register(models.Customer, CustomerAdmin)
admin.site.register(models.Menu, MenuAdmin)
admin.site.register(models.Date, DateAdmin)
admin.site.register(models.Food, FoodAdmin)
admin.site.register(models.Drink, DrinkAdmin)