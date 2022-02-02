SELECT 
    *
FROM
    Pixar.Movies AS m
        JOIN
    Pixar.BoxOffice AS b ON m.id = b.movie_id
WHERE
	b.rating > 8