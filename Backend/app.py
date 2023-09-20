from flask import Flask, jsonify, request
from app import create_app
from flask_cors import CORS
from flask_mail import Mail, Message
import os

app = create_app()


CORS(app)
mail =Mail(app)
app.config['MAIL_SERVER'] = "smtp.gmail.com"
app.config['MAIL_PORT'] = 465
app.config['MAIL_USERNAME'] = "firestopusaflask@gmail.com"
app.config['MAIL_PASSWORD'] = "tvop swzw zzsp idzi"
app.config["MAIL_USE_SSL"] = True
app.config['MAIL_USE_TLS'] = False
mail = Mail(app)
@app.route('/home', methods=["GET", 'POST'])
def home():
    if request.method == "POST":
        msg = Message("Hey", sender="firestopusaflask@gmail.com", recipients=["firestopusaflask@gmail.com"])
        msg.body = "Hey how are you? is everything okay?"
        
        try:
            mail.send(msg)
        except Exception as e:
            return str(e)

    return jsonify("sent email")

@app.route("/users", methods=["GET"])
def users():
    response= jsonify([
        {"id": 1, "name": "User 1"},
        {"id": 2, "name": "User 2"},
        {"id": 3, "name": "User 3"},
    ])
    return response


if __name__ == '__main__':
    app.run()
