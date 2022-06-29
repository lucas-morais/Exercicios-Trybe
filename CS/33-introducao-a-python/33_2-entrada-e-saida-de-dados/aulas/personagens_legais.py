with open("meus_personagens_favoritos", mode="w") as file:
    file.write("Tio Patinhas\n")
    file.write("Neo\n")
    file.write("Homem Aranha\n")

    charactes = ["Sonho\n", "Ash\n"]
    file.writelines(charactes)
