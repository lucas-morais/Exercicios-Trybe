#1
SELECT 
    active, COUNT(active)
FROM
    sakila.customer
GROUP BY active;

#2
SELECT 
    store_id, active, COUNT(active)
FROM
    sakila.customer
GROUP BY store_id , active;

#3
SELECT 
    rating, AVG(rental_duration) AS 'Media'
FROM
    sakila.film
GROUP BY rating
ORDER BY Media DESC;

#4 
SELECT district, COUNT(*) FROM sakila.address
GROUP BY district
ORDER BY district;