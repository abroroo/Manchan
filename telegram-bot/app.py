import os
import time
import telebot

# Replace 'YOUR_BOT_TOKEN' with your actual Telegram bot token
BOT_TOKEN = '6287351242:AAGsOJB1PCQabhUpDG9yTwuqk9CxrCxRdUg'

# Initialize the bot
bot = telebot.TeleBot(BOT_TOKEN)

# Specify the owner's chat ID
# my chat id = 958063934
# manchan boss chat id = 6424336684
owner_chat_id = '958063934'

# Specify the directory path to monitor
directory_path = r"d:\\Github\\manchan\\telegram-bot\\docs\\"
media_path = r"d:\\Github\\manchan\\telegram-bot\\media\\"

photo_counter = 1

@bot.message_handler(content_types=['photo'])
def handle_photo(message):
    try:
        global photo_counter

        # Determine the file extension based on the MIME type
        file_extension = 'jpg'  # Default to JPEG

        # Save the received photo with a sequential number as the filename
        downloaded_file_path = os.path.join(media_path, f"photo_{photo_counter}.{file_extension}")

        file_id = message.photo[-1].file_id
        file_info = bot.get_file(file_id)
        file_path = file_info.file_path

        downloaded_file = bot.download_file(file_path)
        with open(downloaded_file_path, 'wb') as file:
            file.write(downloaded_file)

        print(f"Received and saved a photo: {downloaded_file_path}")

        # Increment the photo counter
        photo_counter += 1

    except Exception as e:
        print(f"Error handling photo: {e}")

@bot.message_handler(content_types=['document'])
def handle_document(message):
    try:
        # Check if the received file is a PDF
        if message.document.mime_type == 'application/pdf':
            file_info = bot.get_file(message.document.file_id)
            file_path = file_info.file_path
            downloaded_file_path = os.path.join(directory_path, message.document.file_name)

            # Download the PDF file
            downloaded_file = bot.download_file(file_path)
            with open(downloaded_file_path, 'wb') as file:
                file.write(downloaded_file)

            # Send the PDF to the owner
            with open(downloaded_file_path, 'rb') as file:
                bot.send_document(owner_chat_id, file)

            # Remove the downloaded file
            os.remove(downloaded_file_path)

    except Exception as e:
        print(f"Error handling document: {e}")

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

if __name__ == '__main__':
    try:
        # Start monitoring the directory in a separate thread
        import threading
        monitoring_thread = threading.Thread(target=monitor_directory)
        monitoring_thread.start()

        # Start the bot
        bot.polling()

    except Exception as e:
        print(f"Error: {e}")
