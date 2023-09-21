from flask import Flask, jsonify, request
from app import create_app
from flask_cors import CORS
from flask_mail import Mail, Message
import os

app = create_app()


CORS(app)
mail =Mail(app)
app.config['MAIL_SERVER'] = "smtp.office365.com"
app.config['MAIL_PORT'] = 587
app.config['MAIL_USERNAME'] = "firestop@stopfireUSA.com"
app.config['MAIL_PASSWORD'] = ""
app.config["MAIL_USE_SSL"] = False
app.config['MAIL_USE_TLS'] = True
mail = Mail(app)
@app.route('/email', methods=["GET", 'POST'])
def home():
    if request.method == "POST":
        data= request.get_json()
        print(data)
        print(data["Name"])
        msg = Message("StopFire Contact Message", sender="firestop@stopfireUSA.com", recipients=["firestop@stopfireUSA.com"])
        msg.body = "Name - " + data["Name"] + "\nAddress - " + data["Address"] + "\nEmail - " + data["Email"] + "\nPhone Numer - " + data["PhoneNumber"] +"\n\n\n\nAdditional Notes - " + data["AdditionalNotes"]
        try:
            mail.send(msg)
            print("working")
            return jsonify("EmailSent")
        except Exception as e:
            print(str(e))
            return jsonify("didnt work")
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
