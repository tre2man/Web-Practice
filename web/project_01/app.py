from flask import Flask, request, render_template
app = Flask(__name__)

@app.route("/")
def root():
    return render_template("index.html")

@app.route("/index.html")
def index():
    return render_template("index.html")

@app.route("/aboutme.html")
def aboutme():
    return render_template("aboutme.html")

@app.route("/photo.html")
def photo():
    return render_template("photo.html")

if __name__ =='__main__':
    app.run(debug=True)