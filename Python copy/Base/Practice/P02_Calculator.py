import tkinter

# インスタンス化
root = tkinter.Tk()
# ウィンドウの背景色の指定
root.configure(bg="#00FFFF")

# ウィンドウのタイトル
root.title("電卓")
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


# 表示開始
root.mainloop()