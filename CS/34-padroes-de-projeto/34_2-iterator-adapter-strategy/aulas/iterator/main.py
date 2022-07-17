from DatabaseIterator import DatabaseIterable
from Dbsimulator import DbSimulator

record_paginator = DatabaseIterable(DbSimulator(), "select * from person")
for page in record_paginator:
    for record in page:
        print(record["name"])
