from datetime import datetime

from flask import jsonify, request, make_response, url_for, redirect, send_from_directory
import os
from werkzeug.utils import secure_filename
__author__ = 'limc'

from app.models import db
from app.models.R import R
from app.models.Response import success
from flask import Blueprint

from app.models.TrainingModel import TrainingModel

trainingModel = Blueprint('trainingModel', __name__)
UPLOAD_PATH = os.path.join(os.path.split(os.getcwd())[0], 'templates/')


@trainingModel.route('/api/trainingModel/list', methods=['GET', 'POST'])
def submit_list():
    t = format_submit(request.get_json())
    temp = TrainingModel.query.filter(TrainingModel.deleted == 0, TrainingModel.create_id == t.create_id).all()
    return make_response(jsonify(success(temp)), 200)


@trainingModel.route('/api/trainingModel/upload', methods=['GET', 'POST'])
def upload_file():
    if not os.path.exists(UPLOAD_PATH):  # 如果路径不存在
        os.makedirs(UPLOAD_PATH)
    training = TrainingModel()
    training.name = request.form.get("name")
    training.create_id = request.form.get("createId")
    """
    上传文件
    :return: 返回上传文件的url地址
    """
    if request.method == "POST":
        f = request.files["file"]
        if f:
            file = UPLOAD_PATH + secure_filename(f.filename)
            print(file)
            f.save(file)
            training.path = file
            training.create_time = datetime.now()
            training.deleted = 0
            db.session.add(training)
            db.session.commit()

    return "ok"


@trainingModel.route('/api/trainingModel/<filename>', methods=['GET', 'POST'])
def get_image(filename):
    response = make_response(send_from_directory(UPLOAD_PATH, filename))
    response.headers["Content-Disposition"] = "attachment; filename={}".format(filename.encode().decode('latin-1'))
    return response


def format_submit(dict_json):
    t = TrainingModel()
    t.create_id = dict_json.get("createId", "")
    return t
