from datetime import datetime

from flask import jsonify, request, make_response

__author__ = 'limc'

from app.models import db
from app.models.R import R
from app.models.Response import success
from app.models.Submit import Submit
from flask import Blueprint

submit = Blueprint('submit', __name__)


@submit.route('/api/submit/add', methods=['GET', 'POST'])
def add():
    s = Submit()
    s.deleted = 1
    s.create_time = datetime.now()
    s.create_id = request.get_json().get("createId", "")
    s.model_name = request.get_json().get("modelName", "")
    s.model_path = request.get_json().get("modelPath", "")
    s.code = request.get_json().get("code", "")

    db.session.add(s)
    db.session.commit()
    return make_response(jsonify(success(s)), 200)


@submit.route('/api/submit/delete/<submitId>', methods=['GET', 'POST'])
def delete(submitId):
    db.session.execute("update submit set deleted = 1 where id = " + submitId)
    db.session.commit()

    return make_response(jsonify(success(None)), 200)


@submit.route('/api/submit/list', methods=['GET', 'POST'])
def submit_list():
    u = format_submit(request.get_json())
    temp = Submit.query.filter(Submit.create_id == u.create_id,
                               Submit.deleted == 0, Submit.code == u.code).all()
    return make_response(jsonify(success(temp)), 200)


@submit.route('/api/submit/get/<sid>', methods=['GET', 'POST'])
def get(sid):
    temp = Submit.query.filter(Submit.id == sid).first()
    return make_response(jsonify(success(temp)), 200)


def format_submit(dict_json):
    u = Submit()
    u.create_id = dict_json.get("createId", "")
    u.code = dict_json.get("code", "")
    return u
