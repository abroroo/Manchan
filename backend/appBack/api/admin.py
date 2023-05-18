from django.contrib import admin
from . import models
# Register your models here.

class CustomerAdmin(admin.ModelAdmin):
    list_display = ['ticket_number', 'name', 'phone_number']

class MenuAdmin(admin.ModelAdmin):
    list_display = ['customer']

class DateAdmin(admin.ModelAdmin):
    list_display = ['event_date']

class FoodAdmin(admin.ModelAdmin):
    list_display = ['name', 'category']

class FoodCategoryAdmin(admin.ModelAdmin):
    list_display = ['name']

class SetAdmin(admin.ModelAdmin):
    list_display = ['name', 'price']

admin.site.register(models.Customer, CustomerAdmin)
admin.site.register(models.Menu, MenuAdmin)
admin.site.register(models.Date, DateAdmin)
admin.site.register(models.Food, FoodAdmin)
admin.site.register(models.FoodCategory, FoodCategoryAdmin)
admin.site.register(models.Set, SetAdmin)