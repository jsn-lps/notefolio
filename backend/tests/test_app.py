from ..app import do_something


def test_do_something():
    assert do_something() == 5
