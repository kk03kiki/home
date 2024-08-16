# 課題
# 1段回目、任意の人を登録できるようにしてください。
# 2段階目、登録した人からランダムに1人を出力してください。
# 3段階目、偏らない様に、全員が平等に出力されるようにしてください。
# 4段階目、アプリケーションを終了しても、データを維持できるようにしてください。（データの読み込みと保存）

# 以下サンプルコード
# print("プログラムを開始します")
# endFlag = False
# # endFlagがTrueでないとき、下記の動きをする。０以外を入力されたらまたwhile not endFlag:に戻ってループする。
# # True(0が入力されたとき)に、print("プログラムを終了します。")が動く。
# while not endFlag:
#     print("選択してください。")
#     print("[1]挨拶[2]自己紹介[0]終了")
#     cmd = input()
#     if cmd == "1":
#         print("こんにちは")
#     elif cmd == "2":
#         print("どうも、コンソールアプリです。")
#     elif cmd == "0":
#         print("終了が選択されました。")
#         endFlag = True
#     else:
#         print("正しいコマンドを入力してください。")
# print("プログラムを終了します。")




# 1段回目、複数の任意の人を登録できるようにしてください。

# 一人だけ追加の場合
# print("プログラムを開始します")
# Registration = input("ここに名前を入力して下さい:")
# print("登録した人は："+ Registration + "です")

# Randomをインポート
import random

myList = []
endFlag = False
while not endFlag:
    print("選択してください。[0]入力で終了")
    cmd = input("ここに名前を入力してください：")
    if cmd == "0":
        print("終了が選択されました。")
        endFlag = True
    else:
        myList.append(cmd)
print(myList)



# 2段階目、登録した人からランダムに1人を出力してください。
print = ("ランダムで1人摘出します")
print = (random.choice(myList))