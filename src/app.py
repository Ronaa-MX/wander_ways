from flask import Flask, render_template
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
@app.route('/')

def map_func():
    return render_template()