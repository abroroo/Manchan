import requests, json
from datetime import datetime
date = datetime(2023, 5, 25, 6, 25, 0)
print(date)
name = "Last profile"
phone_number = 258852369
address = "Uzbekistan Tashkent"
ticket_number = 95372671
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

#endpoint = "http://127.0.0.1:8000/api/new_customer"

#apidata = {'name': name, 'phone_number': phone_number, 'address': address}

#response = requests.post(endpoint, json=apidata)


data = {
        "id": 22,
        "foods": 
            {
            "id" : 6
}
        ,
        "drinks":
            [{
            }]
        ,
        "customer": {
            "name": "Ilhom",
            "address": "Jeonjusi Jeonbuk university",
            "phone_number": 1025654585,
            "ticket_number": 32165488
        },
        "table": True,
        "tent": True
}
#Menu Submit
response = requests.put(f"http://127.0.0.1:8000/api/menu_detail/32165488", json=data)
print(response.content)