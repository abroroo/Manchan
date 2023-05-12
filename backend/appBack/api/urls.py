from django.urls import path
from . import views

urlpatterns = [
    path('api/', views.api, name='api'),
    path('api/check_date/', views.check_date, name='check_date'),
    path('api/get_menu/', views.get_menu, name='get_menu'),
    path('api/submit_menu', views.UpdateMenuAPIView.as_view(), name='submit_menu'),
    path('api/new_customer', views.CustomerCreateAPIView.as_view(), name='new_customer'),
    path('api/<int:ticket_number>', views.CustomerViewAPIView.as_view()),
    path('api/check_dateapi/<int:ticket_number>', views.CheckDateAPIView.as_view())
]