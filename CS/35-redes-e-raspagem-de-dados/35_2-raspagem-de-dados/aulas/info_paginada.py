from parsel import Selector
import requests

BASE_URL = "http://books.toscrape.com/catalogue/"
next_page_url = "page-1.html"
pagina = 1

while next_page_url:
    response = requests.get(BASE_URL + next_page_url)
    selector = Selector(text=response.text)

    titles = selector.css("h3 a::attr(title)").getall()
    precos = selector.css(".product_price .price_color::text").getall()

    print(f"Página {pagina}")
    for prodcut in zip(titles, precos):
        print(prodcut)

    print("-------------------------------------------------------------\n\n")
    pagina += 1
    next_page_url = selector.css(".next a::attr(href)").get()
