SELECT * FROM sakila.film;
SELECT title, release_year, rating FROM sakila.film;
SELECT COUNT(DISTINCT title, release_year) FROM sakila.film;

####

SELECT DISTINCT last_name FROM sakila.actor;
SELECT COUNT(DISTINCT last_name) FROM sakila.actor;

SELECT * FROM sakila.actor
ORDER BY last_name ASC, first_name DESC; 

SELECT name FROM sakila.language
WHERE name != 'English';

SELECT * FROM sakila.film;

SELECT title, release_year, length, rating, replacement_cost FROM sakila.film
ORDER BY length DESC, replacement_cost DESC
LIMIT 20; 

