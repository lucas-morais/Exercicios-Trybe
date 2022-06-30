from codigo import is_odd, divide
import pytest


def test_is_odd_when_number_is_odd_returns_true():
    "Para número ímpar retorna true"
    assert is_odd(3) is True


def test_is_odd_when_number_is_even_returns_false():
    "Para número par retorna false"
    assert is_odd(2) is False


def test_divide_when_divisor_is_zero_raises_an_exception():
    "para um divisor igual a zero, lança uma exceção"
    with pytest.raises(ZeroDivisionError, match="division by zero"):
        divide(5, 0)
