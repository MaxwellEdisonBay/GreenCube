from databaseRepo import DataBaseRepo
from flask import Flask
from flask import request
import time

app = Flask(__name__)

db = DataBaseRepo()

mockResponse = {
    'links':
    [
        {'id': '0',
         'name': "Presentation 1",
         'url': "http://localhost:3000/1"},
        {'id': '1',
         'name': "Presentation 2",
         'url': "http://localhost:3000/2"},
        {'id': '2',
         'name': "Presentation 3",
         'url': "http://localhost:3000/3"},
        {'id': '3',
         'name': "Presentation 4",
         'url': "http://localhost:3000/4"},
    ]
}


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
    app.run(debug=True, port=6000, host="localhost")
