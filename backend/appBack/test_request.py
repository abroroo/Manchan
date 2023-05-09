import requests, json
from datetime import datetime
date = datetime(2023, 5, 3, 6, 25, 0)
name = "Alphaman"
phone_number = 258852369
address = "Uzbekistan Tashkent"
ticket_number = 32165488
#Create a new customer with a ticket number request
#response = requests.get(f"http://127.0.0.1:8000/api/new_customer?name={name}&phone_number={phone_number}&address={address}")

#Date checking request
#response = requests.get(f"http://127.0.0.1:8000/api/check_date?datetime={date}&ticket_number={ticket_number}")

#Menu Request
response = requests.get(f"http://127.0.0.1:8000/api/choose_menu?ticket_number={ticket_number}")

#Food Request
#response = requests.get(f"http://127.0.0.1:8000/api/choose_menu?ticket_number={ticket_number}")

print(response.json())