# =============
# ロジック
# プログラミングの内容
# =============

from sqlalchemy.orm  import scoped_session, Session
from DatabaseManager import Person

def add(scoped_ses:scoped_session):
    name = input("名前を入力してください。\n>")
    gender = numberRangeInput("性別を入力してください。\n[1]男[2]女[3]その他",1,3)
    age = numberRangeInput("年齢を入力してください。",0,150)
    p = Person(name=name,gender=gender,age=age)
    # 挿入予定のデータを出力
    dispRecord(p)
    if confirm("上記のデータで登録します。\nよろしいでしょうか？"):
        # セッション開始
        session = scoped_ses()
        # DB操作[データの挿入]
        session.add(p)
        # DB操作[コミット]
        session.commit()
        # DB操作セッションの終了
        session.close()
        print("登録が実行されました。")
    else:
        print("登録がキャンセルされました。")

def getAll(scoped_ses:scoped_session):
    # セッション開始
    session = scoped_ses()
    # DB操作[全件取得処理]
    res = session.query(Person).all()
    for record in res:
        print("----------------")
        dispRecord(record)
    print("----------------")
    # DB操作セッションの終了
    session.close()

def update(scoped_ses:scoped_session):
    # セッション開始
    session = scoped_ses()
    inputNo = input("更新するIDを指定してください。\n>")
    # １件データ取得
    person = session.get(Person,inputNo)
    if person is None:
        print("存在しないIDが指定されました。")
        # DB操作セッションの終了
        session.close()
        return
    dispRecord(person)
    name = input("名前を入力してください。\n>")
    if name != "":
        person.name = name
    gender = numberRangeInput("性別を入力してください。\n[1]男[2]女[3]その他",1,3,True)
    if gender != "":
        person.gender = gender
    age = numberRangeInput("年齢を入力してください。",0,150,True)
    if age != "":
        person.age = age
    dispRecord(person)
    if confirm("上記のデータで更新します。\nよろしいでしょうか？"):
        session.commit()
        print("更新が実行されました。")
    else:
        print("更新がキャンセルされました。")
    # DB操作セッションの終了
    session.close()
def delete(scoped_ses:scoped_session):
    # セッション開始
    session = scoped_ses()
    inputNo = input("削除するIDを指定してください。\n>")
    person = session.query(Person).filter(Person.id == inputNo)
    if person.count() == 0:
        print("存在しないIDが指定されました。")
        # DB操作セッションの終了
        session.close()
        return
    dispRecord(person.first())
    if confirm("上記のデータを削除します。\nよろしいでしょうか？"):
        person.delete()
        session.commit()
        print("削除が実行されました。")
    else:
        print("削除がキャンセルされました。")
    session.commit()

 # 出力メソッドの定義
 # →　型（今回はperdon）しか受け付けない意味。record:〇〇。recordは変数名、personが型
def dispRecord(record:Person):
    # 辞書型dictionary
    dicRecord = record.getData()
    print(f"id:{dicRecord["id"]}")
    print(f"name:{dicRecord["name"]}")
    print(f"gender:{transGenderNumToStr(dicRecord["gender"])}")
    print(f"age:{dicRecord["age"]}")

# 整数入力関数の定義
def numberInput(msg,empty=False):
    while True:
        cmd = input(msg + "\n>")
        if empty and cmd == "":
            return ""
        else:
            try:
                return int(cmd)
            except:
                print("ERROR:整数を入力してください。")

# 範囲指定、数値入力チェック関数の定義
def numberRangeInput(msg,min,max,empty=False):
    while True:
        cmd = numberInput(msg,empty)
        if cmd != "":
            num = int(cmd)
            if min <= num <= max:
                return num
            else:
                print(f"ERROR:{min}~{max}の範囲の整数を入力してください。")
        else:
            return ""        

# 承認チェック関数
def confirm(msg):
    while True:
        cmd = input(f"{msg}\n [y]YES[n]NO\n>")
        if cmd == "y":
            return True
        elif cmd == "n":
            return False
        else:
            print("ERROR:正しく入力してください。")

# 性別を番号から文字列に変換する関数
# →　｛｝は辞書型、きーは文字列だが、
genderNumToStr = {1:"男",2:"女",3:"その他"}
def transGenderNumToStr(genderNum):
    try:
        genderStr = genderNumToStr[genderNum] #呼び出すとき(辞書型)は[]。()は関数・メソッドを実行するとき
    except:
        genderStr = "ERROR:データが不正です。"
    return genderStr
