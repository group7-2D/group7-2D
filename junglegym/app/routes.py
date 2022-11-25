from flask import render_template
from app import application

@application.route('/')
@application.route('/demo')
def demo():
    return render_template('demo.html', title='Home')
