#1
SELECT 'This is SQL Exercise, Pratice and Solution';

#2
SELECT 1, 2, 3;

#3
SELECT 10 + 15 as 'Soma de 10 e 15'; 

#4
SELECT 10 - 15 as 'Resultado de expressão aritmética qualquer'; 


#5
SELECT * FROM Scientists.Scientists;

#6
SELECT Name as 'Nome do Projeto', Hours as 'Tempo de Trabalho' from Scientists.Projects;

#7
SELECT Name FROM Scientists.Scientists
ORDER BY Name;

#8 
SELECT Name FROM Scientists.Projects
ORDER BY Name DESC;

#9 
SELECT * FROM Scientists.Projects
ORDER BY Hours DESC
LIMIT 1;

#9
SELECT CONCAT('O projeto ', Name, ' precisou de ', Hours, ' horas para ser concluido') 
AS 'Tempo para conclusão do projeto' FROM Scientists.Projects;

#10
SELECT Name, Hours FROM Scientists.Projects
ORDER BY Hours DESC
LIMIT 3;

#11
SELECT DISTINCT Project FROM Scientists.AssignedTo;

#12
SELECT Name FROM Scientists.Projects
ORDER BY Hours DESC
LIMIT 1;

#13
SELECT Name FROM Scientists.Projects
ORDER BY Hours
LIMIT 1 OFFSET 1;

#14
SELECT * FROM Scientists.Projects
ORDER BY Hours
LIMIT 5;

#15
SELECT CONCAT('Existem ', COUNT(DISTINCT Name), ' cinetistas na tabela') 
as 'Número de cientistas' FROM Scientists.Scientists