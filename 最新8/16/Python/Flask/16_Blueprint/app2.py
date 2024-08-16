# p228テキスト
from flask import Flask,render_template,Blueprint

# Blueprintの名称：APP2
# モジュール名：app2
# URL：/AAP2
# ※分かり辛い場合は名前変更可
app2 = Blueprint("APP2",__name__,url_prefix="/APP2")

@app2.route("/")
def index():
    return render_template("index.html",msg="APP2のホームです。")

@app2.route("/next")
def next():
    return render_template("index.html",msg="APP2のネクストです。")

# MethodBase
from flask.views import MethodView
class APP2A(MethodView):
    # getでのアクセス時
    def get(self):
        return render_template("index.html",msg="APP2Aのホームです。")
    
    # postでのアクセス時
    def post(self):
        return render_template("index.html",msg="APP2AのPOSTです。")
    
# 登録
app2.add_url_rule("/A",view_func=APP2A.as_view("APP2A"))

