from flask import flash, redirect, render_template, request, url_for,Blueprint
from flask.views import MethodView
from app import app,db,Department

# Blueprintの名称：APP2
# モジュール名：app2
# URL：/APP2
# ブループリント→　引数がdeptMでURLが/deptManagerとなる
deptM = Blueprint("deptM",__name__,url_prefix="/deptManager")

@deptM.route("/")
def index():
    dbses = db.session
    # departmenttableから部署名の全件取得処理
    # del_flag == 0は、データを削除する場合はコードを書かないといけないが、０にする
    res = dbses.query(Department).filter(Department.del_flag == 0).all()
    return render_template('deptIndex.html',datas = res)


class DepartmentCreate(MethodView):
    def get(self):
        # 新規登録モードでDepartmentDetail.htmlを呼び出す
        return render_template("DepartmentDetail.html",mode=1)

    def post(self):
        name = request.form.get("name")
        # 論理削除フラグは0
        del_flag = 0
        data = Department(name=name,del_flag=del_flag)
        dbses = db.session
        dbses.add(data)
        dbses.commit()
        flash("データの作成に成功しました。")
        # 全件表示のページへリダイレクト
        return redirect(url_for('deptM.index'))
#dCreate(deptIndex)関数 →DepartmentCreateクラス処理（URLがdeptManager/dCreate）
deptM.add_url_rule("/dCreate",view_func=DepartmentCreate.as_view("dCreate"))

# 部署データの詳細表示
@deptM.route("/detail/<id>")
def detail(id):
    dbses = db.session
    res = dbses.query(Department).get(id)
    # 詳細モードでEmployeeDetail.htmlを呼び出す
    return render_template("DepartmentDetail.html",data=res,mode=2)

# 部署データの更新
class DepartmentUpdate(MethodView):
    def get(self,id):
        dbses = db.session
        res = dbses.query(Department).get(id)
        # 更新モードでEmployeeDetail.htmlを呼び出す
        return render_template("DepartmentDetail.html",data=res,mode=3)

    # 既存部署の変更の場合
    def post(self,id):
        name = request.form.get("name")
        dbses = db.session
        res = dbses.query(Department).get(id)
        if res == None:
            # idが存在しない時
            flash("指定されたIDが存在しないので失敗しました。")
            return redirect(url_for('index'))
        else:
            # データを更新する処理
            res.name = name
            dbses.commit()
            flash("データの更新に成功しました。")
            # 全件表示のページへリダイレクト
            return redirect(url_for('deptM.index')) 
   
deptM.add_url_rule("/update/<id>",view_func=DepartmentUpdate.as_view("dUpdate"))

@deptM.route("/delete/<id>")
def delete(id):
    dbses = db.session
    res = dbses.query(Department).get(id)
    if res == None:
        # idが存在しない時
        flash("指定されたIDが存在しないので失敗しました。")
        return redirect(url_for('deptM.index'))
    else:
        # データを削除する処理
        res.del_flag = 1
        dbses.commit()
        flash("データの削除に成功しました。")
        # 全件表示のページへリダイレクト
        return redirect(url_for('deptM.index')) 