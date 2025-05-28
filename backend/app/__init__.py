from pyramid.config import Configurator
from sqlalchemy import engine_from_config
from pyramid.authentication import AuthTktAuthenticationPolicy
from pyramid.authorization import ACLAuthorizationPolicy
from pyramid.security import Allow, Everyone  # ✅ Tambahkan ini

from .models import Base, DBSession

class RootFactory:
    """Root factory untuk ACL authorization."""
    __acl__ = [
        (Allow, 'group:admin', ('admin', 'edit')),
        (Allow, 'group:user', 'view'),
        (Allow, Everyone, 'view'),
    ]

    def __init__(self, request):
        pass

def main(global_config, **settings):
    """This function returns a Pyramid WSGI application."""

    # Setup database engine dan session
    engine = engine_from_config(settings, 'sqlalchemy.')
    DBSession.configure(bind=engine)
    Base.metadata.bind = engine

    # Setup authentication dan authorization policy
    authn_policy = AuthTktAuthenticationPolicy(
        secret='replace_this_with_a_random_secret_key',
        hashalg='sha512',
        timeout=3600,
        reissue_time=300,
        debug=True,
    )
    authz_policy = ACLAuthorizationPolicy()

    config = Configurator(
        settings=settings,
        root_factory=RootFactory
    )

    config.set_authentication_policy(authn_policy)
    config.set_authorization_policy(authz_policy)

    # Include routes
    from . import routes
    config.include(routes.includeme)

    # Scan semua view
    config.scan()

    return config.make_wsgi_app()
