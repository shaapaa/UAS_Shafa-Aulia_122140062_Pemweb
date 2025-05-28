from setuptools import setup

requires = [
    'pyramid',
    'sqlalchemy',
    'psycopg2-binary',
]

setup(
    name='app',  # HARUS sama seperti nama yang disebut di development.ini
    install_requires=requires,
    entry_points={
        'paste.app_factory': [
            'main = app.__init__:main',
        ],
    },
)
