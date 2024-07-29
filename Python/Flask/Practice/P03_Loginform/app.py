from flask import Flask, render_template
from flask.views import MethodView
from app2_02 import loginSystem

# インスタンス生成
app = Flask(__name__)

# Blueprintの登録(親子関係)
app.register_blueprint(loginSystem)


@app.route("/")
def index():
    return render_template("index.html")



    

if __name__ == "__main__":
    # デバッグモード
    app.debug = True
    # ホストとポートの指定
    # WEBサーバー実行
    app.run(host="0.0.0.0",port=8080)