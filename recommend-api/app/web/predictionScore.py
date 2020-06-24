from datetime import datetime
from quopri import quote

import xlrd

from flask import jsonify, request, make_response, send_file

__author__ = 'limc'

from app.models import db
from app.models.PredictionScore import PredictionScore
from app.models.R import R
from app.models.Response import success, to_json
from app.models.Submit import Submit
from app.models.User import User
from flask import Blueprint

predictionScore = Blueprint('predictionScore', __name__)


@predictionScore.route('/api/predictionScore/list', methods=['GET', 'POST'])
def submit_list():
    score = request.get_json().get("score", None)
    submitId = request.get_json().get("submitId", "")
    if score:
        temp = PredictionScore.query.filter(PredictionScore.submitId == submitId, PredictionScore.score >= score).all()
    else:
        temp = PredictionScore.query.filter(PredictionScore.submitId == submitId).all()
    return make_response(jsonify(success(temp)), 200)


@predictionScore.route('/api/predictionScore/generate/<submitId>', methods=['GET', 'POST'])
def generate(submitId):
    db.session.execute("update prediction_score set score = '100' where submitId= " + submitId)
    db.session.execute("update submit set deleted = 0 where id = " + submitId)
    db.session.commit()
    temp = PredictionScore.query.filter(PredictionScore.submitId == submitId).all()
    return make_response(jsonify(success(temp)), 200)


@predictionScore.route('/api/predictionScore/add', methods=['GET', 'POST'])
def add():
    p = PredictionScore()
    p.cycle = request.get_json().get("cycle", "")
    p.perforatingSection = request.get_json().get("perforatingSection", "")
    p.perforationThickness = request.get_json().get("perforationThickness", "")
    p.perforationLayer = request.get_json().get("perforationLayer", "")
    p.reservoirThickness = request.get_json().get("reservoirThickness", "")
    p.perforationPermeability = request.get_json().get("perforationPermeability", "")
    p.porosityPerforationSection = request.get_json().get("porosityPerforationSection", "")
    p.noteType = request.get_json().get("noteType", "")
    p.injectionPattern = request.get_json().get("injectionPattern", "")
    p.noteDose = request.get_json().get("noteDose", "")
    p.steamInjectionIntensity = request.get_json().get("steamInjectionIntensity", "")
    p.numberDays = request.get_json().get("numberDays", "")
    p.oilPressure = request.get_json().get("oilPressure", "")
    p.periodicSteamInjection = request.get_json().get("periodicSteamInjection", "")
    p.soakThePressure = request.get_json().get("soakThePressure", "")

    p.soakTime = request.get_json().get("soakTime", "")
    p.productionCycle = request.get_json().get("productionCycle", "")
    p.periodicLiquidProduction = request.get_json().get("periodicLiquidProduction", "")
    p.cycleOilProduction = request.get_json().get("cycleOilProduction", "")
    p.periodicYield = request.get_json().get("periodicYield", "")
    p.submitId = request.get_json().get("submitId", "")

    db.session.add(p)
    db.session.commit()
    return make_response(jsonify(success(p)), 200)


@predictionScore.route("/api/upload/excel", methods=['GET', 'POST'])
def upload_excel():
    submitId = request.form.get("submitId")
    file = request.files['file']
    f = file.read()  # 文件内容
    data = xlrd.open_workbook(file_contents=f)
    table = data.sheets()[0]
    nrows = table.nrows  # 获取该sheet中的有效行数
    ncols = table.ncols  # 获取该sheet中的有效列数
    print(nrows)
    print(ncols)
    sql = '''
    insert into prediction_score(cycle, perforatingSection, perforationThickness,perforationLayer,
    reservoirThickness,perforationPermeability,porosityPerforationSection,noteType,injectionPattern,
    noteDose,steamInjectionIntensity,numberDays,oilPressure,periodicSteamInjection,soakThePressure,
    soakTime,productionCycle,periodicLiquidProduction,cycleOilProduction,periodicYield, submitId)
    values (:cycle, :perforatingSection, :perforationThickness,:perforationLayer,
    :reservoirThickness,:perforationPermeability,:porosityPerforationSection,:noteType,:injectionPattern,
    :noteDose,:steamInjectionIntensity,:numberDays,:oilPressure,:periodicSteamInjection,:soakThePressure,
    :soakTime,:productionCycle,:periodicLiquidProduction,:cycleOilProduction,:periodicYield, ''' + submitId + ''')
    '''
    key = ['cycle', 'perforatingSection', 'perforationThickness', 'perforationLayer', 'reservoirThickness',
           'perforationPermeability', 'porosityPerforationSection', '开始注入日期', 'noteType', 'injectionPattern',
           'noteDose', '注汽日期', '排量\n（m3/h）', 'steamInjectionIntensity', 'numberDays', 'oilPressure', '套压（Mpa）',
           'periodicSteamInjection', 'soakThePressure', 'soakTime', '投产时间（日期）', 'productionCycle',
           'periodicLiquidProduction', 'cycleOilProduction', 'periodicYield']
    s = []
    for i in range(2, nrows):
        d = {}
        values = table.row_values(i)
        for x in range(ncols):
            d[key[x]] = values[x]
        s.append(d)
    db.session.execute(sql, s)
    db.session.commit()
    return 'OK'


from io import BytesIO
import xlsxwriter


@predictionScore.route("/api/download/<submitId>", methods=['GET', 'POST'])
def download(submitId):
    out = BytesIO()
    workbook = xlsxwriter.Workbook(out)
    table = workbook.add_worksheet()


    content = [['周期',	'射孔井段（m）',	'射孔厚度（m）',	'射孔层数',	'油藏厚度（m）',	'射孔段渗透率（md）',	'射孔段孔隙度',
    '注剂类型',  '注入方式',	'注剂量',	'注汽强度(t/m)',	'注入天数(d)',	'油压（Mpa）',		'周期注汽量(m3)',
    '焖井压力(MPa)',	'焖井时间(d)', '周期生产时间',	'周期产液量（万吨）',	'周期产油量（万吨）',	'周期产水量（万吨）']]
    score = request.args.get("score", None)
    # score = request.get_json().get("score", None)
    if score:
        data = PredictionScore.query.filter(PredictionScore.submitId == submitId, PredictionScore.score >= score).all()
    else:
        data = PredictionScore.query.filter(PredictionScore.submitId == submitId).all()

    value_dict = to_json(data)
    for i in value_dict:
        content.append(list(i.values()))
    for i in range(len(content)):
        for j in range(len(content[0])):
            table.write(i, j, content[i][j])
    workbook.close()
    out.seek(0)
    filename = "download.xlsx"
    rv = send_file(out, as_attachment=True, attachment_filename=filename)
    rv.headers['Content-Disposition'] += "; filename*=utf-8''{}".format(filename)
    return rv