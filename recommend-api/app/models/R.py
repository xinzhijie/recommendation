class R:
    status = "ok"
    code = "200"
    msg = ""
    data = ""

    def __init__(self, status='ok', code=200, msg='成功'):
        self.status = status
        self.code = code
        self.msg = msg


    def keys(self):
        return ('status', 'code', 'msg', 'data')

    def __getitem__(self, item):
        return getattr(self, item)

