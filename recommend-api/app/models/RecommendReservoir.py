
from . import db


class RecommendReservoir(db.Model):
    __tablename__ = 'recommend_reservoir'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True, unique=True)
    cycle = db.Column(db.String(20), comment="周期")
    perforatingSection = db.Column(db.String(20), comment="射孔并段")
    perforationThickness = db.Column(db.String(20), comment="射孔厚度")
    perforationLayer = db.Column(db.String(20), comment="射孔层数")
    reservoirThickness = db.Column(db.String(20), comment="油藏厚度")
    perforationPermeability = db.Column(db.String(20), comment="射孔段渗透率")
    porosityPerforationSection = db.Column(db.String(20), comment="射孔段孔隙度")
    noteType = db.Column(db.String(20), comment="注剂类型")
    injectionPattern = db.Column(db.String(20), comment="注入方式")
    noteDose = db.Column(db.String(20), comment="注剂量")
    steamInjectionIntensity = db.Column(db.String(20), comment="注汽强度")
    numberDays = db.Column(db.String(20), comment="注入天数")
    oilPressure = db.Column(db.String(20), comment="油压")
    periodicSteamInjection = db.Column(db.String(20), comment="周期注汽量")
    soakThePressure = db.Column(db.String(20), comment="焖井压力")
    soakTime = db.Column(db.String(20), comment="焖井时间")
    productionCycle = db.Column(db.String(20), comment="周期生产")
    periodicLiquidProduction = db.Column(db.String(20), comment="周期产液量")
    cycleOilProduction = db.Column(db.String(20), comment="周期产油量")
    periodicYield = db.Column(db.String(20), comment="周期产水量")
