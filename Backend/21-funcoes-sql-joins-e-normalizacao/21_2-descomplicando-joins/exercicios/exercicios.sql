#1
SELECT 
    m.title, b.domestic_sales, b.international_sales
FROM
    Pixar.Movies AS m
        JOIN
    Pixar.BoxOffice AS b ON m.id = b.movie_id;
    
#2
SELECT 
    m.title,
    b.domestic_sales,
    b.international_sales,
    b.domestic_sales + b.international_sales AS `total_sales`
FROM
    Pixar.Movies AS m
        JOIN
    Pixar.BoxOffice AS b ON m.id = b.movie_id
WHERE
    b.domestic_sales < b.international_sales;
    
#3
SELECT 
    m.title, b.rating
FROM
    Pixar.Movies AS m
        JOIN
    Pixar.BoxOffice AS b ON m.id = b.movie_id;
    
#4
SELECT 
	* 
FROM 
	Pixar.Theater AS t
		LEFT JOIN
	Pixar.Movies AS m ON t.id = m.theater_id;

#5
SELECT 
	* 
FROM 
	Pixar.Theater AS t
		RIGHT JOIN
	Pixar.Movies AS m ON t.id = m.theater_id;
	


