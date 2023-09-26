from flask import Flask, jsonify

app = Flask(__name__)

super_hero = [{"name": "chew", "super_power": "Cibolinguist"}]
justice_league_members = [
    {"superhero": "Aquaman", "real_name": "Arthur Curry"},
    {"superhero": "Batman", "real_name": "Bruce Wayne"},
    {"superhero": "Cyborg", "real_name": "Victor Stone"},
    {"superhero": "Flash", "real_name": "Barry Allen"},
    {"superhero": "Green Lantern", "real_name": "Hal Jordan"},
    {"superhero": "Superman", "real_name": "Clark Kent/Kal-El"},
    {"superhero": "Wonder Woman", "real_name": "Princess Diana"}
]


@app.route('/')
def home():
    return jsonify(["super_hero"])


@app.route("/api")
def api():
    return (jsonify(justice_league_members))


@app.route("/api/v1.0/super-hero/<superhero_name>")
def api2(superhero_name):
    print(superhero_name)
    return (jsonify(justice_league_members))


app.run(debug=True)
