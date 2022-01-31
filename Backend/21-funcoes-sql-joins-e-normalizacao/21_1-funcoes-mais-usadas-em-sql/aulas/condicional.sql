#1
SELECT 
    film_id as id,
    title,
    IF(title = 'ACE GOLDFINGER',
        'Já assisti o filme',
        'Não conheço o filme') AS 'conheço o filme?'
FROM 
	sakila.film;
    
    
SELECT 
    film_id AS id,
    title,
    CASE
        WHEN rating = 'G' THEN 'Livre para todos'
        WHEN rating = 'PG' THEN 'Não recomendado para menores de 10 anos'
        WHEN rating = 'PG-13' THEN 'Não recomnedado para menores de 13 anos'
        WHEN rating = 'R' THEN 'Não recomendado para menores de 17 anos'
        ELSE 'Proibido para menores de idade'
    END AS 'publico-alvo'
FROM
    sakila.film;