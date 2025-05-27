from pyramid.config import Configurator

def main(global_config, **settings):
    config = Configurator(settings=settings)
    config.include('.routes')
    config.scan('.views')  # scan views.py
    return config.make_wsgi_app()
