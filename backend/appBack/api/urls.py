from django.urls import path
from . import views

urlpatterns = [
    path('api/', views.api, name='api'),
    path('api/check_date/', views.check_date, name='check_date'),
    path('api/get_menu/<int:ticket_number>', views.MenuDetail.as_view()),
    path('api/new_customer', views.CustomerCreateAPIView.as_view(), name='new_customer'),
    path('api/customer_detail/<int:ticket_number>', views.CustomerViewAPIView.as_view()),
    path('api/get_foods/', views.FoodListAPIView.as_view()),
    path('api/get_sets/', views.SetListAPIView.as_view())
]