from collections.abc import Iterable, Iterator


class DatabaseIterable(Iterable):
    def __init__(self, db, query) -> None:
        self.db = db
        self.query = query

    def __iter__(self):
        return DatabaseIterator(self.db, self.query)


class DatabaseIterator(Iterator):
    def __init__(self, db, query):

        self.db = db
        self.query = query
        self.current_page = 1

    def get_page(self, page):
        return self.db.get(self.query, page)

    def __next__(self):
        data = self.get_page(page=self.current_page)

        if not data:
            raise StopIteration()

        self.current_page += 1

        return data
