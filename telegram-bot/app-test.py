import os, time, telebot, threading, requests, json, asyncio
from telebot import types
from tabulate import tabulate
from html import escape

BOT_TOKEN = '6287351242:AAGsOJB1PCQabhUpDG9yTwuqk9CxrCxRdUg'
bot = telebot.TeleBot(BOT_TOKEN)
owner_chat_id = '958063934'
directory_path = r"d:\\Github\\manchan\\telegram-bot\\docs\\"
media_path = r"d:\\Github\\manchan\\telegram-bot\\media\\"

categories = (
    ('wedding', '가족 개인행사'),
    ('business', '기업 이벤트'),
    ('public', '사회 단체행사'),
    ('festival', '기관, 축제등'),
    ('birthday', '스몰웨딩, 야외결혼'),
    ('steak', '스테이크 행사'),
    ('fingerFood', '핑거푸드'),
    ('other', '키타 행사')
)
counters = [0, 0, 0, 0, 0, 0, 0, 0]

if os.path.exists(media_path) and os.path.isdir(media_path):
    for category, category_description in categories:
        category_folder_path = os.path.join(media_path, category)
        if not os.path.exists(category_folder_path):
            os.makedirs(category_folder_path)

        category_files = os.listdir(category_folder_path)
        photo_numbers = []

        for filename in category_files:
            if filename.startswith('photo_') and filename.endswith('.jpg'):
                try:
                    number = int(filename.split('_')[1].split('.')[0])
                    photo_numbers.append(number)
                except ValueError:
                    pass

        if photo_numbers:
            category_index = categories.index((category, category_description))
            counters[category_index] = max(photo_numbers)

        for filename in category_files:
            if not filename.startswith('photo_') or not filename.endswith('.jpg'):
                category_index = categories.index((category, category_description))
                new_filename = f'photo_{counters[category_index]}.jpg'
                counters[category_index] += 1
                os.rename(os.path.join(category_folder_path, filename), os.path.join(category_folder_path, new_filename))

@bot.message_handler(commands=['start'])
def send_welcome(message):
    markup = types.ReplyKeyboardMarkup(resize_keyboard=True, one_time_keyboard=True)
    item_upload_photo = types.KeyboardButton("사진 업로드")
    item_get_pdf = types.KeyboardButton("고객 PDF 받기")
    item_latest_events = types.KeyboardButton("최신 고객들(10)")
    markup.add(item_upload_photo, item_get_pdf, item_latest_events)
    bot.send_message(message.chat.id, "환영합니다! 옵션을 선택하세요:", reply_markup=markup)

@bot.message_handler(func=lambda message: message.text == "사진 업로드")
def upload_photo(message):
    markup = types.ReplyKeyboardMarkup(resize_keyboard=True, one_time_keyboard=True)

    wedding = types.KeyboardButton("가족 개인행사")
    business = types.KeyboardButton("기업 이벤트")
    public = types.KeyboardButton("사회 단체행사")
    festival = types.KeyboardButton("기관, 축제등")
    birthday = types.KeyboardButton("스몰웨딩, 야외결혼")
    steak = types.KeyboardButton("스테이크 행사")
    fingerFood = types.KeyboardButton("핑거푸드")
    other = types.KeyboardButton("키타 행사")
    markup.add(wedding, business, public, festival, birthday, steak, fingerFood, other)

    bot.send_message(message.chat.id, "카테고리를 선택하세요:", reply_markup=markup)
    bot.register_next_step_handler(message, handle_category_selection)

def handle_category_selection(message):
    markup = types.ReplyKeyboardMarkup(resize_keyboard=True, one_time_keyboard=True)
    item_upload_photo = types.KeyboardButton("사진 업로드")
    item_get_pdf = types.KeyboardButton("고객 PDF 받기")
    item_latest_events = types.KeyboardButton("최신 고객들(10)")
    markup.add(item_upload_photo, item_get_pdf, item_latest_events)
    category = message.text
    bot.send_message(message.chat.id, f"{category}을(를) 선택하셨습니다. 지금 사진을 보내주세요.", reply_markup=markup)
    bot.register_next_step_handler(message, lambda message: handle_photo(message, category))

@bot.message_handler(content_types=['photo'])
def handle_photo(message, category='other'):
    try:
        if category == 'other':
            english_category = 'other'
            category_index = categories.index(('other', '키타 행사'))
        else:
            english_category = next(cat[0] for cat in categories if cat[1] == category)
            category_index = [cat[0] for cat in categories].index(english_category)

        counters[category_index] += 1
        category_folder_path = os.path.join(media_path, english_category)

        if not os.path.exists(category_folder_path):
            os.makedirs(category_folder_path)

        file_extension = 'jpg'
        downloaded_file_path = os.path.join(category_folder_path, f"photo_{counters[category_index]}.{file_extension}")

        file_id = message.photo[-1].file_id
        file_info = bot.get_file(file_id)
        file_path = file_info.file_path

        downloaded_file = bot.download_file(file_path)
        with open(downloaded_file_path, 'wb') as file:
            file.write(downloaded_file)

        print(f"Received and saved a photo in the {english_category} category: {downloaded_file_path}")

    except Exception as e:
        print(f"Error handling photo: {e}")


@bot.message_handler(content_types=['document'])
def handle_document(message):
    try:
        if message.document.mime_type == 'application/pdf':
            file_info = bot.get_file(message.document.file_id)
            file_path = file_info.file_path
            downloaded_file_path = os.path.join(directory_path, message.document.file_name)

            downloaded_file = bot.download_file(file_path)
            with open(downloaded_file_path, 'wb') as file:
                file.write(downloaded_file)

            with open(downloaded_file_path, 'rb') as file:
                bot.send_document(owner_chat_id, file)

            os.remove(downloaded_file_path)

    except Exception as e:
        print(f"Error handling document: {e}")


@bot.message_handler(func=lambda message: message.text == "고객 PDF 받기")
def get_pdf(message):
    bot.send_message(message.chat.id, "티켓번호를 입력해주세요:")
    bot.register_next_step_handler(message, generate_pdf)

def generate_pdf(message):
    try:
        ticket_number = message.text
        requests.get(f"http://localhost:8000/api/generatepdf/{ticket_number}")
    except Exception as e:
        bot.send_message(message.chat.id, f"Error: {e}")

# Handle "Latest Events" button
@bot.message_handler(func=lambda message: message.text == "최신 고객들(10)")
def latest_events(message):
    try:
        data = requests.get("http://localhost:8000/api/latestcustomers").json()

# Replace None values with "N/A"
        for entry in data:
            for key in entry:
                if entry[key] is None:
                    entry[key] = "N/A"

        # Convert data to a list of lists for tabulation
        table_data = []
        headers = list(data[0].keys())
        for entry in data:
            table_data.append([entry[key] for key in headers])

        # Create a message with backticks for ticket numbers\
        message_content = ""
        message_content += f"{'티켓 번호':<13}{'이름':<13}{'주소':<13}\n"
        message_content += "-" * 40 + "\n"
        for row in table_data:
            ticket_number = f"`{row[0]}`"
            message_content += f"{ticket_number:<13}{row[1]:<13}{row[2]:<13}\n"
        bot.send_message(message.chat.id, message_content, parse_mode="Markdown")
    except Exception as e:
        bot.send_message(message.chat.id, f"Error: {e}")

def monitor_directory():
    last_modification_time = time.time()

    while True:
        current_modification_time = os.path.getmtime(directory_path)

        if current_modification_time > last_modification_time:
            for file_name in os.listdir(directory_path):
                file_path = os.path.join(directory_path, file_name)
                if file_path.endswith('.pdf') and os.path.isfile(file_path):
                    with open(file_path, 'rb') as file:
                        bot.send_document(owner_chat_id, file)
                    print(f"Sent PDF: {file_name}")
                    os.remove(file_path)

            last_modification_time = current_modification_time

        time.sleep(10)

async def run_polling():
    bot.skip_pending_updates()
    bot.polling()

if __name__ == '__main__':
    try:
        # monitoring_thread = threading.Thread(target=monitor_directory)
        # monitoring_thread.start()

        asyncio.run(run_polling())
    except Exception as e:
        print(f"Error: {e}")



#ASYNC implementation
# import asyncio
# import aiowatch

# # Define the directory you want to monitor
# directory_to_monitor = '/path/to/your/directory'

# async def monitor_directory():
#     async with aiowatch.Watcher() as watcher:
#         watcher.schedule(monitor_callback, directory_to_monitor, recursive=True)
#         await watcher.start()

# async def monitor_callback(event):
#     print(f'Event type: {event.event_type}, Path: {event.src_path}')

# if __name__ == '__main__':
#     asyncio.run(monitor_directory())