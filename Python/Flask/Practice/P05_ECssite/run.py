from app import app

if __name__ == "__main__":
    # WEBサーバー実行
    app.run(host="0.0.0.0",port=5001,debug=True)