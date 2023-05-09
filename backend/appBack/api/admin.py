from django.contrib import admin
from . import models
# Register your models here.

class CustomerAdmin(admin.ModelAdmin):
    list_display = ['ticket_number', 'name', 'phone_number']

class MenuAdmin(admin.ModelAdmin):
    list_display = ['customer']

class DateAdmin(admin.ModelAdmin):
    list_display = ['event_date','customer']

admin.site.register(models.Customer, CustomerAdmin)
admin.site.register(models.Menu, MenuAdmin)
admin.site.register(models.Date, DateAdmin)