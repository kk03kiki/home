from flask import Flask

# インスタンス生成
app = Flask(__name__)

# ルーティング『/』にアクセスされたときの処理
@app.route("/")
# ルーティングの条件で実行される関数
def hello_world():
    return "<h1>ハロー</h1>フラスコ！！！！"

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

    
