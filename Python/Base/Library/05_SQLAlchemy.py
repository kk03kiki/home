# =============
# SQLAlchemy(ORMの利用)
# =============

from sqlalchemy import Column, Integer, String, create_engine
from sqlalchemy.orm import declarative_base, sessionmaker


# モデルを作成
# プログラムでいうとClassの事
# DBでいうとテーブルの事

# モデルのベースクラスを取得
Base = declarative_base()

# モデルの定義
class Person(Base):

    # テーブル名
    __tablename__ = "person"

    # カラムの定義
    id = Column(Integer, primary_key=True)
    name = Column(String(30))
    gender = Column(Integer)
    age = Column(Integer)

    # データを辞書型で取得する
    def getData(self):
        return {
            "id":int(self.id),
            "name":str(self.name),
            "gender":int(self.gender),
            "age":int(self.age),
        } 

# テストコード
if __name__ == "__main__":
    # ORMエンジンの使用準備と接続
    db = create_engine("sqlite:///InputOutput/PersonAlchemy.db")

    # テーブルを自動生成する準備
    Base.metadata.create_all(bind=db,checkfirst=True)

    # セッション
    Session = sessionmaker(bind=db)
    ses = Session()

    # データベース操作
    # データの挿入
    p1 = Person(name="木内",gender=1,age=32)
    ses.add(p1)
    ses.commit()

    # 出力メソッドの定義
    def dispRecord(record:Person):
        dicRecord = record.getData()
        print(f"id:{dicRecord["id"]}")
        print(f"name:{dicRecord["name"]}")
        print(f"gender:{dicRecord["gender"]}")
        print(f"age:{dicRecord["age"]}")

    # 全データ取得
    print("全データ取得")
    res1 =  ses.query(Person).all()

    for record in res1:
        dispRecord(record)

    print("1件だけデータ取得(id=2)")
    # １件データ取得
    # →　getを使用して取得
    # ID(プライマリキー)が２番のレコードを取得
    # →　sesはsessionの略
    # →　カラムの定義でprimary_keyは２番目だから
    p2 = ses.get(Person,2)
    dispRecord(p2)

    # 1件データ取得(検索)
    print("１件データ取得(id=3)")
    # →　filterを使用して検索
    # →　first()を書かなければ配列になる（書かなければ配列になりすべてでてくる?)
    p3 = ses.query(Person).filter(Person.id == 3).first()
    dispRecord(p3)

    # データ検索
    print("データ取得(age=37)")
    p4 = ses.query(Person).filter(Person.age == 37)
    for record in p4:
        dispRecord(record)

    # データ検索(あいまい検索)
    print("データ検索(name=『木』が付くもの)")
    p5 = ses.query(Person).filter(Person.name.like("%木%"))
    for record in p5:
        dispRecord(record)

    # データの更新
    print("データの更新")
    print("idを指定して内容を書き換える")

    inputNo = input("IDを指定してください。：")
    # １件データ取得
    p6 = ses.get(Person,inputNo)
    print("データの更新前(わかりやすくするためにいったん表示)")
    dispRecord(p6)
    # データを書き換える
    p6.name = "木之内"
    # コミット(更新)
    ses.commit()
    print("データの更新後")
    dispRecord(p6)


    # データの削除
    ses.query(Person).filter(Person.name == "木之内").delete()
    ses.commit()
