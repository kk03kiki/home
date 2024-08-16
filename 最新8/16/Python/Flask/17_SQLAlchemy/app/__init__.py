print("initファイルの実行")
from flask import Flask
from flask_sqlalchemy import SQLAlchemy

# インスタンス生成
app = Flask(__name__)
# Sessionのシークレットキー
app.secret_key = b"hit"
# SQLAlchemyの接続先サーバーの設定
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///ToDo.db'
# Flaskインスタンスと連動設定
db = SQLAlchemy(app)

# DBへmodelの設定
from app.src.model.Todo import ToDo
# DBの初期化
with app.app_context():
    db.create_all()

# Flaskの設定
from app import main
