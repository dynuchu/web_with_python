import requests
from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def index():
    response = requests.get("http://swapi.co/api/planets/").json()
    return render_template('index.html', response=response)


if __name__ == "__main__":
    app.run(host='127.0.0.1', port=5000, debug=True)





