from . import db


class Submit(db.Model):
    __tablename__ = 'submit'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True, unique=True)
    create_time = db.Column(db.TIMESTAMP)
    create_id = db.Column(db.Integer)
    code = db.Column(db.String(36))
    deleted = db.Column(db.Integer)
    model_path = db.Column(db.String(255))
    model_name = db.Column(db.String(255))
    predict = db.Column(db.String(250))

    def to_dict(self):
        return {c.name: getattr(self, c.name, None) for c in self.__table__.columns}

    def to_dict_list(self):
        result = {}
        for key in self.__mapper__.c.keys():
            if getattr(self, key) is not None:
                result[key] = str(getattr(self, key))
            else:
                result[key] = getattr(self, key)
        return result
