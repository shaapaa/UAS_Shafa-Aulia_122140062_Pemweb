ITEMS = {}

def get_all_items():
    return list(ITEMS.values())

def get_item(item_id):
    return ITEMS.get(item_id)

def add_item(item):
    item_id = str(len(ITEMS) + 1)
    item['id'] = item_id
    ITEMS[item_id] = item
    return item

def update_item(item_id, item):
    if item_id in ITEMS:
        ITEMS[item_id].update(item)
        ITEMS[item_id]['id'] = item_id
        return ITEMS[item_id]
    return None

def delete_item(item_id):
    return ITEMS.pop(item_id, None)
