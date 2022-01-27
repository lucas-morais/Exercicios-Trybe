#1
SELECT 
    *
FROM
    Scientists.Scientists
WHERE
    Name LIKE '%e%';
    
#2
SELECT 
    Name
FROM
    Scientists.Projects
WHERE
    Name LIKE 'A%'
ORDER BY Name;

#3
SELECT 
    Name, Code
FROM
    Scientists.Projects
WHERE
    Code LIKE '%3%'
ORDER BY Name;

#4
SELECT 
    Scientist
FROM
    Scientists.AssignedTo
WHERE
    Project IN ('AeH3' , 'Ast3', 'Che1');
    
#5
SELECT 
    *
FROM
    Scientists.Projects
WHERE
    Hours > 500;
    
#6
SELECT 
    *
FROM
    Scientists.Projects
WHERE
    Hours > 250 AND Hours < 800;
    
#7 
SELECT 
    Name, Code
FROM
    Scientists.Projects
WHERE
    Name NOT LIKE 'A%'; 

#8
SELECT 
    Name
FROM
    Scientists.Projects
WHERE
    Code NOT LIKE '%h%';
