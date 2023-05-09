from django.urls import path
from . import views

urlpatterns = [
    path('api/', views.api, name='api'),
    path('api/check_date/', views.check_date, name='check_date'),
    path('api/choose_menu/', views.choose_menu, name='choose_menu')
]