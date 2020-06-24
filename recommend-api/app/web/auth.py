from flask import jsonify, request, make_response

__author__ = 'limc'

from app.models import db
from app.models.R import R
from app.models.Response import success
from app.models.User import User
from flask import Blueprint

auth = Blueprint('auth', __name__)


@auth.route('/api/registry', methods=['GET', 'POST'])
def register():
    u = format_user(request.get_json())
    temp = User.query.filter(User.username == u.username).first()
    if temp:
        return make_response(jsonify(success(r=R("error", 500, "用户名重复"))), 200)
    else:
        db.session.add(u)
        db.session.commit()
        return make_response(jsonify(success(r=R(msg="成功了"))), 200)


@auth.route('/api/login', methods=['GET', 'POST'])
def login():
    u = format_user(request.get_json())
    temp = User.query.filter(User.username == u.username and User.password == u.password).first()
    if temp:
        result = success(temp)
        result['data']['token'] = result['data']['id']
        return make_response(jsonify(result), 200)
    else:
        return make_response(jsonify(success(r=R("error", 500, "用户名密码输入错误"))), 200)


@auth.route('/api/getUserInfo', methods=['GET', 'POST'])
def get_user_info():
    temp = User.query.filter(User.id == request.get_json()['token']).first()
    if temp:
        result = success(temp)
        result['data']['token'] = result['data']['id']
        return make_response(jsonify(result), 200)
    else:
        return make_response(jsonify(success(r=R("error", 500, "token输入错误"))), 200)


@auth.route('/api/user/list', methods=['GET', 'POST'])
def get_list():
    temp = User.query.filter().all()
    if temp:
        result = success(temp)
        return make_response(jsonify(result), 200)
    else:
        return make_response(jsonify(success(r=R("error", 500, "token输入错误"))), 200)


def format_user(dict_json):
    u = User()
    u.name = dict_json.get("name", "")
    u.password = dict_json.get("password", "")
    u.username = dict_json.get("username", "")
    u.email = dict_json.get("email", "")
    u.role = dict_json.get("role", "1")
    return u
