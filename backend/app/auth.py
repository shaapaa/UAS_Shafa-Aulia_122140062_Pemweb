from pyramid.security import Allow, Authenticated, Everyone

USERS = {
    'admin': 'admin123',
    'user': 'user123',
}

def check_credentials(username, password, request):
    if username in USERS and USERS[username] == password:
        # Could return groups, for simplicity return a role/group tuple
        return ('group:admin',)
    return None
