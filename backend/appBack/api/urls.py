from django.urls import path
from . import views

urlpatterns = [
    path('api/', views.api, name='api'),
    path('api/check_date/', views.check_date, name='check_date'),
    path('api/choose_menu/', views.get_menu, name='choose_menu'),
    path('api/new_customer/', views.get_ticket_number, name='get_ticket_number')
]