FROM python:3.6
WORKDIR /app

COPY ./requirements.txt /app/requirements.txt
RUN pip install -r requirements.txt -i https://pypi.tuna.tsinghua.edu.cn/simple

COPY . /app

CMD ["gunicorn", "manage:app", "-c", "./gunicorn.conf.py"]

