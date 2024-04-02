from flask import Flask
from flask_marhsmallow import Marshmallow
from flask_sqlalchemy import SQLAlchemy
import geopy

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = 'sqlite://///home/paaron/Documentos/Proyectos/wonder_ways/back-end/src/sites.db'
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

database = SQLAlchemy(app)
ma = Marshmallow(app)

@app.route('/',)
@app.route('/museams')
@app.route('/')