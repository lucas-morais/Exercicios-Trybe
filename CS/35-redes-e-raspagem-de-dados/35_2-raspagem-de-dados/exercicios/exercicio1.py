import requests

URL = "https://httpbin.org/encoding/utf8"

response = requests.get(URL)
print(response.text)
