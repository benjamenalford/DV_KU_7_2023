from flask import Flask, jsonify
# Python SQL toolkit and Object Relational Mapper
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, inspect

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

engine = create_engine("sqlite:///../../mammal_masses.sqlite", echo=False)
# open DB and reflect data
# Reflect Database into ORM classes
Base = automap_base()
Base.prepare(autoload_with=engine)
NA = Base.classes.na


@app.route('/')
def home():
    return jsonify(["super_hero"])


@app.route("/api/mammal")
def hoobstank():
    # create the session
    session = Session(engine)
    # read the data
    data = session.query(NA.species).all()
    species = []
    # transform the data
    for item in data:
        species.append(item[0])
    # return the data
    return jsonify(species)


@app.route("/api/mammal/<some_species>")
def hoobstank2(some_species):
    # create the session
    session = Session(engine)
    # read the data
    data = session.query(NA).filter(NA.species == some_species).all()
    species = []
    # transform the data
    for item in data:
        animal = {}
        animal["species"] = item.species
        animal["status"] = item.status
        animal["order"] = item.order
        animal["family"] = item.family
        animal["genus"] = item.genus
        species.append(animal)
    # return the data
    return jsonify(species)


@app.route("/api/mammal/status/<status>")
def hoobstank3(status):
    # create the session
    session = Session(engine)
    # read the data
    data = session.query(NA).filter(NA.status == status).all()
    species = []
    # transform the data
    for item in data:
        animal = {}
        animal["species"] = item.species
        animal["status"] = item.status
        animal["order"] = item.order
        animal["family"] = item.family
        animal["genus"] = item.genus
        species.append(animal)
    # return the data
    return jsonify(species)


@app.route("/api/mammal/status/<status>/<some_species>")
def hoobstank4(status, some_species):
    # create the session
    session = Session(engine)
    # read the data
    data = session.query(NA).filter(NA.status == status).filter(
        NA.species == some_species).all()
    species = []
    # transform the data
    for item in data:
        animal = {}
        animal["species"] = item.species
        animal["status"] = item.status
        animal["order"] = item.order
        animal["family"] = item.family
        animal["genus"] = item.genus
        species.append(animal)
    # return the data
    return jsonify(species)


@app.route("/api")
def api():
    return (jsonify(justice_league_members))


@app.route("/api/v1.0/super-hero/<superhero_name>")
def api2(superhero_name):
    print(superhero_name)
    for hero in justice_league_members:
        if (hero['superhero'].lower() == superhero_name.lower()):
            return hero

    return jsonify("no results")


app.run(debug=True)
