# p228テキスト
from flask import redirect,render_template,Blueprint, request, url_for
from flask.views import MethodView


# Blueprintの名称：loginSystem
# ブループリント→　アプリを分割して管理するためのもの
# モジュール名：LoginSystem
# URL：/LoginSystem
# ※分かり辛い場合は名前変更可
loginSystem = Blueprint("LoginSystem",__name__,url_prefix="/LoginSystem02")

# MethodBase
class login_bp2(MethodView):
    # getでのアクセス時(画面表示)
    def get(self):
        return render_template("login.html")
    
    # postでのアクセス時
    def post(self):
        id = request.form.get("id")
        pw = request.form.get("pw")
        if id == "123" and pw == "abc":
            # bluep rint(LoginSystem",)のLoginSystem
            return redirect(url_for('LoginSystem.success'))
        else: 
            return redirect(url_for('LoginSystem.login'))
        
@loginSystem.route("/success")
# メソッッドの名前を書く（succes s ）
def success():
    return render_template("success.html")
    
# 登録
loginSystem.add_url_rule("/login",view_func=login_bp2.as_view("login"))

