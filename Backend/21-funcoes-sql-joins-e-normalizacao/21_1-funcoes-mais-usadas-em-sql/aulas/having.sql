#1
SELECT 
    rating, AVG(length) AS 'media'
FROM
    sakila.film
GROUP BY rating
HAVING media BETWEEN 115.0 AND 121.50;

#2
SELECT 
    rating, SUM(replacement_cost) AS 'total_replacement_cost'
FROM
    sakila.film
GROUP BY rating
HAVING total_replacement_cost > 3950.50
;