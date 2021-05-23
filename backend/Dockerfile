FROM python:3.8
WORKDIR /app/

ARG WAIT_VERSION=2.9.0
ADD https://github.com/ufoscout/docker-compose-wait/releases/download/$WAIT_VERSION/wait ./wait
RUN chmod +x ./wait

COPY requirements.txt /tmp/
RUN pip install -r /tmp/requirements.txt
COPY . ./
RUN SECRET_KEY=dummy python manage.py collectstatic

RUN chmod +x ./run.sh ./wait_for_db_service.sh

CMD ./run.sh
