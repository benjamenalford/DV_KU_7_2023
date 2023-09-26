from flask import Flask

app = Flask(__name__)


@app.route('/')
def home():
    return "Welcome home from return"


@app.route('/about')
def about():
    return "stuff about me"


if __name__ == "__main__":
    app.run(debug=True)
