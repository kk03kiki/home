from flask import flash, redirect, render_template, request, url_for
from app import app,db,ToDo

# データ一覧の表示ページ
@app.route("/")
def index():
    dbses = db.session
    # 全件取得処理
    res = dbses.query(ToDo).all()
    dbses.close()
    return render_template("index.html",datas = res)

# データの挿入処理
@app.route("/create",methods=["POST"])
def create():
    # フラスコから送られてきたデータを
    text = request.form.get("text")
    data = ToDo(text=text)
    dbses = db.session
    # 追加
    dbses.add(data)
    # 反映
    dbses.commit()
    flash("データの作成に成功しました")
    # 全件表示のページへリダイレクト
    return redirect(url_for('index'))

# データの更新
@app.route("/update",methods=["POST"])
def update():
    text = request.form.get("text")
    id = request.form.get("id")
    dbses = db.session
    # １件検索
    res = dbses.query(ToDo).get(id)
    if res == None:
        # idが存在しない時
        flash("指定されたIDが存在しないので失敗しました。")
        return redirect(url_for('index'))
    else:
        # データを更新する処理
        res.text = text
        dbses.commit()
        flash("データの更新に成功しました")
        # 全件表示のページへリダイレクト
        return redirect(url_for('index'))
    

# データの削除処理
# サブミットを作成したらフォームを作成しないといけない
@app.route("/delete")
def delete():
    # getからIDを取得
    id = request.args.get("id")
    dbses = db.session
    # １件検索
    res = dbses.query(ToDo).get(id)
    if res == None:
        # idが存在しない時
        flash("指定されたIDが存在しないので失敗しました。")
        return redirect(url_for('index'))
    else:
        dbses.delete(res)
        dbses.commit()
        flash("データの削除に成功しました。")
        return redirect(url_for('index'))

