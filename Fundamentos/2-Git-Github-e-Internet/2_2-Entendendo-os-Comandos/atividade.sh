# Atividade -2.2 - Git & Github - Entendendo os Comandos

#1 Navegue até o diretório


#2 Verificar se não há nada para commitar. Se necessario, fazer o commit

git status

#git commit -m "commit pendente"


#3 Criar nova branch chamado trybe-skills-changes e fazer checkout nela 

git checkout -b trybe-skills-change


#4 Adicionar habilidades ao arquivo, faze commit e enviar modificações 
# ao repositório remoto

# Adicionando skills ao final do arquivo 
cat >> arquivo.txt

# Adicionando mudanças à staging area
git add arquivo.txt

# Commit das modificações
git commit -m "adicionando skills"

# Enviando modificações ao repositório remoto
git push -u origin trybe-skills-change  


#5 Criar pull request


#6 Voltadno à branch principal

git checkout


#7 Verificando o branch atual

git branch


# 8 Criando nova branch trybe-skills-updates e faça checkout

git chckout -b trybe-skills-updates


#9 Adicionar habilidades ao arquivo, faze commit e enviar modificações 
# ao repositório remoto

# Adicionando skills ao final do arquivo 
cat >> arquivo.txt

# Adicionando mudanças à staging area
git add arquivo.txt

# Commit das modificações
git commit -m "update de skills"

# Enviando modificações ao repositório remoto
git push -u origin trybe-skills-update  


# Abrir requisição de Pull
