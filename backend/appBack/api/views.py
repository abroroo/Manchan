from django.shortcuts import render, redirect
from django.http import JsonResponse, Http404
from . import models
from django.core import serializers
import random, json
from django.forms.models import model_to_dict
from rest_framework.decorators import api_view
from rest_framework import generics, status
from rest_framework.views import APIView
from rest_framework.response import Response

from fpdf import FPDF
from datetime import datetime

font_path = r"D:\\Github\\Manchan\backend\\appBack\\api\\NanumGothic.ttf"

event_types = (
    ('wedding', '가족 개인행사'),
    ('business', '기업 이벤트'),
    ('public', '사회 단체행사'),
    ('festival', '기관, 축제등'),
    ('birthday', '스몰웨딩, 야외결혼'),
    ('steak', '스테이크 행사'),
    ('fingerFood', '핑거푸드'),
    ('other', '키타 행사')
)

event_places = (
    ('실내', '실내'),
    ('야외', '야외'),
    ('체육관', '체육관'),
    ('연회장', '연회장'),
    ('호텔', '호텔'),
    ('미정', '미정'),
    ('other', '기타')
)


@api_view(['GET'])
def api(request):
    return Response({"message": "Welcome to the API"})


class CustomerViewAPIView(generics.RetrieveAPIView):
    queryset = models.Customer.objects.all()
    serializer_class = models.CustomerSerializer
    lookup_field = 'ticket_number'


class CustomerUpdateAPIView(generics.UpdateAPIView):
    queryset = models.Customer.objects.all()
    serializer_class = models.CustomerSerializer
    lookup_field = 'ticket_number'

    def perform_update(self, serializer):
        instance = serializer.save()

class PDF(FPDF):
    def header(self):
        self.add_font('nanumgothic', '', font_path, uni=True)
        self.set_font('nanumgothic', '', 15)
        page_width = self.w
        header_cell_width = 50
        x = (page_width - header_cell_width) / 2
        self.set_xy(x, 10)
        self.cell(header_cell_width, 10, '푸드컴 확인서', 1, 0, 'C')
        self.ln(10)

@api_view(['GET'])
def generatePDF(request, ticket_number):
    data = models.Customer.objects.get(ticket_number=ticket_number)
    
    pdf = PDF()
    pdf.alias_nb_pages()
    pdf.add_page()
    pdf.set_font('nanumgothic', '', 20)

    line_spacing = 5

    pdf.set_draw_color(0, 0, 0)
    pdf.rect(10, 10, pdf.w - 20, pdf.h - 20) 

    border_height = pdf.h - 100
    border_width = pdf.w - 40
    total_data_height = 12 * 12  

    y = (border_height - total_data_height) / 2 + 10

    pdf.set_xy(20, y)

    tool_data = ", ".join(k.name for k in data.tool.all())

    pdf.multi_cell(border_width, 10,
                                      f"고객 이름: {data.name}\n\n"
                                      f"고객 전화 번호: {data.phone_number}\n\n"
                                      f"이벤트 유형: {event_types[int(data.event_type)-1][1]}\n\n"
                                      f"행사 장소: {event_places[int(data.event_place)-1][1]}\n\n"
                                      f"개최 날짜: {data.event_date}\n\n"
                                      f"주소: {data.address}\n\n"
                                      f"고객 등록 날짜: {data.date_registered}\n\n"
                                      f"티켓 번호: {data.ticket_number}\n\n"
                                      f"추가: {tool_data}",
                   align='C')


    pdf_file = f"../../documents/{data.name}.pdf"
    pdf.output(pdf_file, 'F')
    return Response({"message" : f"{ticket_number}.pdf is created in the documents folder"})

# class MenuDetail(APIView):
#     def get_object(self, ticket_number):
#         try:
#             customer = models.Customer.objects.get(ticket_number=ticket_number)
#             return models.Menu.objects.get(customer=customer)
#         except models.Menu.DoesNotExist:
#             raise Http404
        
#     def get(self, request, ticket_number, format=None):
#         menu = self.get_object(ticket_number)
#         serializer = models.MenuSerializer(menu)
#         mydata = serializer.data

#         custom_menu_index = mydata['custom_menu']
#         custom_menu = []
#         for k in custom_menu_index:
#             food_object = models.Food.objects.get(id=k)
#             serialized_food_object = models.FoodSerializer(food_object)
#             custom_menu.append(serialized_food_object.data)
        
#         mydata['custom_menu'] = custom_menu

#         food_set_index = mydata['food_set']
#         food_set_object = models.Set.objects.get(id=food_set_index)
#         serialized_food_set = models.SetSerializer(food_set_object)
#         mydata['food_set'] = serialized_food_set.data

#         return Response(mydata)
#     def put(self, request, ticket_number, format=None):
#         customer = models.Customer.objects.get(ticket_number=ticket_number)
#         menu = models.Menu.objects.get(customer=customer)
#         serializer = models.MenuSerializer(menu, data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data)
#         print(serializer.errors)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def new_customer(request):
    all_customers = models.Customer.objects.values()
    all_tickets = []

    for k in all_customers:
        all_tickets.append(k['ticket_number'])

    while True:
        ticket_number = random.randint(1, 100000000)
        if ticket_number not in all_tickets:
            models.Customer.objects.create(name=request.GET.get('name'), address=request.GET.get('address'), \
                                        phone_number=request.GET.get('phone_number'), ticket_number=ticket_number)
        break
    return Response({'ticket_number' : ticket_number})