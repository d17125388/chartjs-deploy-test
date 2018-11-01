from flask import (
    Flask, render_template, make_response
)
import json

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')


@app.route('/api', methods=['GET'])
def api():
    test_dict = {
        "0-1": 438,
        "3-5": 300,
        "6-8": 288,
        "9-11": 255,
        "12-14": 247,
        "15-17": 266,
        "18-20": 261,
        "21-23": 170,
        "24-26": 140,
        "27-29": 111,
        "30+": 120
    }
    data = json.dumps(test_dict)
    res = make_response(data)
    # res.headers.set('Access-Control-Allow-Origin', '*')
    return res

if __name__ == '__main__':
    app.run(debug=True)
