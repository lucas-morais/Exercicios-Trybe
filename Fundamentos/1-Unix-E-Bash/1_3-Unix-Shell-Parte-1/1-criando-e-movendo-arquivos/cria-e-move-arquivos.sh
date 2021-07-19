#!/bin/bash 

re="!(cria-e-move-arquivos.sh)" 

if [[ $1 == clear ]]; then
	rm -rf $re
	echo $re
	
else 
	# Exercício de criação e manipulação de arquivos

	# Q1
	echo "#########################################################"
	echo
	echo "1 - Criando o diretório unix_tests e navegando até ele"
	echo

	mkdir unix_tests
	cd unix_tests
	
	echo "  --> Diretório Atual: `pwd`"
	read -n 1
	echo

	#Q2
	echo "2 - Criando um arquivo chamado trybe.txt"
	echo

	touch trybe.txt

	echo "  --> Arquivos no diretório atual: `ls`"
	read -n 1
	echo

	#Q3
	echo "3 - Criando um arquivo chamado trybe_backup.txt"
	echo

	touch trybe_backup.txt

	echo " --> Arquivos no diretório atual: `ls`"
	read -n 1
	echo
	
	#Q4
	echo "4 - Renomeando o arquivo trybe.txt"
	echo

	mv trybe.txt ebyrt.txt 

	echo " --> Arquivos no diretório atual: `ls`"
	read -n 1
	echo

	#Q5
	echo "5 - Criando o diretório backup"
	echo

	mkdir backup
	
	echo " --> Arquivos no diretório atual: `ls`"
	read -n 1
	echo

	#Q6
	echo "6 - Movendo o arquivo trybe_backup.txt para o diretório backup"
	echo

	mv trybe_backup.txt backup 

	echo " --> Arquivos no diretório backup: `ls backup`"
	read -n 1
	echo

	#Q7
	echo "7 - Criando o diretório backup2"
	echo

	mkdir backup2
	
	echo " --> Arquivos no diretório atual: `ls`"
	read -n 1
	echo

	#Q8
	echo "8 - Movendo o arquivo trybe_backup.txt para o diretório backup2"
	echo

	mv backup/trybe_backup.txt backup2 

	echo " --> Arquivos no diretório backup2: `ls backup2`"
	read -n 1
	echo

	#Q9
	echo "9 - Apagando o diretório backup"
	echo

	rmdir backup

	echo " --> Arquivos no diretório atual: `ls`"
	read -n 1
	echo

	#Q10
	echo "10 - Renomeando o diretório backup2 para backup"
	echo

	mv backup2 backup

	echo " --> Arquivos no diretório atual: `ls`"
	read -n 1
	echo


	#Q11
	echo "11 - Mostrando path completo e arquivos do diretório e subdiretório"
	echo

	pwd 
	echo
	ls *
	

	read -n 1
	echo

	#Q12
	echo "12 - Apagando o diretório backup"
	echo

	rm -rf backup

	echo " --> Arquivos no diretório atual: `ls`"
	read -n 1
	echo
	
	#Q13
	echo "13 - Limpando terminaç"
	echo

	clear

	read -n 1
	echo

	#Q14
	echo "14 - Craindo o arquivo skills.txt"
	echo

	touch skills.txt
	echo " --> Arquivos no diretório atual: `ls`"
	read -n 1
	echo

	#Q15
	echo "15 Preenchendo o arquivo"

	echo "Internet
	Unix
	Bash
	HTML
	CSS
	JavaScript
	React
	SQL" >> skills.txt
	echo
	
	echo "  --> Mostrando conteúdo do arquivo: `cat skills.txt`"
	read -n 1
	echo
	

	#Q16
	echo "16 - Mostrando as 5 primeiras linhas"
	echo

	head -5 skills.txt
	read -n 1
	echo

	#Q17
	echo "17 - Mostrando as 4 últimas linhas"
	echo

	head -4 skills.txt
	read -n 1
	echo

	#Q18
	echo "18 - Apagando arquivos com extensão .txt"
	echo

	rm *.txt
	echo " --> Arquivos no diretório atual: `ls`"
	read -n 1
	echo

fi

