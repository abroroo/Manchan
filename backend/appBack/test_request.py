import requests, json
from datetime import datetime
date = datetime(2023, 5, 25, 6, 25, 0)
print(date)
name = "Last profile"
phone_number = 258852369
address = "Uzbekistan Tashkent"
ticket_number = 96064993
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

apidata = {'name': name, 'phone_number': phone_number, 'address': address}

response = requests.post(endpoint, json=apidata)


data = {'menu': {'id': 6, 
                  'foods': [{'name': 'Rice', 'price': 5000, 'category': [{'name': 'light'}]}], 
                  'drinks': [{'name': 'coke', 'price': 2000, 'category': [{'name': 'fizzy'}]}], 
                  'customer': {'name': 'Mynewprofile', 'address': 'Uzbekistan Tashkent', 'phone_number': 258852369, 'ticket_number': 29319475}, 
                  'table': True, 
                  'tent': False}, 
                  'errors': []}

#Menu Submit
#response = requests.put("http://127.0.0.1:8000/api/submit_menu", json = data)
print(response.json())