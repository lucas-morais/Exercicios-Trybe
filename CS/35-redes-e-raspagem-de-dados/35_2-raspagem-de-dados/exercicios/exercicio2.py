import requests

URL = "https://api.github.com/users"

response = requests.get(URL)

users = response.json()

for user in users:
    print(user['login'], user['html_url'])
