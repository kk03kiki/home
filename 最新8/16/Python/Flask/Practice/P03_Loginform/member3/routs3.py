from flask import Blueprint, render_template, request, redirect, url_for
from flask.views import MethodView

# Blueprintを作成します。これにより、views.py内のルートをまとめて管理できます
member3 = Blueprint('member3', __name__, template_folder='member3',url_prefix="/LoginSystem15")

# ログインページのビューを定義します
class LoginView(MethodView):
    def get(self):
        # GETリクエストが来た場合、ログインページを表示します
        return render_template('login_03.html')

    def post(self):
        # POSTリクエストが来た場合、フォームから送信されたIDとパスワードを取得します
        user_id = request.form['id']
        password = request.form['password']
        # IDとパスワードが正しいか確認します
        if user_id == '1' and password == '1':
            # 正しければ成功ページにリダイレクトします
            return redirect(url_for('member3.success'))
        # 間違っていれば再度ログインページを表示し、エラーメッセージを表示します
        return render_template('member3.html', error='Invalid credentials')

# 成功ページのビューを定義します
class SuccessView(MethodView):
    def get(self):
        # GETリクエストが来た場合、成功ページを表示します
        return render_template('success.html')

# ログインページと成功ページのルートをBlueprintに追加します
member3.add_url_rule('/login', view_func=LoginView.as_view('login'))
member3.add_url_rule('/success', view_func=SuccessView.as_view('success'))