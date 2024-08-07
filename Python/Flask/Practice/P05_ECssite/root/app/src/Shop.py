# 商品一覧
# カートへの商品追加

from flask import Blueprint, render_template, request, redirect, url_for
import sqlite3

shop_blueprint = Blueprint('shop', __name__)

DATABASE = 'instance/DB.db'

def get_db():
    db = getattr(g, '_database', None)
    if db is None:
        db = g._database = sqlite3.connect(DATABASE)
    return db

@shop_blueprint.teardown_appcontext
def close_connection(exception):
    db = getattr(g, '_database', None)
    if db is not None:
        db.close()

@shop_blueprint.route('/shop')
def shop():
  # データベースから商品一覧を取得
  db = get_db()
  cur = db.cursor()
  cur.execute("SELECT * FROM 商品")
  items = cur.fetchall()

  return render_template('shop.html', items=items)

@shop_blueprint.route('/add_to_cart/<item_id>')
def add_to_cart(item_id):
  # カートへの追加処理
  return redirect(url_for('shop.shop')) 