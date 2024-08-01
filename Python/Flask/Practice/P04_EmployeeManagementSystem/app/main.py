from flask import flash, redirect, render_template, request, url_for
from flask.views import MethodView
from app import app,db,Employee,Department

# データ一覧の表示ページ
@app.route("/")
def index():
    dbses = db.session
    # 全件取得処理
    res = dbses.query(Employee).filter(Employee.del_flag == 0).all()
    return render_template("index.html",datas = res)

# 新規登録処理
class EmployeeCreate(MethodView):
    def get(self):
        # 新規登録モードでEmployeeDetail.htmlを呼び出す
        # 部署IDのSelected処理
        dbses = db.session
        # 初期化
        deptSelect = {}
        # departmentテーブルのレコードをクエリして変数に代入
        depts = dbses.query(Department).all()
        # dept.idをキーとして、deptSelect辞書に作成
        for dept in depts:
            deptSelect[dept.id] = {'name':dept.name,'selected':''}
        return render_template("EmployeeDetail.html",mode=1,deptSelect=deptSelect)

    def post(self):
        name = request.form.get("name")
        age = request.form.get("age")
        gender = request.form.get("gender")
        dept_id = request.form.get("dept_id")
        # 論理削除フラグは0
        del_flag = 0
        data = Employee(name=name,age=age,gender=gender,dept_id=dept_id,del_flag=del_flag)
        dbses = db.session
        dbses.add(data)
        dbses.commit()
        flash("データの作成に成功しました。")
        # 全件表示のページへリダイレクト
        return redirect(url_for('index'))
    

# 課題内容追加部分------------------------------------------------
# 部署名変更
app.add_url_rule("/edetail",view_func=EmployeeCreate.as_view("edetail"))

 # 更新[詳細]ボタンを押した先の内容
@app.route("/detail/<id>")
def detail(id):
    sqlses = sql.session
    res = sqlses.SELE

# @ap　p.rou　te() の代わりに app.a　dd_url_rul　e() を使用
app.add_url_rule("/eCreate",view_func=EmployeeCreate.as_view("eCreate"))

# 更新[詳細]ボタンを押した先の内容
@app.route("/detail/<id>")
def detail(id):
    dbses = db.session
    res = dbses.query(Employee).get(id)

    # 性別のSelected処理
    res.genderSelect = ['','','']
    try:
        res.genderSelect[res.gender] = 'selected'
    except TypeError:
        pass

    # 部署IDのSelected処理
    res.deptSelect = {}
    depts = dbses.query(Department).all()
    for dept in depts:
        res.deptSelect[dept.id] = {'name':dept.name,'selected':''}
    try:
        res.deptSelect[res.dept_id]['selected'] = 'selected'
    except KeyError:
        pass
    print(res.deptSelect)

    # 詳細モードでEmployeeDetail.htmlを呼び出す
    return render_template("EmployeeDetail.html",data=res,mode=2)



# 更新完了処理（上記の変更内容で登録）
class EmployeeUpdate(MethodView):
    def get(self,id):
        dbses = db.session
        res = dbses.query(Employee).get(id)

        # 性別のSelected処理
        res.genderSelect = ['','','']
        try:
            res.genderSelect[res.gender] = 'selected'
        except TypeError:
            pass

        # 部署IDのSelect処理
        res.deptSelect = {}
        depts = dbses.query(Department).all()
        for dept in depts:
            res.deptSelect[dept.id] = {'name':dept.name,'selected':''}
        # 部署IDのSelected処理
        try:
            res.deptSelect[res.dept_id]['selected'] = 'selected'
        except KeyError:
            pass
        print(res.deptSelect)

        # 更新モードでEmployeeDetail.htmlを呼び出す
        return render_template("EmployeeDetail.html",data=res,mode=3)
    def post(self,id):
        name = request.form.get("name")
        age = request.form.get("age")
        gender = request.form.get("gender")
        dept_id = request.form.get("dept_id")
        data = Employee(name=name,age=age,gender=gender,dept_id=dept_id)
        dbses = db.session
        res = dbses.query(Employee).get(id)
        if res == None:
            # idが存在しない時
            flash("指定されたIDが存在しないので失敗しました。")
            return redirect(url_for('index'))
        else:
            # データを更新する処理
            res.name = name
            res.age = age
            res.gender = gender
            res.dept_id = dept_id
            dbses.commit()
            flash("データの更新に成功しました。")
            # 全件表示のページへリダイレクト
            return redirect(url_for('index')) 
   
app.add_url_rule("/update/<id>",view_func=EmployeeUpdate.as_view("eUpdate"))


# 削除ボタン
@app.route("/delete/<id>")
def delete(id):
    dbses = db.session
    res = dbses.query(Employee).get(id)
    if res == None:
        # idが存在しない時
        flash("指定されたIDが存在しないので失敗しました。")
        return redirect(url_for('index'))
    else:
        # データを削除する処理
        res.del_flag = 1
        dbses.commit()
        flash("データの削除に成功しました。")
        # 全件表示のページへリダイレクト
        return redirect(url_for('index')) 