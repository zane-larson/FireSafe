from flask import Flask
from flask_cors import CORS
def create_app():
    app = Flask(__name__)
    CORS(app)
    app.config['SECRET_KEY'] = 'oushd782$%@&*@fhjkdsnf'

    return app