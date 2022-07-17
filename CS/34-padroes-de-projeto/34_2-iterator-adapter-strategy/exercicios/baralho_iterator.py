from collections.abc import Iterator, Iterable
from abc import ABC, abstractmethod


class Carta:
    def __init__(self, valor, naipe):
        self.valor = valor
        self.naipe = naipe

    def __repr__(self):
        return "<%s de %s>" % (self.valor, self.naipe)


class Baralho(Iterable):
    naipes = "copas ouros espadas paus".split()
    valores = "A 2 3 4 5 6 7 8 9 10 J Q K".split()

    def __init__(self, iterador):
        self._cartas = [
            Carta(valor, naipe)
            for naipe in self.naipes
            for valor in self.valores
        ]
        self._iterador = iterador

    def __len__(self):
        return len(self._cartas)

    def __iter__(self):
        return BaralhoIterator(self._cartas, self._iterador)


class IteradorDeBaralho(ABC):
    @abstractmethod
    def iterar():
        raise NotImplementedError


class IteradorPadrao(IteradorDeBaralho):
    pos = 0

    @classmethod
    def iterar(cls, index):
        return index + 1


class IteradorReverso(IteradorDeBaralho):
    pos = -1

    @classmethod
    def iterar(cls, index):
        return index - 1


class BaralhoIterator(Iterator):
    def __init__(self, cartas, iterador):
        self._cartas = cartas
        self._pos = iterador.pos
        self._iterador = iterador

    def __next__(self):
        try:
            carta = self._cartas[self._pos]
        except IndexError:
            raise StopIteration
        else:
            self._pos = self._iterador.iterar(self._pos)
            return carta


baralho = Baralho(IteradorPadrao)
baralhoInverso = Baralho(IteradorReverso)

for carta in baralho:
    print(carta)

print("\n-------------------------------------------------\n")

baralhoInverso = Baralho(IteradorReverso)
for carta in baralhoInverso:
    print(carta)
