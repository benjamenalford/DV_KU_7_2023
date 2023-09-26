from flask import Flask

app = Flask(__name__)


@app.route('/')
def home():
    return "Welcome home from return"


@app.route('/about')
def about():
    name = "Ben"
    location = "kansas"
    print(f'My name is {name} and I am in {location}\n\nI am a new line')
    return f'My name is {name} and I am in {location}<br><br>I am a new line'


if __name__ == "__main__":
    app.run(debug=True)
