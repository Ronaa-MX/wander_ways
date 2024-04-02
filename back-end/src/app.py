from flask import Flask, render_template
from flask_sqlalchemy import SQLAlchemy
import geopy

app = Flask(__name__)
app.config["SQL_ALCHEMY_DATABASE_URI"]='sqlite://///home/paaron/Documentos/Proyectos/wonder_ways/back-end/src/sites.db'

@app.route('/',)
@app.route('/museams')
@app.route('/')