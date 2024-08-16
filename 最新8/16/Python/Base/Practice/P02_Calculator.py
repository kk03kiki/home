import tkinter

# インスタンス化
root = tkinter.Tk()

# ウィンドウの設定
# ウィンドウのタイトル
root.title("簡易電卓")
# ウィンドウのサイズ
root.geometry("200x210")

# ラベルの設定
# →　jsでいうテキスト（文字として出力される）
lb01 =  tkinter.Label(text="値1:")
lb02 =  tkinter.Label(text="値2:")
lbAns = tkinter.Label(text="答え")

# 入力フォームの設定
input01 = tkinter.Entry()
input02 = tkinter.Entry()

def add():
    # 加算関数
    # 値の取得
    # →　intは文字を数値として変換する
    # →　.get()は、入力された文字（変換された数値）を引っ張てっくる
    num01 = int(input01.get())
    num02 = int(input02.get())

    # 計算後の答えの出力
    # →　特定のオブジェクトやモジュールの設定やオプションを変更・調整する際に用いられる
    lbAns.configure(text=num01 + num02)

def sub():
    # 減算関数
    # 値の取得
    num01 = int(input01.get())
    num02 = int(input02.get())
    # 計算後の答えの出力
    lbAns.configure(text=num01 - num02)

def mul():
    # 乗算関数
    # 値の取得
    num01 = int(input01.get())
    num02 = int(input02.get())
    # 計算後の答えの出力
    lbAns.configure(text=num01 * num02)

def div():
    # 除算関数
    # 値の取得
    num01 = int(input01.get())
    num02 = int(input02.get())
    # 計算後の答えの出力
    lbAns.configure(text=num01 / num02)

# ボタンの設定
# →　Command　押されたときに実行される
butAdd = tkinter.Button(text="加算",command=add)
butSub = tkinter.Button(text="減算",command=sub)
butMul = tkinter.Button(text="乗算",command=mul)
butDiv = tkinter.Button(text="除算",command=div)

# デザインの設定
# →　packは、上から順に画面上に置くこと(gridはExcelのようにグリット番号を置ける)
lb01.pack()
input01.pack()
lb02.pack()
input02.pack()
lbAns.pack()
butAdd.pack()
butSub.pack()
butMul.pack()
butDiv.pack()


root.mainloop()