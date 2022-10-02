from flask import Flask
import time

app = Flask(__name__)

@app.route('/time')
def get_current_time():
    return {'time': time.time()}

@app.route('/links', methods=['GET', 'POST'])
def getPresentationLinks():
    return {'links': ["link1", "link2"]}


if __name__ == '__main__':
    app.run(debug=True, port=6000, host="localhost")