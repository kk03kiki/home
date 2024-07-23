# =============
# モジュール
# =============

# クラスの作成
# メンバークラス
class Member:
    # →　変数の定義
    def __init__(self,name,age):
        # →　変数の初期化
        self.name = name
        self.age = age


# 読み込むときにも実行される
# →　(member.py)実行されると__main__になる
# →　(Main.py)インポートされると__name__になる
print(f"{__name__}を読み込みました。")

# →　上のを利用してテストコードができる
if __name__ == "__main__":
    print("---- テストコード ----")
    member01 = Member("木内",36)
    print(f"名前は{member01.name}です。")
    print(f"年齢は{member01.age}です。")
