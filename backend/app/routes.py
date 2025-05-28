def includeme(config):
    """Daftarkan semua route aplikasi di sini."""
    config.add_route('home', '/')
    config.add_route('login', '/login')
    config.add_route('logout', '/logout')
    config.add_route('register', '/register')
    config.add_route('dashboard', '/dashboard')
    config.add_route('post_story', '/stories/post')
    config.add_route('view_story', '/stories/{id}')
    config.add_route('comment', '/stories/{id}/comment')
