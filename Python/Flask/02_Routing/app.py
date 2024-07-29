from flask import Flask,request

# インスタンス生成
app = Flask(__name__)

# ルーティング『/』にアクセスされたときの処理
# →　一番最初の画面、URLに何も書いていない（/がない）
@app.route("/")
# ルーティングの条件で実行される関数
def hello_world():
    return '<h1>ハロー2</h1>フラスコ！！！！<a href="/page">ページへ進む</a>'


# ルーティング『/page』にアクセスされたときの処理
@app.route("/page")
def page():
    return 'ページ<a href="/">ホームへ戻る</a>'

# ルーティング『/pages』にアクセスされたときの処理
# http://localhost:5001/pages/100
# <id>はダイナミックルーティング
# Pythonの関数の引数と連動する。
# あたかもいくつものページが存在するように見える。
@app.route("/pages/<id>")
def pages(id):
    return f'ページ{id}<a href="/">ホームへ戻る</a>'


# GETパラメータ
# http://localhost:5001/get?id=100
# →　検索など使用される場合に使われる？（専用のページ）
@app.route("/get")
def get():
    # →　reque st.ar gs.は固定。ゲット取得方法
    id = request.args.get("id")
    return f'ページ{id}<a href="/">ホームへ戻る</a>'



# →　保存したら自動で動く（更新？）
if __name__ == "__main__":
    # pythonで実行した時に動作
    # デバックモード
    app.debug = True
    # ホストとポートの指定
    # Webサーバー実行
    app.run(host="0.0.0.0",port=5001)
    # コマンドで実行される場合は(ポート番号は何でもいい例:5001)
    # flask --app app run -h 0.0.0.0 -p 5001 --debugger --reload

    
