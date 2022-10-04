from databaseRepo import DataBaseRepo
from flask import Flask
from flask import request
import time
import sys

app = Flask(__name__)

db = DataBaseRepo()

@app.route('/time')
def get_current_time():
    return {'time': time.time()}


@app.route('/links', methods=['GET'])
def getPresentationLinks():
    return {"links": db.getLinks()}


@app.route('/links/delete', methods=['POST'])
def deleteLink():
    db.deletePres(request.json["id"])
    return {"code": 0}


@app.route('/links/update', methods=['POST'])
def updateLink():
    db.updatePres(request.json)
    return {"code": 0}


@app.route('/links/add', methods=['POST'])
def addLink():
    print(request.json)
    newObj = db.addPres(request.json)
    return {"code": 0, "obj": newObj}


if __name__ == '__main__':
    if len(sys.argv)!=1:
        if sys.argv[1] == "prod":
            from waitress import serve
            serve(app, host="127.0.0.1", port=6000)
        else:
            app.run(debug=True, port=6000, host="127.0.0.1")
    else:
            app.run(debug=True, port=6000, host="127.0.0.1")
