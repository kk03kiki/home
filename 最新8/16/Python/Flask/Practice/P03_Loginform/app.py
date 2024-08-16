from flask import Flask, render_template
from flask.views import MethodView
from app2 import loginSystem
from member1.routs import member1
from member2.routs2 import member2
from member3.routs3 import member3

# インスタンス生成
app = Flask(__name__)

# Blueprintの登録(親子関係)
app.register_blueprint(loginSystem)
app.register_blueprint(member1)
app.register_blueprint(member2)
app.register_blueprint(member3)


@app.route("/")
def index():
    return render_template("index.html")



    

if __name__ == "__main__":
    # デバッグモード
    app.debug = True
    # ホストとポートの指定
    # WEBサーバー実行
    app.run(host="0.0.0.0",port=8080)