from typing import Counter, List


class Estatistica:
    @classmethod
    def media(cls, amostra: List[int]) -> float:
        return sum(amostra) / len(amostra)

    @classmethod
    def mediana(cls, amostra: List[int]) -> float:
        amostra.sort()
        tamanho_amostra = len(amostra)
        meio = tamanho_amostra // 2
        mediana = amostra[meio]
        if tamanho_amostra % 2 == 0:
            mediana = (mediana + amostra[meio - 1]) / 2
        return mediana

    @classmethod
    def moda(cls, amostra: List[int]) -> float:
        return Counter(amostra).most_common()[0][0]


teste = [1, 2, 3, 3, 3, 2, 1]

print(Estatistica.media(teste))
print(Estatistica.mediana(teste))
print(Estatistica.moda(teste))
