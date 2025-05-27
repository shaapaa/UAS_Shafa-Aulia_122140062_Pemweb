from pyramid.view import view_config
from pyramid.httpexceptions import HTTPNotFound, HTTPBadRequest
from .models import get_all_items, get_item, add_item, update_item, delete_item

@view_config(route_name='items', request_method='GET', permission='view', renderer='json')
def list_items(request):
    return get_all_items()

@view_config(route_name='items', request_method='POST', permission='view', renderer='json')
def create_item(request):
    try:
        data = request.json_body
        if not data.get('name'):
            return HTTPBadRequest(json_body={'error': 'Field "name" is required'})
        return add_item(data)
    except Exception:
        return HTTPBadRequest(json_body={'error': 'Invalid JSON'})

@view_config(route_name='item', request_method='GET', permission='view', renderer='json')
def view_item(request):
    item_id = request.matchdict['id']
    item = get_item(item_id)
    if not item:
        return HTTPNotFound(json_body={'error': 'Item not found'})
    return item

@view_config(route_name='item', request_method='PUT', permission='view', renderer='json')
def update_item_view(request):
    item_id = request.matchdict['id']
    try:
        data = request.json_body
        updated = update_item(item_id, data)
        if not updated:
            return HTTPNotFound(json_body={'error': 'Item not found'})
        return updated
    except Exception:
        return HTTPBadRequest(json_body={'error': 'Invalid JSON'})

@view_config(route_name='item', request_method='DELETE', permission='view', renderer='json')
def delete_item_view(request):
    item_id = request.matchdict['id']
    deleted = delete_item(item_id)
    if not deleted:
        return HTTPNotFound(json_body={'error': 'Item not found'})
    return {'status': 'deleted'}
