from app.models.R import R


def success(data=None, r=R()):
    if isinstance(data, list):
        r.data = to_json(data)
    elif data:
        r.data = data.to_dict()
    r_dict = dict(r)
    return r_dict


def to_json(all_vendors):
    v = [ven.to_dict_list() for ven in all_vendors]
    return v
