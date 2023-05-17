from django.urls import path
from . import views

urlpatterns = [
    path('api/', views.api, name='api'),
    path('api/check_date/', views.check_date, name='check_date'),
    path('api/get_menu/<int:ticket_number>', views.get_menu, name='get_menu'),
    path('api/submit_menu', views.UpdateMenuAPIView.as_view(), name='submit_menu'),
    path('api/new_customer', views.CustomerCreateAPIView.as_view(), name='new_customer'),
    path('api/customer_detail/<int:ticket_number>', views.CustomerViewAPIView.as_view()),
    path('api/menu_detail/<int:ticket_number>', views.MenuDetail.as_view()),
    path('api/drink_detail/<int:pk>', views.DrinkDetail.as_view())
]