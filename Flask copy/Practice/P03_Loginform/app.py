from flask import Flask, render_template, request
from flask.views import MethodView

# インスタンス生成
app = Flask(__name__)

# 疑似的なログインを作成
class LoginSystem(MethodView):
    # getでアクセス時の処理
    # →　メソッド(第一引数は必ずself)
    def get(self):
        return render_template("login.html")
    
    # postでアクセス時の処理
    def post(self):
        id = request.form.get("id")
        pw = request.form.get("pw")
        return render_template("success.html",id=id,pw=pw)

# /に対してルーティング
# クラスの書き方
app.add_url_rule("/",view_func=LoginSystem.as_view("login"))


if id == 123 :
    

if __name__ == "__main__":
    # デバッグモード
    app.debug = True
    # ホストとポートの指定
    # WEBサーバー実行
    app.run(host="0.0.0.0",port=5000)