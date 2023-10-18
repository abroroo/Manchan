import requests, json
from datetime import datetime
date = datetime(2023, 5, 25, 6, 25, 0)
print(date)
name = "Testing profileadsklfjaslfkjk"
phone_number = 258852369
address = "Uzbekistan Tashkent"
ticket_number = 91248582
#Create a new customer with a ticket number request
#response = requests.get(f"http://127.0.0.1:8000/api/new_customer?name={name}&phone_number={phone_number}&address={address}")

#request = f"http://127.0.0.1:8000/api/check_date?datetime={date}&ticket_number={ticket_number}"
#print(request)
#Date checking request
#response = requests.get(f"http://127.0.0.1:8000/api/check_date?datetime={date}&ticket_number={ticket_number}")

#All menu Request
#response = requests.get(f"http://127.0.0.1:8000/api/get_menu_all?ticket_number={ticket_number}")

#Menu request
#response = requests.get(f"http://127.0.0.1:8000/api/get_menu?ticket_number={ticket_number}")

#API Create customer

endpoint = "http://127.0.0.1:8000/api/new_customer"

apidata = {'name': name, 'phone_number': phone_number}

#response = requests.post(endpoint, json=apidata)


data = {
    "id": 1,
    "tool": [
        2, 6
    ],
    "event_type": "스테이크 행사",
    "name": "Ilhom",
    "people_count": 300,
    "meal_cost": 30000,
    "ticket_number": 243242313
}

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

event_durations = (
    ('1', '1시간'),
    ('2', '2시간'),
    ('3', '3시간'),
    ('4', '4시간'),
    ('5', '5시간'),
    ('6', '하루 이상'),
    ('7', '기타')
)

tools = (
    ('1', '의자'),
    ('2', '테이블'),
    ('3', '텐트'),
    ('4', '음악'),
    ('5', '행사 액세서리'),
    ('6', '기타')
)

tool_data = [
        2,
        4
    ]

#result = ", ".join(str(tools[int(k)-1][1]) for k in tool_data)

#print(result)
response = requests.put(f"http://127.0.0.1:8000/api/customer_update/243242313", json=data)
print(response.json)