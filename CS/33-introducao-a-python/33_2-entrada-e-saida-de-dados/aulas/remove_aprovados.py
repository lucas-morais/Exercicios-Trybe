alunos = []
with open("./notas.txt", mode="r") as file:
    alunos = file.readlines()

with open("./alunos_reprovados.txt", mode="w") as file:
    for aluno in alunos:
        nome, nota = aluno.split(" ")
        if(int(nota.replace("\n", "")) < 6):
            file.write(f"{nome}\n")
