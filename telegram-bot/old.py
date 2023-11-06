from tabulate import tabulate

# Your translated data
data = [
    {
        "티켓 번호": 64362747,
        "이름": "Petercha",
        "주소": None
    },
    {
        "티켓 번호": 64041565,
        "이름": None,
        "주소": None
    },
    {
        "티켓 번호": 20358171,
        "이름": None,
        "주소": None
    },
    {
        "티켓 번호": 74699936,
        "이름": None,
        "주소": None
    },
    {
        "티켓 번호": 67580228,
        "이름": None,
        "주소": None
    },
    {
        "티켓 번호": 64285570,
        "이름": None,
        "주소": None
    },
    {
        "티켓 번호": 24898858,
        "이름": "Abror",
        "주소": None
    },
    {
        "티켓 번호": 46780017,
        "이름": None,
        "주소": None
    },
    {
        "티켓 번호": 60224049,
        "이름": None,
        "주소": None
    },
    {
        "티켓 번호": 72729147,
        "이름": None,
        "주소": None
    }
]

# Convert data to a list of lists for tabulation
table_data = []
headers = data[0].keys()
for entry in data:
    table_data.append([entry[key] for key in headers])

# Format the data into a table
table = tabulate(table_data, headers, tablefmt="pretty")

# Adjust spacing for a cooler look
table = table.replace("티켓 번호", "\033[94m티켓 번호\033[0m")  # Blue color
table = table.replace("이름", "\033[92m이름\033[0m")  # Green color
table = table.replace("주소", "\033[91m주소\033[0m")  # Red color

# Add the title in Korean, make it big, and align headers
korean_title = "\033[1m" + "   최신 고객   " + "\033[0m"  # Bold
table = korean_title + table

# Print the formatted table
print(type(table))
