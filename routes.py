from flask import render_template
from app import application

@application.route('/')
@application.route('/index')
def index():
    return render_template('index2.html', title='2D Project Group 7')
