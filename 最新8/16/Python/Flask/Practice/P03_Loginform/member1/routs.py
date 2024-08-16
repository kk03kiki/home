# Blueprint: アプリケーションの一部をモジュール化(ブループリント化)するための機能。
# request: クライアントからのリクエストデータにアクセス(GET,POST)するためのオブジェクト。
# redirect: ユーザーに別のURL返すための関数。
# url_for: ルート名からURLを生成するための関数。url_for('login_bp.success')()内は関数名
# MethodView: クラスベースのビューを作成するための基底クラス。
# ビュー == リクエスト(GET,POST)に対してどのような動作を返すかを記した関数。 
from flask import Blueprint, render_template, request, redirect, url_for
from flask.views import MethodView


# ブループリント(login_bp)の作成
# 今回はログインに関連するルートや機能をまとめるために使われる
# template_folder='../templates' == テンプレートファイルのあるパスを指定する。
member1 = Blueprint('member1', __name__, template_folder='member1',url_prefix="/LoginSystem14")

# GET,POSTに対しての処理を書くためのクラス
class LoginView(MethodView):

    # GETが来た時の処理(HTMLのaタグはGET)
    def get(self):
        return render_template('login_01.html')

    # POSTが来た時の処理(login.htmlでのformタグのmethod属性に、POSTを指定した為
    # bottonタグがsubmitでPOSTされる。その際name属性や)
    def post(self):
        # request.form.get('id') == login.htmlのnameからの入力を取得
        user_id = request.form.get('id')
        password = request.form.get('password')

        if user_id == '38' and password == '111':  # 簡単な例としての認証条件
            return redirect(url_for('member1.success'))
        else:
            return redirect(url_for('member1.login'))
        
# add_url_rule: ブループリントに新しいルートを追加します。
# '/login': このルートにアクセスするとLoginViewが処理します。
# view_func=LoginView.as_view('login'): LoginViewをビュー関数として登録します。
# methods=['GET', 'POST']: このルートはGETリクエストとPOSTリクエストの両方に対応します。
member1.add_url_rule('/login', view_func=LoginView.as_view('login'), methods=['GET', 'POST'])

@member1.route('/success')
def success():
    return render_template('success.html')