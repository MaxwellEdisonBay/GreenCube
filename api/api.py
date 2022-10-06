import time
import sys
import os
from flask import Flask, request
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.sql import func

basedir = os.path.abspath(os.path.dirname(__file__))
DB_NAME = 'database.db'

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] =\
    'sqlite:///' + os.path.join(basedir, DB_NAME)
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

class Presentation(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    url = db.Column(db.String(100), nullable=False)
    created_at = db.Column(db.DateTime(timezone=True),
                           server_default=func.now())

    def __repr__(self):
        return f'<Presentation {self.name}>'

    def as_dict(self):
       return {c.name: getattr(self, c.name) for c in self.__table__.columns}

@app.route('/time')
def get_current_time():
    return {'time': time.time()}


@app.route('/links', methods=['GET'])
def getPresentationLinks():
    pres = Presentation.query.all()
    returnObj = [x.as_dict() for x in pres]
    print(returnObj)
    return {"links": returnObj}


@app.route('/links/delete', methods=['POST'])
def deleteLink():
    pres = Presentation.query.get(request.json["id"])
    # TODO: Add no matching records handling
    db.session.delete(pres)
    db.session.commit()
    return {"code": 0}


@app.route('/links/update', methods=['POST'])
def updateLink():
    pres = Presentation.query.get(request.json["id"])
    pres.name = request.json["name"]
    pres.url = request.json["url"]
    db.session.add(pres)
    db.session.commit()
    return {"code": 0}


@app.route('/links/add', methods=['POST'])
def addLink():
    newPres = Presentation(name=request.json["name"], url=request.json["url"])
    db.session.add(newPres)
    db.session.commit()
    return {"code": 0, "obj": newPres.as_dict()}


if __name__ == '__main__':

    with app.app_context():
        db.create_all()

    if len(sys.argv) != 1:
        if sys.argv[1] == "prod":
            from waitress import serve
            serve(app, host="127.0.0.1", port=6000)
        else:
            app.run(debug=True, port=3000, host="127.0.0.1")
    else:
        app.run(debug=True, port=3000, host="127.0.0.1")
