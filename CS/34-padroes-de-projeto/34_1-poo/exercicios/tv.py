class TV:
    def __init__(self, tamanho: int) -> None:
        self.__volume = 50
        self.__canal = 1
        self.__tamanho = tamanho
        self.__ligada = False

    def aumentar_volume(self) -> None:
        if self.__volume < 99:
            self.__volume += 1

    def diminuir_volume(self) -> None:
        if self.__volume < 99:
            self.__volume -= 1

    def modificar_canal(self, canal: int) -> None:
        if canal not in range(1, 100):
            raise ValueError
        self.__canal = canal

    def ligar_desligar(self):
        self.__ligada = not self.__ligada

    def __str__(self) -> str:
        return f"Televisão de {self.__tamanho} polegadas"


tv = TV(50)
print(tv)
