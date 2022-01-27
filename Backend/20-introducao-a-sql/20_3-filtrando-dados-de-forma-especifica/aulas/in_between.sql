#1
SELECT 
    first_name, last_name, email
FROM
    sakila.customer
WHERE
    last_name IN ('HICKS' , 'CRAWFORD',
        'HENRY',
        'BOYD',
        'MASON',
        'MORALES',
        'KENNEDY')
ORDER BY first_name , last_name;

#2
SELECT 
    email
FROM
    sakila.customer
WHERE
    address_id BETWEEN 172 AND 176
ORDER BY email;

#3
SELECT 
    COUNT(*)
FROM
    sakila.payment
WHERE
    payment_date BETWEEN '2005-05-01' AND '2005-08-01';

#4
SELECT 
    title, release_year, length
FROM
    sakila.film
WHERE
    rental_duration BETWEEN 3 AND 6
ORDER BY length DESC , title ASC;

#5 
SELECT 
    *
FROM
    sakila.film
WHERE
    rating IN ('G' , 'PG', 'PG-13')
ORDER BY title
LIMIT 500;