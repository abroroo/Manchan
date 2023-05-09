import requests, json
from datetime import datetime
date = datetime(2023, 5, 24, 12, 23, 5)
ticket_number = 321654987

#response = requests.get(f"http://127.0.0.1:8000/api/check_date?datetime={date}&ticket_number={ticket_number}")

response = requests.get(f"http://127.0.0.1:8000/api/choose_menu?ticket_number={ticket_number}")

print(response.json())