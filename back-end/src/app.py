from flask import Flask
from flask_marhsmallow import Marshmallow
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import DeclaritiveBase

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = 'sqlite://///home/paaron/Documentos/Proyectos/wonder_ways/back-end/src/sites.db'
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

database = SQLAlchemy(app)
ma = Marshmallow(app)

#User table

#Sites table
with app.app_context():
    database.reflect()
class museams(database.model):
    __table__= database.metadata.tables["museams"]

#Coordinates of sites table

    
#Images table

#Progess table
with

@app.route('/',)
@app.route('/museams')
@app.route('/')