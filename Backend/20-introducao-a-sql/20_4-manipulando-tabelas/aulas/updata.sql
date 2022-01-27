SET SQL_SAFE_UPDATES = 0;

#1
UPDATE sakila.actor
SET first_name='JULES'
WHERE first_name='JULIA'
LIMIT 1;