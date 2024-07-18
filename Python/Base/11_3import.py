# =============
# インポート
# =============

# 指定したクラスを取り込む場合は
# →　メリット　メモリの消費を抑えることができる。デメリット　クラスを毎回追加、かぶるとややこしい
from tkinter import Tk,Label

# モジュールすべてのクラスを取り込む場合は
# from tkinter import *

# tkinter.いらない
rt = Tk()
rt.title("インポートサンプル01")
rt.geometry("210x100")

lb = Label(text="インポートサンプル01")
lb.pack()

rt.mainloop()