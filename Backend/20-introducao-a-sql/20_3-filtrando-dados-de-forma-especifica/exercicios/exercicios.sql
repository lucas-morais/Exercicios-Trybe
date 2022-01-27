#1
SELECT 
    *
FROM
    PecasFornecedores.Pecas
WHERE
    name LIKE 'GR%';
    
    
#2
SELECT 
    *
FROM
    PecasFornecedores.Fornecimentos
WHERE
    peca = 2
ORDER BY Fornecedor;

#3
SELECT 
    peca, Fornecedor, Preco
FROM
    PecasFornecedores.Fornecimentos
WHERE
    Fornecedor LIKE '%N%';
    
#4 
SELECT 
    *
FROM
    PecasFornecedores.Fornecedores
WHERE
    name LIKE '%LTDA%'
ORDER BY name DESC;

#5 
SELECT COUNT(*) FROM PecasFornecedores.Fornecedores
WHERE name LIKE '%F%';


#6
SELECT 
    *
FROM
    PecasFornecedores.Fornecimentos
WHERE
    preco BETWEEN 15.0 AND 40.0;
    
#7
SELECT COUNT(*) FROM PecasFornecedores.Vendas
WHERE order_date BETWEEN '2018-04-15' AND '2019-07-30'
