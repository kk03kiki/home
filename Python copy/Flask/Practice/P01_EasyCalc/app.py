from flask import Flask, request, render_template

# インスタンス生成
app = Flask(__name__)

@app.route("/")
def index():
    return render_template("pages/index.html")

@app.route("/result")
def result():
    # index.htmlからデータを取得
    # getは数字を受け取ってもすべて文字として受け取る
    num1 = request.args.get("num1")
    num2 = request.args.get("num2")
    # 合計
    totalPy = int(num1) + int(num2)
    # totalはresult、totalPyは上記合計
    return render_template("pages/result.html",total=totalPy)


if __name__ == "__main__":
    # デバッグモード
    app.debug = True
    # ホストとポートの指定
    # WEBサーバー実行
    app.run(host="0.0.0.0",port=8080)