from pyramid.view import view_config
from pyramid.response import Response
from pyramid.security import remember, forget
from pyramid.httpexceptions import HTTPFound
from .models import DBSession, User
from passlib.hash import bcrypt

@view_config(route_name='login', renderer='json', request_method='POST')
def login_view(request):
    username = request.json_body.get('username')
    password = request.json_body.get('password')
    
    user = DBSession.query(User).filter_by(username=username).first()
    if user and bcrypt.verify(password, user.hashed_password):
        headers = remember(request, user.id)
        response = Response(json_body={"success": True, "message": "Login berhasil"})
        response.headers.extend(headers)
        response.status_code = 200
        return response
    
    return Response(json_body={"success": False, "message": "Username atau password salah"}, status=401)

@view_config(route_name='register', renderer='json', request_method='POST')
def register_view(request):
    data = request.json_body
    username = data.get('username')
    email = data.get('email')
    password = data.get('password')

    if not username or not email or not password:
        return Response(json_body={"success": False, "message": "Field tidak lengkap"}, status=400)

    if DBSession.query(User).filter_by(username=username).first():
        return Response(json_body={"success": False, "message": "Username sudah digunakan"}, status=400)

    if DBSession.query(User).filter_by(email=email).first():
        return Response(json_body={"success": False, "message": "Email sudah digunakan"}, status=400)

    hashed = bcrypt.hash(password)
    user = User(username=username, email=email, hashed_password=hashed)
    DBSession.add(user)
    DBSession.flush()

    return Response(json_body={"success": True, "message": "Registrasi berhasil"}, status=201)

@view_config(route_name='logout', renderer='json', request_method='POST')
def logout_view(request):
    headers = forget(request)
    response = Response(json_body={"success": True, "message": "Logout berhasil"})
    response.headers.extend(headers)
    return response
