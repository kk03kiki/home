import tkinter

# インスタンス化
root = tkinter.Tk()
# ウィンドウの背景色の指定
root.configure(bg="#00FFFF")

# ウィンドウのタイトル
root.title("自己紹介")
# ウィンドウのサイズ
root.geometry("400x500")

# ラベルのインスタンス化
lb = tkinter.Label(text="自己紹介をします。")
# ラベルの設置
lb.pack(anchor=tkinter.NW)

# 入力フォームのインスタンス化
e = tkinter.Entry(bg="#FF0000")
# 入力フォームの設置
e.pack(anchor=tkinter.NW)

# ボタンのクリックイベント時の処理
def push_button():
    lb.configure(text=f"私の名前は『{e.get()}』です。")

# ボタンのインスタンス化と同時にコールバック関数の設定
bt = tkinter.Button(text="紹介",command=push_button)
# ボタンの設置
bt.pack(anchor=tkinter.NW)

# キャンパスのインスタンス化
c = tkinter.Canvas(bg="#FFFFFF",height=100,width=100)
# キャンパスの設置
c.pack(anchor=tkinter.NW)
# 線引き
c.create_line(0,0,60,100,fill="#000000")

# 表示開始
root.mainloop()