#1
SELECT * FROM sakila.film
WHERE title LIKE '%ace';

#2 
SELECT * From sakila.film
WHERE description LIKE '%china';

#3
SELECT * FROM sakila.film
WHERE description LIKE '%girl%' AND title LIKE '%lord';

#4
SELECT * FROM sakila.film
WHERE title LIKE '___gon%';

#5
SELECT * FROM sakila.film
WHERE title LIKE '___gon%' AND description LIKE '%Documentary%';

#6
SELECT * FROM sakila.film
WHERE title LIKE '%academy' OR title LIKE 'mosquito%';

#6
SELECT * FROM sakila.film
WHERE description LIKE '%monkey%' AND description LIKE '%sumo%';