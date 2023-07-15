import os
import time, asyncio
from telegram import Bot
from telegram.error import TelegramError

BOT_TOKEN = '6287351242:AAGsOJB1PCQabhUpDG9yTwuqk9CxrCxRdUg'
bot = Bot(token=BOT_TOKEN)

#https://api.telegram.org/botYOUR_BOT_TOKEN/getUpdates  - To get the chatid

owner_chat_id = '958063934'
directory_path = '../documents/'

async def send_pdf_to_owner(file_path, chat_id):
    try:
        with open(file_path, 'rb') as file:
            await bot.send_document(chat_id=chat_id, document=file)
        return True
    except TelegramError as e:
        print(f"Failed to send PDF: {e}")
        return False

async def monitor_directory(directory_path, chat_id):
    last_modification_time = time.time()

    while True:
        current_modification_time = os.path.getmtime(directory_path)

        if current_modification_time > last_modification_time:
            for file_name in os.listdir(directory_path):
                file_path = os.path.join(directory_path, file_name)
                if file_path.endswith('.pdf') and os.path.isfile(file_path):
                    await send_pdf_to_owner(file_path, chat_id)
                    print(f"Sent PDF: {file_name}")
                    os.remove(file_path)

            last_modification_time = current_modification_time

        time.sleep(10)

async def main():
    await monitor_directory(directory_path, owner_chat_id)

if __name__ == '__main__':
    loop = asyncio.get_event_loop()
    loop.run_until_complete(main())
