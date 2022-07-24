import requests


URL = "https://scrapethissite.com/pages/advanced/?gotcha=headers "
response = requests.get(URL)

assert "bot detect" not in response.text
