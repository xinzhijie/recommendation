from flask import Flask, render_template
from app.web import auth
from flask_sqlalchemy import SQLAlchemy

from app.web.submit import submit
from app.web.trainingModel import trainingModel
from app.web.predictionScore import predictionScore
# app = Flask(__name__)
app = Flask(__name__, static_folder='./static/static', template_folder="./static")  #设置vue编译输出目录dist文件夹，为Flask模板文件目录


# 数据库链接的配置，此项必须，格式为（数据库+驱动://用户名:密码@数据库主机地址:端口/数据库名称）
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+cymysql://root:lmc@2017@192.168.154.110:3306/recommend'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False  # 跟踪对象的修改，在本例中用不到调高运行效率，所以设置为False
db = SQLAlchemy(app=app)  # 为哪个Flask app对象创建SQLAlchemy对象，赋值为db

app.register_blueprint(auth.auth)
app.register_blueprint(submit)
app.register_blueprint(trainingModel)
app.register_blueprint(predictionScore)
app.config['JSON_AS_ASCII'] = False


@app.route('/')
def index():
    return render_template('index.html', name='index')


@app.errorhandler(404)
def miss(e):
    return render_template('index.html', name='index')


if __name__ == '__main__':

    app.run()
