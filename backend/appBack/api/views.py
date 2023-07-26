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
    ('1', '개인 행사'),
    ('2', '기업 행사'),
    ('3', '지역 행사'),
    ('4', '홍보 행사'),
    ('5', '강연/간담회'),
    ('6', '기타')
)

event_places = (
    ('1', '호텔'),
    ('2', '이벤트/컨벤션홀'),
    ('3', '주거 공간'),
    ('4', '사내 공간'),
    ('5', '기타 실내'),
    ('6', '기타 야외'),
    ('7', '미정'),
    ('8', '기타')
)

people_counts = (
    ('1', '30명 미만'),
    ('2', '50명 미만'),
    ('3', '100명 미만'),
    ('4', '200명 미만'),
    ('5', '300명 미만'),
    ('6', '400명 미만'),
    ('7', '기타')
)

event_durations = (
    ('1', '1시간'),
    ('2', '2시간'),
    ('3', '3시간'),
    ('4', '4시간'),
    ('5', '5시간'),
    ('6', '하루 이상'),
    ('7', '기타')
)

meal_costs = (
    ('1', '10.000 원'),
    ('2', '15.000 원'),
    ('3', '20.000 원'),
    ('4', '30.000 원'),
    ('5', '40.000 원'),
    ('6', '50.000 원'),
    ('7', '기타')
)

tools = (
    ('1', '테이블'),
    ('2', '의자'),
    ('3', '텐트'),
    ('4', '음악'),
    ('5', '행사 액세서리'),
    ('6', '기타')
)


@api_view(['GET'])
def api(request):
    return Response({"message": "Welcome to the API"})

class CustomerCreateAPIView(generics.CreateAPIView):
    queryset = models.Customer.objects.all()
    serializer_class = models.CustomerSerializer
    def perform_create(self, serializer):
        all_customers = models.Customer.objects.values()
        all_tickets = []

        for k in all_customers:
            all_tickets.append(k['ticket_number'])

        while True:
            my_ticket_number = random.randint(1, 100000000)
            if my_ticket_number not in all_tickets:
                    serializer.save(ticket_number=my_ticket_number)
                    Response({'ticket_number': my_ticket_number})
            break

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

    pdf.set_draw_color(0, 0, 0)  # Set border color
    pdf.rect(10, 10, pdf.w - 20, pdf.h - 20)  # Create a rectangle for the border

    # Calculate the height of the border and the total height of the data fields
    border_height = pdf.h - 100
    border_width = pdf.w - 40
    total_data_height = 12 * 12  # 12 data fields multiplied by the cell height

    # Calculate the starting y-coordinate for the data fields to center them vertically
    y = (border_height - total_data_height) / 2 + 10

    # Add data to the PDF
    pdf.set_xy(20, y)  # Set the starting position for the data fields

    tool_data = ", ".join(k.name for k in data.tool.all())

    pdf.multi_cell(border_width, 10,
                                      f"고객 이름: {data.name}\n\n"
                                      f"고객 전화 번호: {data.phone_number}\n\n"
                                      f"이벤트 유형: {event_types[int(data.event_type)-1][1]}\n\n"
                                      f"행사 장소: {event_places[int(data.event_place)-1][1]}\n\n"
                                      f"인원 수: {people_counts[int(data.people_count)-1][1]}\n\n"
                                      f"이벤트 기간: {event_durations[int(data.event_duration)-1][1]}\n\n"
                                      f"개최 날짜: {data.event_date}\n\n"
                                      f"주소: {data.address}\n\n"
                                      f"식사 비용: {meal_costs[int(data.meal_cost)-1][1]}\n\n"
                                      f"고객 등록 날짜: {data.date_registered}\n\n"
                                      f"티켓 번호: {data.ticket_number}\n\n"
                                      f"추가: {tool_data}",
                   align='C')


    pdf_file = f"../../documents/{data.name}.pdf"
    pdf.output(pdf_file, 'F')
    return Response({"message" : f"{ticket_number}.pdf is created in the documents folder"})

# @api_view(['GET'])
# def check_date(request):
#     date_available = True
#     error = ""
#     try:
#         date_request = datetime.fromisoformat(request.GET.get('datetime'))
#         database_dates = models.Date.objects.all()
#         dates = []
#         hours = []
#         for k in database_dates:
#             day_database = datetime.strftime(k.event_date, '%Y-%m-%d')
#             hour_database = datetime.strftime(k.event_date, '%Y:%m:%d:%H:%M:%S')
#             dates.append(day_database)
#             hours.append(hour_database)

#         day_request = datetime.strftime(date_request, '%Y-%m-%d')
#         hour_request = datetime.strftime(date_request, '%Y:%m:%d:%H:%M:%S')

#         if (day_request in day_database):
#             date_available = False
#             error = "We have an event on that day!"

#         if (hour_request in hour_database):
#             date_available = False
#             error = "We already have an event with this specific time!"
#     except Exception as e:
#         date_available = False
#         error = str(e)
#     return Response({"date_available" : date_available, "error" : error})

# class FoodListAPIView(generics.ListAPIView):
#     queryset = models.Food.objects.all()
#     serializer_class = models.FoodSerializer

# class SetListAPIView(generics.ListAPIView):
#     queryset = models.Set.objects.all()
#     serializer_class = models.SetSerializer

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


#@api_view(['GET'])
# def new_customer(request):
#     all_customers = models.Customer.objects.values()
#     all_tickets = []

#     for k in all_customers:
#         all_tickets.append(k['ticket_number'])

#     while True:
#         ticket_number = random.randint(1, 100000000)
#         if ticket_number not in all_tickets:
#             models.Customer.objects.create(name=request.GET.get('name'), address=request.GET.get('address'), \
#                                         phone_number=request.GET.get('phone_number'), ticket_number=ticket_number)
#         break
#     return Response({'ticket_number' : ticket_number})